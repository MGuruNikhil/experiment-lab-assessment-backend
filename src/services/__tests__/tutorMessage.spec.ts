import { describe, expect, it, vi, beforeEach } from "vitest";
import request from "supertest";
import express from "express";

// Mock auth middleware BEFORE importing routes
const TEST_USER_ID = "11111111-1111-1111-1111-111111111111";
vi.mock("../../middleware/auth.middleware", () => ({
  requireAuth: (req: any, _res: any, next: any) => { req.userId = TEST_USER_ID; next(); },
}));

import tutorRoutes from "../../routes/tutor.routes";

// Minimal app with auth stub
const app = express();
app.use(express.json());
app.use("/api", tutorRoutes);

// In-memory prisma mock
vi.mock("../../lib/prisma", () => {
  const now = new Date();
  const sessions: any[] = [];
  const messages: any[] = [];
  return {
    prisma: {
      tutorSession: {
        findFirst: vi.fn(async (args: any) => sessions.find(s => s.id === args.where.id && s.userId === args.where.userId) || null),
        create: vi.fn(async ({ data }: any) => { const s = { ...data, id: SESSION_ID, status: "open", createdAt: now, updatedAt: now }; sessions.push(s); return s; }),
        update: vi.fn(async ({ where, data }: any) => { const s = sessions.find(x => x.id === where.id); Object.assign(s, data); return s; }),
        findMany: vi.fn(async ({ where }: any) => sessions.filter(s => s.userId === where.userId)),
      },
      goal: { findUnique: vi.fn(async () => null), findFirst: vi.fn(async () => ({ id: GOAL_ID, userId: TEST_USER_ID, title: "Goal" })) },
      milestone: { findUnique: vi.fn(async () => null), findFirst: vi.fn(async () => ({ id: MILESTONE_ID })) },
      tutorMessage: {
        findMany: vi.fn(async ({ where }: any) => messages.filter(m => m.sessionId === where.sessionId)),
        create: vi.fn(async ({ data, select }: any) => { const m = { ...data, id: `m_${messages.length+1}`, createdAt: now }; messages.push(m); return select ? { id: m.id, sender: m.sender, content: m.content, metadata: m.metadata, createdAt: m.createdAt } : m; }),
      },
    },
  };
});

// Mock LLM so no network
vi.mock("../../services/llmService", () => ({
  generateTutorReply: vi.fn(async () => ({ replyText: "Mocked reply", providerMeta: { provider: "heuristic" } })),
}));

const SESSION_ID = "22222222-2222-2222-2222-222222222222";
const GOAL_ID = "33333333-3333-3333-3333-333333333333";
const MILESTONE_ID = "44444444-4444-4444-4444-444444444444";

describe("Tutor message endpoint", () => {
  beforeEach(() => vi.clearAllMocks());

  it("creates session and returns assistant message", async () => {
    const create = await request(app).post("/api/tutor/sessions").send({ title: "My session" });
    expect(create.status).toBe(200);
    const sessionId = create.body.session.id as string;

    const res = await request(app).post(`/api/tutor/sessions/${sessionId}/message`).send({ content: "Hi", useLLM: false, mode: "chat" });
    expect(res.status).toBe(200);
    expect(res.body.assistantMessage).toBeTruthy();
    expect(res.body.assistantMessage.sender).toBe("assistant");
  });
});
