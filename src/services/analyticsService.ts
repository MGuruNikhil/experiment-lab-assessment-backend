import { prisma } from "../lib/prisma";

function startOfWeekUTC(d: Date): Date {
  const date = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
  const day = date.getUTCDay(); // 0..6
  const diff = (day === 0 ? -6 : 1) - day; // shift to Monday
  date.setUTCDate(date.getUTCDate() + diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

function fmtISODateOnly(d: Date): string { return d.toISOString().slice(0, 10); }

export async function getOverview(userId: string) {
  const now = new Date();
  const fourWeeksAgo = new Date(now);
  fourWeeksAgo.setUTCDate(fourWeeksAgo.getUTCDate() - 28);
  const eightWeeksAgo = new Date(now);
  eightWeeksAgo.setUTCDate(eightWeeksAgo.getUTCDate() - 56);

  // Fetch goals with milestones for completion stats
  const goals = await prisma.goal.findMany({
    where: { userId },
    select: { id: true, journeys: { select: { milestones: { select: { progress: true, updatedAt: true } } } } },
  });
  const totalGoals = goals.length;
    const goalMilestones = goals.map((g: { journeys: { milestones: { progress: number | null; updatedAt: Date }[] }[] }) => g.journeys.flatMap((j: { milestones: { progress: number | null; updatedAt: Date }[] }) => j.milestones));
    const completedGoals = goalMilestones.filter((ms: Array<{ progress: number | null }>) => ms.length > 0 && ms.every((m: { progress: number | null }) => (m.progress ?? 0) === 100)).length;
    const perGoalPct = goalMilestones.map((ms: Array<{ progress: number | null }>) => ms.length === 0 ? 0 : ms.reduce((a: number, m: { progress: number | null }) => a + (m.progress ?? 0), 0) / ms.length);
    const avgCompletionPercent = totalGoals > 0 ? perGoalPct.reduce((a: number, b: number) => a + b, 0) / totalGoals : 0;
  const activeGoals = totalGoals - completedGoals;

  // Learning velocity: milestones completed in last 4 weeks / 4
  const completedCountLast4Weeks = await prisma.milestone.count({
    where: { progress: 100, updatedAt: { gte: fourWeeksAgo }, journey: { goal: { userId } } },
  });
  const learningVelocityPerWeek = completedCountLast4Weeks / 4;

  // Sessions overall and avg length (last 8 weeks) using TutorMessage timestamps
  const totalTutorSessions = await prisma.tutorSession.count({ where: { userId } });
  // Group messages for the user's sessions in the last 8 weeks
  let avgSessionLengthMinutes = 0;
  try {
    const grouped = await (prisma as any).tutorMessage.groupBy({
      by: ["sessionId"],
      where: { createdAt: { gte: eightWeeksAgo }, session: { userId } },
      _min: { createdAt: true },
      _max: { createdAt: true },
    });
    const durations = (grouped || [])
      .map((g: any) => ({ first: g._min?.createdAt ? new Date(g._min.createdAt) : null, last: g._max?.createdAt ? new Date(g._max.createdAt) : null }))
      .filter((x: any) => x.first && x.last)
      .map((x: any) => Math.max(0, (x.last!.getTime() - x.first!.getTime()) / 60000));
    if (durations.length > 0) avgSessionLengthMinutes = durations.reduce((a: number, b: number) => a + b, 0) / durations.length;
  } catch {
    // Fallback if groupBy unavailable: compute via findMany
  const sessions = await prisma.tutorSession.findMany({ where: { userId, createdAt: { gte: eightWeeksAgo } }, select: { id: true } });
  const ids = sessions.map((s: { id: string }) => s.id);
    if (ids.length) {
      const msgs = await prisma.tutorMessage.findMany({ where: { sessionId: { in: ids } }, orderBy: { createdAt: "asc" }, select: { sessionId: true, createdAt: true } });
      const map = new Map<string, { first: Date; last: Date }>();
      for (const m of msgs) {
        const cur = map.get(m.sessionId);
        if (!cur) map.set(m.sessionId, { first: m.createdAt as any, last: m.createdAt as any });
        else map.set(m.sessionId, { first: cur.first, last: m.createdAt as any });
      }
      const durations = Array.from(map.values()).map((x) => Math.max(0, ((x.last as any as Date).getTime() - (x.first as any as Date).getTime()) / 60000));
      if (durations.length > 0) avgSessionLengthMinutes = durations.reduce((a, b) => a + b, 0) / durations.length;
    }
  }

  // Round some metrics sensibly
  const round2 = (n: number) => Math.round(n * 100) / 100;

  return {
    totalGoals,
    completedGoals,
    avgCompletionPercent: round2(avgCompletionPercent),
    activeGoals,
    learningVelocityPerWeek: round2(learningVelocityPerWeek),
    totalTutorSessions,
    avgSessionLengthMinutes: round2(avgSessionLengthMinutes),
  };
}

export async function getGoalDetails(userId: string, goalId: string) {
  // Verify ownership
  const goal = await prisma.goal.findFirst({ where: { id: goalId, userId }, select: { id: true, title: true } });
  if (!goal) return null;

  const milestones = await prisma.milestone.findMany({
    where: { journey: { goalId: goal.id, goal: { userId } } },
    select: { id: true, title: true, progress: true, updatedAt: true },
    orderBy: { updatedAt: "asc" },
  });

  const totalMilestones = milestones.length;
    const completedMilestones = milestones.filter((m: { progress: number | null }) => (m.progress ?? 0) === 100).length;
    const completionRatePercent = totalMilestones > 0 ? (completedMilestones / totalMilestones) * 100 : 0;
    const completionPerMilestone = milestones.map((m: { id: string; title: string; progress: number | null }) => ({ milestoneId: m.id, title: m.title, percentComplete: m.progress ?? 0 }));

  // Completed timeline by week
  const countsByWeek: Record<string, number> = {};
  for (const m of milestones) {
    if ((m.progress ?? 0) !== 100) continue;
    const wk = startOfWeekUTC(m.updatedAt);
    const key = fmtISODateOnly(wk);
    countsByWeek[key] = (countsByWeek[key] ?? 0) + 1;
  }
  const milestonesCompletedTimeline = Object.entries(countsByWeek)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([weekStartISO, completedCount]) => ({ weekStartISO, completedCount }));

  const sessionSummaries = await prisma.sessionSummary.findMany({
    where: { userId, session: { goalId: goal.id } },
    select: { sessionId: true, summaryText: true, createdAt: true },
    orderBy: { createdAt: "desc" },
    take: 50,
  });

  const round2 = (n: number) => Math.round(n * 100) / 100;
  return {
    goalId: goal.id,
    totalMilestones,
    completedMilestones,
    completionRatePercent: round2(completionRatePercent),
    completionPerMilestone,
    milestonesCompletedTimeline,
    sessionSummaries,
  };
}
