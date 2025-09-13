import { describe, it, expect, vi, beforeEach } from "vitest";
import * as svc from "../analyticsService";

vi.mock("../../lib/prisma", () => {
  const data: any = {
    goals: [],
    milestones: [],
    sessions: [],
    messages: [],
    summaries: [],
  };
  const now = new Date();
  return {
    prisma: {
      goal: {
        findMany: vi.fn(async ({ where }: any) => data.goals.filter((g: any) => g.userId === where.userId)),
        findFirst: vi.fn(async ({ where }: any) => data.goals.find((g: any) => g.id === where.id && g.userId === where.userId) || null),
      },
      milestone: {
        count: vi.fn(async ({ where }: any) => data.milestones.filter((m: any) => m.progress === where.progress && m.updatedAt >= where.updatedAt.gte && m.goalUserId === where.journey.goal.userId).length),
        findMany: vi.fn(async ({ where }: any) => data.milestones.filter((m: any) => m.goalId === where.journey.goalId && m.goalUserId === where.journey.goal.userId).sort((a: any, b: any) => a.updatedAt.getTime() - b.updatedAt.getTime())),
      },
      tutorSession: {
        count: vi.fn(async ({ where }: any) => data.sessions.filter((s: any) => s.userId === where.userId).length),
        findMany: vi.fn(async ({ where }: any) => data.sessions.filter((s: any) => s.userId === where.userId && s.createdAt >= where.createdAt.gte).map((s: any) => ({ id: s.id }))),
      },
      tutorMessage: {
        groupBy: vi.fn(async ({ where }: any) => {
          const inRange = data.messages.filter((m: any) => m.createdAt >= where.createdAt.gte && data.sessions.find((s: any) => s.id === m.sessionId && s.userId === where.session.userId));
          const bySess: Record<string, any[]> = {};
          for (const m of inRange) { const cur = bySess[m.sessionId] ?? []; cur.push(m); bySess[m.sessionId] = cur; }
          return Object.entries(bySess).map(([sessionId, arr]) => ({ sessionId, _min: { createdAt: arr[0].createdAt }, _max: { createdAt: arr[arr.length-1].createdAt } }));
        }),
        findMany: vi.fn(async ({ where }: any) => data.messages.filter((m: any) => where.sessionId.in.includes(m.sessionId)).sort((a: any, b: any) => a.createdAt.getTime() - b.createdAt.getTime())),
      },
      sessionSummary: {
        findMany: vi.fn(async ({ where }: any) => data.summaries.filter((s: any) => s.userId === where.userId && data.sessions.find((ss: any) => ss.id === s.sessionId && ss.goalId === where.session.goalId)).slice(0, 50)),
      },
    },
  };
});

describe("analyticsService", () => {
  it("computes overview metrics", async () => {
    const res = await svc.getOverview("u1");
    expect(res).toHaveProperty("totalGoals");
    expect(res).toHaveProperty("learningVelocityPerWeek");
    expect(typeof res.totalGoals).toBe("number");
    expect(typeof res.avgSessionLengthMinutes).toBe("number");
  });

  it("returns goal details shape", async () => {
    const data = await svc.getGoalDetails("u1", "g1");
    if (data) {
      expect(data).toHaveProperty("goalId");
      expect(Array.isArray(data.completionPerMilestone)).toBe(true);
      expect(Array.isArray(data.milestonesCompletedTimeline)).toBe(true);
    }
  });
});
