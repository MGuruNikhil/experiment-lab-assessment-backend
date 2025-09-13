"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureGoalOwnership = ensureGoalOwnership;
exports.ensureMilestoneOwnership = ensureMilestoneOwnership;
exports.createSchedule = createSchedule;
exports.listSchedules = listSchedules;
exports.getScheduleForUser = getScheduleForUser;
exports.getScheduleWithEntries = getScheduleWithEntries;
exports.deleteSchedule = deleteSchedule;
exports.createEntry = createEntry;
exports.listEntries = listEntries;
const prisma_1 = require("../lib/prisma");
const checkinUtils_1 = require("../utils/checkinUtils");
async function ensureGoalOwnership(userId, goalId) {
    const goal = await prisma_1.prisma.goal.findFirst({ where: { id: goalId, userId }, select: { id: true } });
    if (!goal)
        throw Object.assign(new Error("Goal not found"), { status: 404 });
}
async function ensureMilestoneOwnership(userId, milestoneId) {
    const ms = await prisma_1.prisma.milestone.findFirst({ where: { id: milestoneId, journey: { goal: { userId } } }, select: { id: true } });
    if (!ms)
        throw Object.assign(new Error("Milestone not found"), { status: 404 });
}
async function createSchedule(params) {
    const { userId, goalId, milestoneId, frequency, startDate } = params;
    let resolvedGoalId = goalId ?? null;
    let resolvedMilestoneId = milestoneId ?? null;
    if (resolvedGoalId)
        await ensureGoalOwnership(userId, resolvedGoalId);
    if (resolvedMilestoneId) {
        const ms = await prisma_1.prisma.milestone.findFirst({
            where: { id: resolvedMilestoneId, journey: { goal: { userId } } },
            include: { journey: { select: { goalId: true } } },
        });
        if (!ms)
            throw Object.assign(new Error("Milestone not found"), { status: 404 });
        if (!resolvedGoalId)
            resolvedGoalId = ms.journey.goalId;
    }
    let nextDueAt = null;
    try {
        nextDueAt = startDate ?? (0, checkinUtils_1.computeNextDue)(new Date(), frequency);
    }
    catch {
        nextDueAt = null;
    }
    const schedule = await prisma_1.prisma.checkinSchedule.create({
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
async function listSchedules(userId, filters) {
    const where = { userId };
    if (filters?.goalId)
        where.goalId = filters.goalId;
    const schedules = await prisma_1.prisma.checkinSchedule.findMany({
        where,
        orderBy: { createdAt: "desc" },
        include: { milestone: { select: { id: true, title: true } } },
    });
    return schedules;
}
async function getScheduleForUser(userId, id) {
    const schedule = await prisma_1.prisma.checkinSchedule.findFirst({ where: { id, userId } });
    if (!schedule)
        throw Object.assign(new Error("Schedule not found"), { status: 404 });
    return schedule;
}
async function getScheduleWithEntries(userId, id) {
    const schedule = await prisma_1.prisma.checkinSchedule.findFirst({
        where: { id, userId },
        include: { entries: { orderBy: { createdAt: "desc" }, take: 20 } },
    });
    if (!schedule)
        throw Object.assign(new Error("Schedule not found"), { status: 404 });
    return schedule;
}
async function deleteSchedule(userId, id) {
    // Ensure ownership
    await getScheduleForUser(userId, id);
    // Hard delete: remove entries then schedule (to satisfy FK constraints)
    await prisma_1.prisma.$transaction([
        prisma_1.prisma.checkinEntry.deleteMany({ where: { scheduleId: id } }),
        prisma_1.prisma.checkinSchedule.delete({ where: { id } }),
    ]);
    return { ok: true };
}
async function createEntry(params) {
    const { userId, scheduleId, answers, notes, progress, completedAt } = params;
    const schedule = await getScheduleForUser(userId, scheduleId);
    // Enforce at most one check-in per UTC day for daily schedules
    if (schedule.frequency === "daily") {
        // Determine the UTC day window for completedAt or now
        const ts = completedAt ?? new Date();
        const startUtc = new Date(Date.UTC(ts.getUTCFullYear(), ts.getUTCMonth(), ts.getUTCDate(), 0, 0, 0, 0));
        const endUtc = new Date(Date.UTC(ts.getUTCFullYear(), ts.getUTCMonth(), ts.getUTCDate(), 23, 59, 59, 999));
        const existing = await prisma_1.prisma.checkinEntry.findFirst({
            where: {
                scheduleId: schedule.id,
                userId,
                completedAt: { gte: startUtc, lte: endUtc },
            },
            select: { id: true },
        });
        if (existing) {
            const err = new Error("You already checked in today");
            err.status = 409; // Conflict
            throw err;
        }
    }
    const entryData = {
        scheduleId: schedule.id,
        userId,
        goalId: schedule.goalId,
        milestoneId: schedule.milestoneId,
    };
    if (typeof answers !== "undefined")
        entryData.answers = answers;
    if (typeof notes !== "undefined" && notes !== null)
        entryData.notes = notes;
    if (typeof progress === "number")
        entryData.progress = progress;
    if (completedAt)
        entryData.completedAt = completedAt;
    const entry = await prisma_1.prisma.checkinEntry.create({ data: entryData });
    // Optional milestone progress update if schedule tied to milestone and user owns it
    let updatedMilestone = null;
    if (typeof progress === "number" && schedule.milestoneId) {
        const ms = await prisma_1.prisma.milestone.findFirst({
            where: { id: schedule.milestoneId, journey: { goal: { userId } } },
            include: { journey: { select: { goalId: true } } },
        });
        if (!ms) {
            const err = new Error("Forbidden");
            err.status = 403;
            throw err;
        }
        if (schedule.goalId && ms.journey.goalId !== schedule.goalId) {
            const err = new Error("Forbidden");
            err.status = 403;
            throw err;
        }
        const clamped = Math.max(0, Math.min(100, progress));
        updatedMilestone = await prisma_1.prisma.milestone.update({ where: { id: ms.id }, data: { progress: clamped } });
    }
    // Advance schedule nextDueAt using util; base = existing nextDueAt or now
    let newNext = null;
    try {
        const base = schedule.nextDueAt ?? new Date();
        newNext = (0, checkinUtils_1.computeNextDue)(base, schedule.frequency);
    }
    catch {
        newNext = null;
    }
    let updatedSchedule = null;
    try {
        updatedSchedule = await prisma_1.prisma.checkinSchedule.update({ where: { id: schedule.id }, data: { nextDueAt: newNext } });
    }
    catch {
        // swallow; keep schedule as is
    }
    return { entry, updatedSchedule, updatedMilestone };
}
async function listEntries(userId, opts) {
    const where = { userId };
    if (opts?.goalId)
        where.goalId = opts.goalId;
    const take = Math.max(1, Math.min(100, opts?.limit ?? 20));
    const entries = await prisma_1.prisma.checkinEntry.findMany({ where, orderBy: { createdAt: "desc" }, take });
    return entries;
}
//# sourceMappingURL=checkinService.js.map