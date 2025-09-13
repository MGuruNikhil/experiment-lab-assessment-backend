"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceError = void 0;
exports.createSession = createSession;
exports.listSessions = listSessions;
exports.listMessages = listMessages;
exports.sendMessage = sendMessage;
exports.closeSession = closeSession;
const prisma_1 = require("../lib/prisma");
const llmService_1 = require("./llmService");
class ServiceError extends Error {
    constructor(status, message, detail) {
        super(message);
        this.status = status;
        this.detail = detail;
    }
}
exports.ServiceError = ServiceError;
function sanitizeText(input) {
    // Basic sanitation to avoid storing problematic content
    // - trim whitespace
    // - remove control chars (except newlines and tabs)
    // - cap length to 8000 chars
    const trimmed = (input ?? "").toString().slice(0, 8000).trim();
    return trimmed.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "");
}
async function ensureOwnershipSession(userId, sessionId) {
    const session = await prisma_1.prisma.tutorSession.findFirst({ where: { id: sessionId, userId } });
    if (!session)
        throw new ServiceError(404, "Session not found");
    return session;
}
async function createSession(input) {
    const { userId, goalId, milestoneId, title } = input;
    // Validate references belong to the user
    if (goalId) {
        const g = await prisma_1.prisma.goal.findFirst({ where: { id: goalId, userId }, select: { id: true } });
        if (!g)
            throw new ServiceError(400, "Invalid goalId");
    }
    if (milestoneId) {
        const ms = await prisma_1.prisma.milestone.findFirst({ where: { id: milestoneId, journey: { goal: { userId } } }, select: { id: true } });
        if (!ms)
            throw new ServiceError(400, "Invalid milestoneId");
    }
    const session = await prisma_1.prisma.tutorSession.create({
        data: {
            userId,
            goalId: goalId ?? null,
            milestoneId: milestoneId ?? null,
            title: title ? sanitizeText(title) : null,
        },
    });
    return session;
}
async function listSessions(userId) {
    const sessions = await prisma_1.prisma.tutorSession.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
        select: { id: true, title: true, status: true, createdAt: true, goalId: true, milestoneId: true },
    });
    return sessions;
}
async function listMessages(userId, sessionId) {
    await ensureOwnershipSession(userId, sessionId);
    const messages = await prisma_1.prisma.tutorMessage.findMany({
        where: { sessionId },
        orderBy: { createdAt: "asc" },
        select: { id: true, sender: true, content: true, metadata: true, createdAt: true },
    });
    return messages;
}
async function sendMessage(input) {
    const { userId, sessionId } = input;
    const content = sanitizeText(input.content);
    const useLLM = input.useLLM !== false; // default true
    const mode = (input.mode === "explain" || input.mode === "apply") ? input.mode : "chat";
    const session = await ensureOwnershipSession(userId, sessionId);
    if (session.status === "closed")
        throw new ServiceError(400, "Session is closed");
    // Insert user message
    const userMessage = await prisma_1.prisma.tutorMessage.create({
        data: { sessionId, sender: "user", content },
        select: { id: true, sender: true, content: true, metadata: true, createdAt: true },
    });
    // Build context
    const [recentMessages, goal, milestone] = await Promise.all([
        prisma_1.prisma.tutorMessage.findMany({
            where: { sessionId },
            orderBy: { createdAt: "asc" },
            take: 50, // get enough then slice bottom N
            select: { sender: true, content: true, createdAt: true },
        }),
        session.goalId
            ? prisma_1.prisma.goal.findUnique({ where: { id: session.goalId }, select: { id: true, title: true, description: true, complexity: true, suggestedWeeks: true, chunking: true } })
            : Promise.resolve(null),
        session.milestoneId
            ? prisma_1.prisma.milestone.findUnique({ where: { id: session.milestoneId }, select: { id: true, title: true, description: true } })
            : Promise.resolve(null),
    ]);
    const messages = (recentMessages || []).map((m) => ({
        role: m.sender === "assistant" ? "assistant" : m.sender === "system" ? "system" : "user",
        content: sanitizeText(m.content),
        createdAt: m.createdAt,
    }));
    const lastN = messages.slice(-8);
    // Decide provider: heuristic if disabled by user or key missing
    try {
        let replyText = "";
        let providerMeta = undefined;
        if (!useLLM) {
            // Provide a local concise tip without calling external LLM
            const mTitle = milestone?.title || "this milestone";
            const gTitle = goal?.title || "your goal";
            replyText = `Quick tip for ${mTitle}.\nNext steps:\n1) Take one small action today.\n2) Tie it back to ${gTitle}.`;
            providerMeta = { provider: "local" };
        }
        else {
            const r = await (0, llmService_1.generateTutorReply)({
                sessionId,
                goal: goal,
                milestone: milestone,
                messages: lastN,
                userContext: null,
                mode,
            });
            replyText = r.replyText;
            providerMeta = r.providerMeta;
        }
        const assistantMessage = await prisma_1.prisma.tutorMessage.create({
            data: { sessionId, sender: "assistant", content: sanitizeText(replyText), metadata: providerMeta },
            select: { id: true, sender: true, content: true, metadata: true, createdAt: true },
        });
        return { assistantMessage, session };
    }
    catch (e) {
        const detail = String(e?.message || e);
        // Store a system failure message for auditability
        await prisma_1.prisma.tutorMessage.create({
            data: { sessionId, sender: "system", content: "Assistant failed to reply. Please try again.", metadata: { error: detail } },
        });
        throw new ServiceError(502, "LLM provider error", detail);
    }
}
async function closeSession(userId, sessionId) {
    await ensureOwnershipSession(userId, sessionId);
    const updated = await prisma_1.prisma.tutorSession.update({ where: { id: sessionId }, data: { status: "closed" } });
    return updated;
}
//# sourceMappingURL=tutorService.js.map