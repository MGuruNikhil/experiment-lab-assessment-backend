import { describe, expect, it, vi, beforeEach } from "vitest";
import request from "supertest";
import express from "express";
import bodyParser from "body-parser";

// App wiring for test
import tutorRoutes from "../../routes/tutor.routes";

// Mock auth middleware by injecting userId
const app = express();
app.use(bodyParser.json());
app.use((req: any, _res, next) => { req.userId = TEST_USER_ID; next(); });
app.use("/api", tutorRoutes);

// Mocks
vi.mock("../../lib/prisma", () => {
  const now = new Date();
  // In-memory stores
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

vi.mock("../../services/llmService", () => ({
  generateTutorReply: vi.fn(async () => ({ replyText: "Mocked reply", providerMeta: { provider: "heuristic" } })),
}));

// Constants
const TEST_USER_ID = "11111111-1111-1111-1111-111111111111";
const SESSION_ID = "22222222-2222-2222-2222-222222222222";
const GOAL_ID = "33333333-3333-3333-3333-333333333333";
const MILESTONE_ID = "44444444-4444-4444-4444-444444444444";

describe("POST /api/tutor/sessions/:sessionId/message", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("creates user message and returns assistant reply", async () => {
    // First create a session
    const createRes = await request(app).post("/api/tutor/sessions").send({ title: "Test" });
    expect(createRes.status).toBe(200);
    const sessionId = createRes.body.session.id as string;

    const res = await request(app)
      .post(`/api/tutor/sessions/${sessionId}/message`)
      .send({ content: "hello", useLLM: false, mode: "chat" });

    expect(res.status).toBe(200);
    expect(res.body.assistantMessage).toBeTruthy();
    expect(res.body.assistantMessage.sender).toBe("assistant");
    expect(res.body.assistantMessage.content).toBeTruthy();
  });
});
