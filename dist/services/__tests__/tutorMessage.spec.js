"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const supertest_1 = __importDefault(require("supertest"));
const express_1 = __importDefault(require("express"));
// Mock auth middleware BEFORE importing routes
const TEST_USER_ID = "11111111-1111-1111-1111-111111111111";
vitest_1.vi.mock("../../middleware/auth.middleware", () => ({
    requireAuth: (req, _res, next) => { req.userId = TEST_USER_ID; next(); },
}));
const tutor_routes_1 = __importDefault(require("../../routes/tutor.routes"));
// Minimal app with auth stub
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api", tutor_routes_1.default);
// In-memory prisma mock
vitest_1.vi.mock("../../lib/prisma", () => {
    const now = new Date();
    const sessions = [];
    const messages = [];
    return {
        prisma: {
            tutorSession: {
                findFirst: vitest_1.vi.fn(async (args) => sessions.find(s => s.id === args.where.id && s.userId === args.where.userId) || null),
                create: vitest_1.vi.fn(async ({ data }) => { const s = { ...data, id: SESSION_ID, status: "open", createdAt: now, updatedAt: now }; sessions.push(s); return s; }),
                update: vitest_1.vi.fn(async ({ where, data }) => { const s = sessions.find(x => x.id === where.id); Object.assign(s, data); return s; }),
                findMany: vitest_1.vi.fn(async ({ where }) => sessions.filter(s => s.userId === where.userId)),
            },
            goal: { findUnique: vitest_1.vi.fn(async () => null), findFirst: vitest_1.vi.fn(async () => ({ id: GOAL_ID, userId: TEST_USER_ID, title: "Goal" })) },
            milestone: { findUnique: vitest_1.vi.fn(async () => null), findFirst: vitest_1.vi.fn(async () => ({ id: MILESTONE_ID })) },
            tutorMessage: {
                findMany: vitest_1.vi.fn(async ({ where }) => messages.filter(m => m.sessionId === where.sessionId)),
                create: vitest_1.vi.fn(async ({ data, select }) => { const m = { ...data, id: `m_${messages.length + 1}`, createdAt: now }; messages.push(m); return select ? { id: m.id, sender: m.sender, content: m.content, metadata: m.metadata, createdAt: m.createdAt } : m; }),
            },
        },
    };
});
// Mock LLM so no network
vitest_1.vi.mock("../../services/llmService", () => ({
    generateTutorReply: vitest_1.vi.fn(async () => ({ replyText: "Mocked reply", providerMeta: { provider: "heuristic" } })),
}));
const SESSION_ID = "22222222-2222-2222-2222-222222222222";
const GOAL_ID = "33333333-3333-3333-3333-333333333333";
const MILESTONE_ID = "44444444-4444-4444-4444-444444444444";
(0, vitest_1.describe)("Tutor message endpoint", () => {
    (0, vitest_1.beforeEach)(() => vitest_1.vi.clearAllMocks());
    (0, vitest_1.it)("creates session and returns assistant message", async () => {
        const create = await (0, supertest_1.default)(app).post("/api/tutor/sessions").send({ title: "My session" });
        (0, vitest_1.expect)(create.status).toBe(200);
        const sessionId = create.body.session.id;
        const res = await (0, supertest_1.default)(app).post(`/api/tutor/sessions/${sessionId}/message`).send({ content: "Hi", useLLM: false, mode: "chat" });
        (0, vitest_1.expect)(res.status).toBe(200);
        (0, vitest_1.expect)(res.body.assistantMessage).toBeTruthy();
        (0, vitest_1.expect)(res.body.assistantMessage.sender).toBe("assistant");
    });
});
//# sourceMappingURL=tutorMessage.spec.js.map