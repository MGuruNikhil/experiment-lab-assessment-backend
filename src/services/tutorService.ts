import { prisma } from "../lib/prisma";
import { generateTutorReply } from "./llmService";
import { buildTutorPrompt } from "../lib/promptTemplates";

export type CreateSessionInput = {
  userId: string;
  goalId?: string | null;
  milestoneId?: string | null;
  title?: string | null;
};

export type SendMessageInput = {
  userId: string;
  sessionId: string;
  content: string;
  useLLM?: boolean;
  mode?: "chat" | "explain" | "apply";
};

export class ServiceError extends Error {
  status: number;
  detail?: any;
  constructor(status: number, message: string, detail?: any) {
    super(message);
    this.status = status;
    this.detail = detail;
  }
}

function sanitizeText(input: string): string {
  // Basic sanitation to avoid storing problematic content
  // - trim whitespace
  // - remove control chars (except newlines and tabs)
  // - cap length to 8000 chars
  const trimmed = (input ?? "").toString().slice(0, 8000).trim();
  return trimmed.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "");
}

async function ensureOwnershipSession(userId: string, sessionId: string) {
  const session = await prisma.tutorSession.findFirst({ where: { id: sessionId, userId } });
  if (!session) throw new ServiceError(404, "Session not found");
  return session;
}

export async function createSession(input: CreateSessionInput) {
  const { userId, goalId, milestoneId, title } = input;

  // Validate references belong to the user
  if (goalId) {
    const g = await prisma.goal.findFirst({ where: { id: goalId, userId }, select: { id: true } });
    if (!g) throw new ServiceError(400, "Invalid goalId");
  }
  if (milestoneId) {
    const ms = await prisma.milestone.findFirst({ where: { id: milestoneId, journey: { goal: { userId } } }, select: { id: true } });
    if (!ms) throw new ServiceError(400, "Invalid milestoneId");
  }

  const session = await prisma.tutorSession.create({
    data: {
      userId,
      goalId: goalId ?? null,
      milestoneId: milestoneId ?? null,
      title: title ? sanitizeText(title) : null,
    },
  });
  return session;
}

export async function listSessions(userId: string) {
  const sessions = await prisma.tutorSession.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    select: { id: true, title: true, status: true, createdAt: true, goalId: true, milestoneId: true },
  });
  return sessions;
}

export async function listMessages(userId: string, sessionId: string) {
  await ensureOwnershipSession(userId, sessionId);
  const messages = await prisma.tutorMessage.findMany({
    where: { sessionId },
    orderBy: { createdAt: "asc" },
    select: { id: true, sender: true, content: true, metadata: true, createdAt: true },
  });
  return messages;
}

export async function sendMessage(input: SendMessageInput) {
  const { userId, sessionId } = input;
  const content = sanitizeText(input.content);
  const useLLM = input.useLLM !== false; // default true
  const mode: "chat" | "explain" | "apply" = (input.mode === "explain" || input.mode === "apply") ? input.mode : "chat";

  const session = await ensureOwnershipSession(userId, sessionId);
  if (session.status === "closed") throw new ServiceError(400, "Session is closed");

  // Insert user message
  const userMessage = await prisma.tutorMessage.create({
    data: { sessionId, sender: "user", content },
    select: { id: true, sender: true, content: true, metadata: true, createdAt: true },
  });

  // Build context
  const [recentMessages, goal, milestone] = await Promise.all([
    prisma.tutorMessage.findMany({
      where: { sessionId },
      orderBy: { createdAt: "asc" },
      take: 50, // get enough then slice bottom N
      select: { sender: true, content: true, createdAt: true },
    }),
    session.goalId
      ? prisma.goal.findUnique({ where: { id: session.goalId }, select: { id: true, title: true, description: true, complexity: true, suggestedWeeks: true, chunking: true } })
      : Promise.resolve(null),
    session.milestoneId
      ? prisma.milestone.findUnique({ where: { id: session.milestoneId }, select: { id: true, title: true, description: true } })
      : Promise.resolve(null),
  ]);

  const messages: Array<{ role: "user" | "assistant" | "system"; content: string; createdAt: Date }> = (recentMessages || []).map((m) => ({
    role: (m.sender as any) === "assistant" ? "assistant" : (m.sender as any) === "system" ? "system" : "user",
    content: sanitizeText(m.content),
    createdAt: m.createdAt as Date,
  }));
  const lastN = messages.slice(-8);

  // Decide provider: heuristic if disabled by user or key missing
  try {
    let replyText = "";
    let providerMeta: any = undefined;
    if (!useLLM) {
      // Provide a local concise tip without calling external LLM
      const mTitle = milestone?.title || "this milestone";
      const gTitle = goal?.title || "your goal";
      replyText = `Quick tip for ${mTitle}.\nNext steps:\n1) Take one small action today.\n2) Tie it back to ${gTitle}.`;
      providerMeta = { provider: "local" };
    } else {
      const r = await generateTutorReply({
        sessionId,
        goal: goal as any,
        milestone: milestone as any,
        messages: lastN as any,
        userContext: null,
        mode,
      });
      replyText = r.replyText;
      providerMeta = r.providerMeta;
    }

    const assistantMessage = await prisma.tutorMessage.create({
      data: { sessionId, sender: "assistant", content: sanitizeText(replyText), metadata: providerMeta as any },
      select: { id: true, sender: true, content: true, metadata: true, createdAt: true },
    });

    return { assistantMessage, session };
  } catch (e: any) {
    const detail = String(e?.message || e);
    // Store a system failure message for auditability
    await prisma.tutorMessage.create({
      data: { sessionId, sender: "system", content: "Assistant failed to reply. Please try again.", metadata: { error: detail } as any },
    });
    throw new ServiceError(502, "LLM provider error", detail);
  }
}

export async function closeSession(userId: string, sessionId: string) {
  await ensureOwnershipSession(userId, sessionId);
  const updated = await prisma.tutorSession.update({ where: { id: sessionId }, data: { status: "closed" } });
  return updated;
}
