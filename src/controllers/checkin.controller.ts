import type { Request, Response } from "express";
import { z } from "zod";
import * as svc from "../services/checkinService";

function uid(req: Request): string {
  return (req as any).userId as string;
}

function firstIssue(err: z.ZodError) {
  const i = err.issues?.[0];
  return i?.message ?? "Invalid request";
}

export const createScheduleSchema = z.object({
  goalId: z.string().uuid().optional(),
  milestoneId: z.string().uuid().optional(),
  frequency: z.enum(["daily", "weekly", "biweekly"]),
  startDate: z.string().datetime().optional(),
});

export async function createSchedule(req: Request, res: Response) {
  const parsed = createScheduleSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: firstIssue(parsed.error) });
  try {
    const schedule = await svc.createSchedule({
      userId: uid(req),
      goalId: parsed.data.goalId ?? null,
      milestoneId: parsed.data.milestoneId ?? null,
      frequency: parsed.data.frequency,
      startDate: parsed.data.startDate ? new Date(parsed.data.startDate) : null,
    });
    return res.status(201).json({ schedule });
  } catch (e: any) {
    const status = typeof e?.status === "number" ? e.status : 500;
    return res.status(status).json({ error: e?.message ?? "Failed to create schedule" });
  }
}

export async function listSchedules(req: Request, res: Response) {
  const qp = z.object({ goalId: z.string().uuid().optional() }).safeParse(req.query);
  if (!qp.success) return res.status(400).json({ error: firstIssue(qp.error) });
  try {
  const schedules = await svc.listSchedules(uid(req), qp.data.goalId ? { goalId: qp.data.goalId } : undefined);
    return res.json(schedules);
  } catch (e: any) {
    const status = typeof e?.status === "number" ? e.status : 500;
    return res.status(status).json({ error: e?.message ?? "Failed to list schedules" });
  }
}

export async function getSchedule(req: Request, res: Response) {
  const params = z.object({ id: z.string().uuid() }).safeParse(req.params);
  if (!params.success) return res.status(400).json({ error: firstIssue(params.error) });
  try {
    const schedule = await svc.getScheduleWithEntries(uid(req), params.data.id);
    return res.json(schedule);
  } catch (e: any) {
    const status = typeof e?.status === "number" ? e.status : 500;
    return res.status(status).json({ error: e?.message ?? "Failed to fetch schedule" });
  }
}

export async function deleteSchedule(req: Request, res: Response) {
  const params = z.object({ id: z.string().uuid() }).safeParse(req.params);
  if (!params.success) return res.status(400).json({ error: firstIssue(params.error) });
  try {
    await svc.deleteSchedule(uid(req), params.data.id);
    return res.json({ ok: true });
  } catch (e: any) {
    const status = typeof e?.status === "number" ? e.status : 500;
    return res.status(status).json({ error: e?.message ?? "Failed to delete schedule" });
  }
}

export const createEntrySchema = z.object({
  answers: z.any().optional(),
  notes: z.string().max(2000).optional(),
  progress: z.number().int().min(0).max(100).optional(),
  completedAt: z.string().datetime().optional(),
});

export async function createEntry(req: Request, res: Response) {
  const params = z.object({ id: z.string().uuid() }).safeParse(req.params);
  if (!params.success) return res.status(400).json({ error: firstIssue(params.error) });
  const parsed = createEntrySchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: firstIssue(parsed.error) });
  try {
  const { entry, updatedSchedule, updatedMilestone } = await svc.createEntry({
      userId: uid(req),
      scheduleId: params.data.id,
      answers: parsed.data.answers ?? null,
      notes: parsed.data.notes ?? null,
      progress: typeof parsed.data.progress === "number" ? parsed.data.progress : null,
      completedAt: parsed.data.completedAt ? new Date(parsed.data.completedAt) : null,
    });
  return res.status(201).json({ entry, updatedSchedule, updatedMilestone });
  } catch (e: any) {
    const status = typeof e?.status === "number" ? e.status : 500;
    return res.status(status).json({ error: e?.message ?? "Failed to create entry" });
  }
}

export async function listEntries(req: Request, res: Response) {
  const qp = z.object({
    goalId: z.string().uuid().optional(),
    limit: z.coerce.number().int().min(1).max(100).optional(),
  }).safeParse(req.query);
  if (!qp.success) return res.status(400).json({ error: firstIssue(qp.error) });
  try {
  const opts: { goalId?: string; limit?: number } = {};
  if (qp.data.goalId) opts.goalId = qp.data.goalId;
  if (typeof qp.data.limit === "number") opts.limit = qp.data.limit;
  const entries = await svc.listEntries(uid(req), opts);
    return res.json(entries);
  } catch (e: any) {
    const status = typeof e?.status === "number" ? e.status : 500;
    return res.status(status).json({ error: e?.message ?? "Failed to list entries" });
  }
}
