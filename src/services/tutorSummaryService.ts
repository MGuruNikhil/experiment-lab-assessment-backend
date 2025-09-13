import { z } from "zod";
import { prisma } from "../lib/prisma";
import type { PrismaClient } from "@prisma/client";
import { generateTutorReply } from "./llmService";
import { ServiceError } from "./tutorService";

export const SessionSummarySchema = z.object({
  summaryText: z.string().min(1),
  keyPoints: z.array(z.string()).optional().default([]),
  actionItems: z
    .array(
      z
        .union([
          z.string().transform((t) => ({ text: t })),
          z.object({ text: z.string().min(1), due: z.coerce.date().optional() }),
        ])
        .transform((x) => (typeof x === "string" ? { text: x } : x))
    )
    .optional()
    .default([]),
});

export type SessionSummaryOutput = z.infer<typeof SessionSummarySchema>;

function startOfToday(): Date {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

async function ensureSessionOwned(userId: string, sessionId: string) {
  const session = await prisma.tutorSession.findFirst({ where: { id: sessionId, userId } });
  if (!session) throw new ServiceError(404, "Session not found");
  return session;
}

function extractBullets(text: string): { keyPoints: string[]; actionItems: Array<{ text: string }> } {
  const lines = (text || "").split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  const bullets = lines
    .filter((l) => /^[-*•]\s+/.test(l) || /^\d+[).]\s+/.test(l))
    .map((l) => l.replace(/^[-*•]\s+/, "").replace(/^\d+[).]\s+/, "").trim())
    .filter(Boolean);
  // Heuristic separation: lines after a "Next steps:" header go to actionItems
  const nextIdx = lines.findIndex((l) => /^next steps:/i.test(l));
  let action: string[] = [];
  let points: string[] = bullets;
  if (nextIdx >= 0) {
    action = lines.slice(nextIdx + 1).filter((l) => /^[-*•]\s+/.test(l) || /^\d+[).]\s+/.test(l))
      .map((l) => l.replace(/^[-*•]\s+/, "").replace(/^\d+[).]\s+/, "").trim());
    points = bullets.filter((b) => !action.includes(b));
  }
  return { keyPoints: points.slice(0, 8), actionItems: action.slice(0, 8).map((t) => ({ text: t })) };
}

async function enforceDailyLLMQuota(userId: string) {
  const maxEnv = Number(process.env.MAX_LLM_PER_DAY);
  const maxPerDay = Number.isFinite(maxEnv) && maxEnv > 0 ? maxEnv : 20;
  const usedToday = await prisma.sessionSummary.count({
    where: { userId, provider: "openrouter", createdAt: { gte: startOfToday() } },
  });
  if (usedToday >= maxPerDay) {
    const nextDay = new Date(startOfToday());
    nextDay.setDate(nextDay.getDate() + 1);
    const retryAfterSec = Math.max(1, Math.floor((nextDay.getTime() - Date.now()) / 1000));
    throw new ServiceError(429, "Daily summary limit reached", { retryAfter: retryAfterSec });
  }
}

export async function getSummary(userId: string, sessionId: string) {
  await ensureSessionOwned(userId, sessionId);
  const found = await prisma.sessionSummary.findUnique({ where: { sessionId } });
  return found;
}

export async function generateAndStoreSummary(userId: string, sessionId: string, opts?: { force?: boolean }) {
  const session = await ensureSessionOwned(userId, sessionId);

  // Return cached summary if exists and not forced
  const existing = await prisma.sessionSummary.findUnique({ where: { sessionId } });
  if (existing && !opts?.force) return { summary: existing, cached: true } as const;

  // If OpenRouter configured, enforce quota pre-check
  if (process.env.OPENROUTER_API_KEY) {
    await enforceDailyLLMQuota(userId);
  }

  // Gather context
  const [recentMessages, goal, milestone] = await Promise.all([
    prisma.tutorMessage.findMany({
      where: { sessionId },
      orderBy: { createdAt: "asc" },
      take: 100,
      select: { sender: true, content: true, createdAt: true },
    }),
    session.goalId
      ? prisma.goal.findUnique({ where: { id: session.goalId }, select: { id: true, title: true, description: true, complexity: true, suggestedWeeks: true, chunking: true } })
      : Promise.resolve(null),
    session.milestoneId
      ? prisma.milestone.findUnique({ where: { id: session.milestoneId }, select: { id: true, title: true, description: true } })
      : Promise.resolve(null),
  ]);

  const msgs = (recentMessages || []).map((m: { sender: string; content: string; createdAt: Date }) => ({
    role: (m.sender as any) === "assistant" ? "assistant" : (m.sender as any) === "system" ? "system" : "user",
    content: (m.content ?? "").toString().slice(0, 8000),
    createdAt: m.createdAt as Date,
  }));
  const lastN = msgs.slice(-12);

  try {
    const { replyText, structured, providerMeta } = await generateTutorReply({
      sessionId,
      goal: goal as any,
      milestone: milestone as any,
      messages: lastN as any,
      userContext: null,
      mode: "summarize",
    });

    // Prefer structured output if it looks like the target shape
    let candidate: SessionSummaryOutput | null = null;
    if (structured && typeof structured === "object") {
      const summaryText = typeof (structured as any).summaryText === "string" ? (structured as any).summaryText : replyText;
      const keyPoints = Array.isArray((structured as any).keyPoints) ? (structured as any).keyPoints : undefined;
      const actionItems = Array.isArray((structured as any).actionItems) ? (structured as any).actionItems : undefined;
      const parsed = SessionSummarySchema.safeParse({ summaryText, keyPoints, actionItems });
      if (parsed.success) candidate = parsed.data;
    }
    if (!candidate) {
      // Derive from plain text
      const { keyPoints, actionItems } = extractBullets(replyText || "");
      candidate = SessionSummarySchema.parse({ summaryText: (replyText || "").trim() || "Session summary", keyPoints, actionItems });
    }

    // Persist
  const created = await prisma.$transaction(async (tx: PrismaClient) => {
      // If an existing summary exists (race), return it unless force
      const already = await tx.sessionSummary.findUnique({ where: { sessionId } });
      if (already && !opts?.force) return already;
      const provider = (providerMeta?.provider as string) || (process.env.OPENROUTER_API_KEY ? "openrouter" : "heuristic");
      const summary = await tx.sessionSummary.create({
        data: {
          sessionId,
          userId,
          summaryText: candidate!.summaryText,
          keyPoints: candidate!.keyPoints as any,
          actionItems: candidate!.actionItems as any,
          provider,
          rawResponse: providerMeta?.raw ? (providerMeta.raw as any) : null,
        },
      });
      return summary;
    });

    return { summary: created, cached: false } as const;
  } catch (e: any) {
    const detail = String(e?.message || e);
    throw new ServiceError(502, "summary_failed", detail);
  }
}
