"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSession = createSession;
exports.listSessions = listSessions;
exports.listMessages = listMessages;
exports.sendMessage = sendMessage;
exports.closeSession = closeSession;
const zod_1 = require("zod");
const tutorService = __importStar(require("../services/tutorService"));
function uid(req) {
    return req.userId;
}
function firstIssueMessage(error) {
    const first = error.issues?.[0];
    return first?.message ?? "Invalid request body";
}
const createSessionSchema = zod_1.z.object({
    goalId: zod_1.z.string().uuid().optional(),
    milestoneId: zod_1.z.string().uuid().optional(),
    title: zod_1.z.string().min(1).max(200).optional(),
});
async function createSession(req, res) {
    const parsed = createSessionSchema.safeParse(req.body);
    if (!parsed.success)
        return res.status(400).json({ error: firstIssueMessage(parsed.error) });
    const session = await tutorService.createSession({
        userId: uid(req),
        goalId: parsed.data.goalId ?? null,
        milestoneId: parsed.data.milestoneId ?? null,
        title: parsed.data.title ?? null,
    });
    return res.json({ session });
}
async function listSessions(req, res) {
    const sessions = await tutorService.listSessions(uid(req));
    return res.json({ sessions });
}
const sessionIdParam = zod_1.z.object({ sessionId: zod_1.z.string().uuid() });
async function listMessages(req, res) {
    const parsed = sessionIdParam.safeParse(req.params);
    if (!parsed.success)
        return res.status(400).json({ error: firstIssueMessage(parsed.error) });
    const messages = await tutorService.listMessages(uid(req), parsed.data.sessionId);
    return res.json({ messages });
}
const sendMessageSchema = zod_1.z.object({
    content: zod_1.z.string().min(1),
    useLLM: zod_1.z.boolean().optional(),
    mode: zod_1.z.enum(["chat", "explain", "apply"]).optional(),
});
async function sendMessage(req, res) {
    const params = sessionIdParam.safeParse(req.params);
    if (!params.success)
        return res.status(400).json({ error: firstIssueMessage(params.error) });
    const parsed = sendMessageSchema.safeParse(req.body);
    if (!parsed.success)
        return res.status(400).json({ error: firstIssueMessage(parsed.error) });
    try {
        const { assistantMessage, session } = await tutorService.sendMessage({
            userId: uid(req),
            sessionId: params.data.sessionId,
            content: parsed.data.content,
            useLLM: parsed.data.useLLM ?? true,
            mode: parsed.data.mode ?? "chat",
        });
        return res.json({ assistantMessage, session });
    }
    catch (e) {
        if (e?.status === 502)
            return res.status(502).json({ error: "LLM provider error", detail: e?.detail ?? String(e?.message || e) });
        const status = typeof e?.status === "number" ? e.status : 500;
        return res.status(status).json({ error: e?.message ?? "Internal error" });
    }
}
async function closeSession(req, res) {
    const params = sessionIdParam.safeParse(req.params);
    if (!params.success)
        return res.status(400).json({ error: firstIssueMessage(params.error) });
    const updated = await tutorService.closeSession(uid(req), params.data.sessionId);
    return res.json({ session: updated });
}
//# sourceMappingURL=tutor.controller.js.map