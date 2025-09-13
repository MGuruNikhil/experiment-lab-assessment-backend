"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionSummarySchema = void 0;
exports.getSummary = getSummary;
exports.generateAndStoreSummary = generateAndStoreSummary;
const zod_1 = require("zod");
const prisma_1 = require("../lib/prisma");
const llmService_1 = require("./llmService");
const tutorService_1 = require("./tutorService");
exports.SessionSummarySchema = zod_1.z.object({
    summaryText: zod_1.z.string().min(1),
    keyPoints: zod_1.z.array(zod_1.z.string()).optional().default([]),
    actionItems: zod_1.z
        .array(zod_1.z
        .union([
        zod_1.z.string().transform((t) => ({ text: t })),
        zod_1.z.object({ text: zod_1.z.string().min(1), due: zod_1.z.coerce.date().optional() }),
    ])
        .transform((x) => (typeof x === "string" ? { text: x } : x)))
        .optional()
        .default([]),
});
function startOfToday() {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
}
async function ensureSessionOwned(userId, sessionId) {
    const session = await prisma_1.prisma.tutorSession.findFirst({ where: { id: sessionId, userId } });
    if (!session)
        throw new tutorService_1.ServiceError(404, "Session not found");
    return session;
}
function extractBullets(text) {
    const lines = (text || "").split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
    const bullets = lines
        .filter((l) => /^[-*•]\s+/.test(l) || /^\d+[).]\s+/.test(l))
        .map((l) => l.replace(/^[-*•]\s+/, "").replace(/^\d+[).]\s+/, "").trim())
        .filter(Boolean);
    // Heuristic separation: lines after a "Next steps:" header go to actionItems
    const nextIdx = lines.findIndex((l) => /^next steps:/i.test(l));
    let action = [];
    let points = bullets;
    if (nextIdx >= 0) {
        action = lines.slice(nextIdx + 1).filter((l) => /^[-*•]\s+/.test(l) || /^\d+[).]\s+/.test(l))
            .map((l) => l.replace(/^[-*•]\s+/, "").replace(/^\d+[).]\s+/, "").trim());
        points = bullets.filter((b) => !action.includes(b));
    }
    return { keyPoints: points.slice(0, 8), actionItems: action.slice(0, 8).map((t) => ({ text: t })) };
}
async function enforceDailyLLMQuota(userId) {
    const maxEnv = Number(process.env.MAX_LLM_PER_DAY);
    const maxPerDay = Number.isFinite(maxEnv) && maxEnv > 0 ? maxEnv : 20;
    const usedToday = await prisma_1.prisma.sessionSummary.count({
        where: { userId, provider: "openrouter", createdAt: { gte: startOfToday() } },
    });
    if (usedToday >= maxPerDay) {
        const nextDay = new Date(startOfToday());
        nextDay.setDate(nextDay.getDate() + 1);
        const retryAfterSec = Math.max(1, Math.floor((nextDay.getTime() - Date.now()) / 1000));
        throw new tutorService_1.ServiceError(429, "Daily summary limit reached", { retryAfter: retryAfterSec });
    }
}
async function getSummary(userId, sessionId) {
    await ensureSessionOwned(userId, sessionId);
    const found = await prisma_1.prisma.sessionSummary.findUnique({ where: { sessionId } });
    return found;
}
async function generateAndStoreSummary(userId, sessionId, opts) {
    const session = await ensureSessionOwned(userId, sessionId);
    // Return cached summary if exists and not forced
    const existing = await prisma_1.prisma.sessionSummary.findUnique({ where: { sessionId } });
    if (existing && !opts?.force)
        return { summary: existing, cached: true };
    // If OpenRouter configured, enforce quota pre-check
    if (process.env.OPENROUTER_API_KEY) {
        await enforceDailyLLMQuota(userId);
    }
    // Gather context
    const [recentMessages, goal, milestone] = await Promise.all([
        prisma_1.prisma.tutorMessage.findMany({
            where: { sessionId },
            orderBy: { createdAt: "asc" },
            take: 100,
            select: { sender: true, content: true, createdAt: true },
        }),
        session.goalId
            ? prisma_1.prisma.goal.findUnique({ where: { id: session.goalId }, select: { id: true, title: true, description: true, complexity: true, suggestedWeeks: true, chunking: true } })
            : Promise.resolve(null),
        session.milestoneId
            ? prisma_1.prisma.milestone.findUnique({ where: { id: session.milestoneId }, select: { id: true, title: true, description: true } })
            : Promise.resolve(null),
    ]);
    const msgs = (recentMessages || []).map((m) => ({
        role: m.sender === "assistant" ? "assistant" : m.sender === "system" ? "system" : "user",
        content: (m.content ?? "").toString().slice(0, 8000),
        createdAt: m.createdAt,
    }));
    const lastN = msgs.slice(-12);
    try {
        const { replyText, structured, providerMeta } = await (0, llmService_1.generateTutorReply)({
            sessionId,
            goal: goal,
            milestone: milestone,
            messages: lastN,
            userContext: null,
            mode: "summarize",
        });
        // Prefer structured output if it looks like the target shape
        let candidate = null;
        if (structured && typeof structured === "object") {
            const summaryText = typeof structured.summaryText === "string" ? structured.summaryText : replyText;
            const keyPoints = Array.isArray(structured.keyPoints) ? structured.keyPoints : undefined;
            const actionItems = Array.isArray(structured.actionItems) ? structured.actionItems : undefined;
            const parsed = exports.SessionSummarySchema.safeParse({ summaryText, keyPoints, actionItems });
            if (parsed.success)
                candidate = parsed.data;
        }
        if (!candidate) {
            // Derive from plain text
            const { keyPoints, actionItems } = extractBullets(replyText || "");
            candidate = exports.SessionSummarySchema.parse({ summaryText: (replyText || "").trim() || "Session summary", keyPoints, actionItems });
        }
        // Persist
        const created = await prisma_1.prisma.$transaction(async (tx) => {
            // If an existing summary exists (race), return it unless force
            const already = await tx.sessionSummary.findUnique({ where: { sessionId } });
            if (already && !opts?.force)
                return already;
            const provider = providerMeta?.provider || (process.env.OPENROUTER_API_KEY ? "openrouter" : "heuristic");
            const summary = await tx.sessionSummary.create({
                data: {
                    sessionId,
                    userId,
                    summaryText: candidate.summaryText,
                    keyPoints: candidate.keyPoints,
                    actionItems: candidate.actionItems,
                    provider,
                    rawResponse: providerMeta?.raw ? providerMeta.raw : null,
                },
            });
            return summary;
        });
        return { summary: created, cached: false };
    }
    catch (e) {
        const detail = String(e?.message || e);
        throw new tutorService_1.ServiceError(502, "summary_failed", detail);
    }
}
//# sourceMappingURL=tutorSummaryService.js.map