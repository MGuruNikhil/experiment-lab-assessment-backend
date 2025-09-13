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
const vitest_1 = require("vitest");
const svc = __importStar(require("../analyticsService"));
vitest_1.vi.mock("../../lib/prisma", () => {
    const data = {
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
                findMany: vitest_1.vi.fn(async ({ where }) => data.goals.filter((g) => g.userId === where.userId)),
                findFirst: vitest_1.vi.fn(async ({ where }) => data.goals.find((g) => g.id === where.id && g.userId === where.userId) || null),
            },
            milestone: {
                count: vitest_1.vi.fn(async ({ where }) => data.milestones.filter((m) => m.progress === where.progress && m.updatedAt >= where.updatedAt.gte && m.goalUserId === where.journey.goal.userId).length),
                findMany: vitest_1.vi.fn(async ({ where }) => data.milestones.filter((m) => m.goalId === where.journey.goalId && m.goalUserId === where.journey.goal.userId).sort((a, b) => a.updatedAt.getTime() - b.updatedAt.getTime())),
            },
            tutorSession: {
                count: vitest_1.vi.fn(async ({ where }) => data.sessions.filter((s) => s.userId === where.userId).length),
                findMany: vitest_1.vi.fn(async ({ where }) => data.sessions.filter((s) => s.userId === where.userId && s.createdAt >= where.createdAt.gte).map((s) => ({ id: s.id }))),
            },
            tutorMessage: {
                groupBy: vitest_1.vi.fn(async ({ where }) => {
                    const inRange = data.messages.filter((m) => m.createdAt >= where.createdAt.gte && data.sessions.find((s) => s.id === m.sessionId && s.userId === where.session.userId));
                    const bySess = {};
                    for (const m of inRange) {
                        const cur = bySess[m.sessionId] ?? [];
                        cur.push(m);
                        bySess[m.sessionId] = cur;
                    }
                    return Object.entries(bySess).map(([sessionId, arr]) => ({ sessionId, _min: { createdAt: arr[0].createdAt }, _max: { createdAt: arr[arr.length - 1].createdAt } }));
                }),
                findMany: vitest_1.vi.fn(async ({ where }) => data.messages.filter((m) => where.sessionId.in.includes(m.sessionId)).sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime())),
            },
            sessionSummary: {
                findMany: vitest_1.vi.fn(async ({ where }) => data.summaries.filter((s) => s.userId === where.userId && data.sessions.find((ss) => ss.id === s.sessionId && ss.goalId === where.session.goalId)).slice(0, 50)),
            },
        },
    };
});
(0, vitest_1.describe)("analyticsService", () => {
    (0, vitest_1.it)("computes overview metrics", async () => {
        const res = await svc.getOverview("u1");
        (0, vitest_1.expect)(res).toHaveProperty("totalGoals");
        (0, vitest_1.expect)(res).toHaveProperty("learningVelocityPerWeek");
        (0, vitest_1.expect)(typeof res.totalGoals).toBe("number");
        (0, vitest_1.expect)(typeof res.avgSessionLengthMinutes).toBe("number");
    });
    (0, vitest_1.it)("returns goal details shape", async () => {
        const data = await svc.getGoalDetails("u1", "g1");
        if (data) {
            (0, vitest_1.expect)(data).toHaveProperty("goalId");
            (0, vitest_1.expect)(Array.isArray(data.completionPerMilestone)).toBe(true);
            (0, vitest_1.expect)(Array.isArray(data.milestonesCompletedTimeline)).toBe(true);
        }
    });
});
//# sourceMappingURL=analyticsService.tspec.js.map