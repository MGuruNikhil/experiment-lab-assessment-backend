import { prisma } from "../lib/prisma";
import { computeNextDue, type Frequency } from "../utils/checkinUtils";

export async function ensureGoalOwnership(userId: string, goalId: string) {
  const goal = await prisma.goal.findFirst({ where: { id: goalId, userId }, select: { id: true } });
  if (!goal) throw Object.assign(new Error("Goal not found"), { status: 404 });
}

export async function ensureMilestoneOwnership(userId: string, milestoneId: string) {
  const ms = await prisma.milestone.findFirst({ where: { id: milestoneId, journey: { goal: { userId } } }, select: { id: true } });
  if (!ms) throw Object.assign(new Error("Milestone not found"), { status: 404 });
}

export async function createSchedule(params: {
  userId: string;
  goalId?: string | null;
  milestoneId?: string | null;
  frequency: Frequency;
  startDate?: Date | null;
}) {
  const { userId, goalId, milestoneId, frequency, startDate } = params;

  let resolvedGoalId: string | null | undefined = goalId ?? null;
  let resolvedMilestoneId: string | null | undefined = milestoneId ?? null;

  if (resolvedGoalId) await ensureGoalOwnership(userId, resolvedGoalId);
  if (resolvedMilestoneId) {
    const ms = await prisma.milestone.findFirst({
      where: { id: resolvedMilestoneId, journey: { goal: { userId } } },
      include: { journey: { select: { goalId: true } } },
    });
    if (!ms) throw Object.assign(new Error("Milestone not found"), { status: 404 });
    if (!resolvedGoalId) resolvedGoalId = ms.journey.goalId;
  }

  let nextDueAt: Date | null = null;
  try {
    nextDueAt = startDate ?? computeNextDue(new Date(), frequency);
  } catch {
    nextDueAt = null;
  }

  const schedule = await prisma.checkinSchedule.create({
    data: {
      userId,
      goalId: resolvedGoalId,
      milestoneId: resolvedMilestoneId,
      frequency,
      nextDueAt,
    },
  });
  return schedule;
}

export async function listSchedules(userId: string, filters?: { goalId?: string }) {
  const where: any = { userId };
  if (filters?.goalId) where.goalId = filters.goalId;
  const schedules = await prisma.checkinSchedule.findMany({
    where,
    orderBy: { createdAt: "desc" },
    include: { milestone: { select: { id: true, title: true } } },
  });
  return schedules;
}

export async function getScheduleForUser(userId: string, id: string) {
  const schedule = await prisma.checkinSchedule.findFirst({ where: { id, userId } });
  if (!schedule) throw Object.assign(new Error("Schedule not found"), { status: 404 });
  return schedule;
}

export async function getScheduleWithEntries(userId: string, id: string) {
  const schedule = await prisma.checkinSchedule.findFirst({
    where: { id, userId },
    include: { entries: { orderBy: { createdAt: "desc" }, take: 20 } },
  });
  if (!schedule) throw Object.assign(new Error("Schedule not found"), { status: 404 });
  return schedule;
}

export async function deleteSchedule(userId: string, id: string) {
  // Ensure ownership
  await getScheduleForUser(userId, id);
  // Hard delete: remove entries then schedule (to satisfy FK constraints)
  await prisma.$transaction([
    prisma.checkinEntry.deleteMany({ where: { scheduleId: id } }),
    prisma.checkinSchedule.delete({ where: { id } }),
  ]);
  return { ok: true };
}

export async function createEntry(params: {
  userId: string;
  scheduleId: string;
  answers?: any | null;
  notes?: string | null;
  progress?: number | null;
  completedAt?: Date | null;
}) {
  const { userId, scheduleId, answers, notes, progress, completedAt } = params;

  const schedule = await getScheduleForUser(userId, scheduleId);

  // Enforce at most one check-in per UTC day for daily schedules
  if ((schedule.frequency as Frequency) === "daily") {
    // Determine the UTC day window for completedAt or now
    const ts = completedAt ?? new Date();
    const startUtc = new Date(Date.UTC(ts.getUTCFullYear(), ts.getUTCMonth(), ts.getUTCDate(), 0, 0, 0, 0));
    const endUtc = new Date(Date.UTC(ts.getUTCFullYear(), ts.getUTCMonth(), ts.getUTCDate(), 23, 59, 59, 999));
    const existing = await prisma.checkinEntry.findFirst({
      where: {
        scheduleId: schedule.id,
        userId,
        completedAt: { gte: startUtc, lte: endUtc },
      },
      select: { id: true },
    });
    if (existing) {
      const err: any = new Error("You already checked in today");
      err.status = 409; // Conflict
      throw err;
    }
  }

  const entryData: any = {
    scheduleId: schedule.id,
    userId,
    goalId: schedule.goalId,
    milestoneId: schedule.milestoneId,
  };
  if (typeof answers !== "undefined") entryData.answers = answers;
  if (typeof notes !== "undefined" && notes !== null) entryData.notes = notes;
  if (typeof progress === "number") entryData.progress = progress;
  if (completedAt) entryData.completedAt = completedAt;
  const entry = await prisma.checkinEntry.create({ data: entryData });

  // Optional milestone progress update if schedule tied to milestone and user owns it
  let updatedMilestone: any = null;
  if (typeof progress === "number" && schedule.milestoneId) {
    const ms = await prisma.milestone.findFirst({
      where: { id: schedule.milestoneId, journey: { goal: { userId } } },
      include: { journey: { select: { goalId: true } } },
    });
    if (!ms) {
      const err: any = new Error("Forbidden");
      err.status = 403;
      throw err;
    }
    if (schedule.goalId && ms.journey.goalId !== schedule.goalId) {
      const err: any = new Error("Forbidden");
      err.status = 403;
      throw err;
    }
    const clamped = Math.max(0, Math.min(100, progress));
    updatedMilestone = await prisma.milestone.update({ where: { id: ms.id }, data: { progress: clamped } });
  }

  // Advance schedule nextDueAt using util; base = existing nextDueAt or now
  let newNext: Date | null = null;
  try {
    const base = schedule.nextDueAt ?? new Date();
    newNext = computeNextDue(base, schedule.frequency as Frequency);
  } catch {
    newNext = null;
  }
  let updatedSchedule: typeof schedule | null = null;
  try {
    updatedSchedule = await prisma.checkinSchedule.update({ where: { id: schedule.id }, data: { nextDueAt: newNext } });
  } catch {
    // swallow; keep schedule as is
  }

  return { entry, updatedSchedule, updatedMilestone };
}

export async function listEntries(userId: string, opts?: { goalId?: string; limit?: number }) {
  const where: any = { userId };
  if (opts?.goalId) where.goalId = opts.goalId;
  const take = Math.max(1, Math.min(100, opts?.limit ?? 20));
  const entries = await prisma.checkinEntry.findMany({ where, orderBy: { createdAt: "desc" }, take });
  return entries;
}
