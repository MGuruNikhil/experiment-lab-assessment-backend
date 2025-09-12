import type { Request, Response } from "express";
import { prisma } from "../lib/prisma";

function userId(req: Request): string {
  return (req as any).userId as string;
}

function startOfWeek(d: Date): Date {
  // Monday as start of week
  const date = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
  const day = date.getUTCDay(); // 0 (Sun) - 6 (Sat)
  const diff = (day === 0 ? -6 : 1) - day; // shift to Monday
  date.setUTCDate(date.getUTCDate() + diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

function formatISODateOnly(d: Date): string {
  return d.toISOString().slice(0, 10);
}

export async function getAnalytics(req: Request, res: Response) {
  const uid = userId(req);

  // Load all goals with milestone progress to compute metrics in-memory (simpler and OK for small-medium datasets)
  const goals = await prisma.goal.findMany({
    where: { userId: uid },
    select: {
      id: true,
      createdAt: true,
      journeys: {
        select: {
          milestones: { select: { progress: true, updatedAt: true } },
        },
      },
    },
    orderBy: { createdAt: "asc" },
  });

  const totalGoals = goals.length;

  // Per-goal milestone collections
  const goalMilestones = goals.map((g) => g.journeys.flatMap((j) => j.milestones));

  // A goal is considered completed if it has at least one milestone and all milestones are at 100%
  const completedGoals = goalMilestones.filter((ms) => ms.length > 0 && ms.every((m) => m.progress === 100)).length;

  // Average completion percent per goal (average of its milestones' progress) then averaged across goals.
  // If a goal has no milestones, it contributes 0 to the average.
  const perGoalPct = goalMilestones.map((ms) => {
    if (ms.length === 0) return 0;
    const avg = ms.reduce((sum, m) => sum + (m.progress ?? 0), 0) / ms.length;
    return avg; // 0..100
  });
  const avgCompletionPercent = totalGoals > 0 ? perGoalPct.reduce((a, b) => a + b, 0) / totalGoals : 0;

  // Active goals: total - completed (goals with zero milestones counted as active by definition here)
  const activeGoals = totalGoals - completedGoals;

  // Learning velocity per week: milestones marked completed (progress==100) in last 4 weeks, divided by 4
  const now = new Date();
  const fourWeeksAgo = new Date(now);
  fourWeeksAgo.setUTCDate(fourWeeksAgo.getUTCDate() - 28);
  const milestonesLast4Weeks = goalMilestones
    .flat()
    .filter((m) => m.progress === 100 && m.updatedAt >= fourWeeksAgo);
  const learningVelocityPerWeek = milestonesLast4Weeks.length / 4;

  // Time series for the last 12 weeks (inclusive of current week)
  const weeks = 12;
  const currentWeekStart = startOfWeek(now);
  const weekStarts: Date[] = Array.from({ length: weeks }).map((_, i) => {
    const d = new Date(currentWeekStart);
    d.setUTCDate(d.getUTCDate() - (weeks - 1 - i) * 7);
    return d;
  });
  const indexByWeekStart: Record<string, number> = Object.fromEntries(
    weekStarts.map((d, idx) => [formatISODateOnly(d), idx])
  );

  const createdCounts = new Array(weeks).fill(0) as number[];
  const completedCounts = new Array(weeks).fill(0) as number[];

  // Created counts by goal.createdAt
  for (const g of goals) {
    const wk = startOfWeek(g.createdAt);
    const key = formatISODateOnly(wk);
    const idx = indexByWeekStart[key];
    if (idx !== undefined) createdCounts[idx] = (createdCounts[idx] ?? 0) + 1;
  }

  // Completed counts by completion date inferred as max(updatedAt) across milestones when completed
  for (let i = 0; i < goals.length; i++) {
    const ms = goalMilestones[i] ?? [];
    if (ms.length === 0) continue;
    const isComplete = ms.every((m) => m.progress === 100);
    if (!isComplete) continue;
    const completionDate = new Date(Math.max(...ms.map((m) => m.updatedAt.getTime())));
    const wk = startOfWeek(completionDate);
    const key = formatISODateOnly(wk);
    const idx = indexByWeekStart[key];
    if (idx !== undefined) completedCounts[idx] = (completedCounts[idx] ?? 0) + 1;
  }

  const goalsTimeseries = weekStarts.map((d, i) => ({
    weekStart: formatISODateOnly(d),
    createdCount: createdCounts[i],
    completedCount: completedCounts[i],
  }));

  return res.json({
    totalGoals,
    completedGoals,
    avgCompletionPercent,
    activeGoals,
    learningVelocityPerWeek,
    goalsTimeseries,
  });
}
