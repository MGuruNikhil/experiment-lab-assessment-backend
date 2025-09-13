import type { Request, Response } from "express";
import * as svc from "../services/analyticsService";
import { z } from "zod";

function uid(req: Request): string { return (req as any).userId as string; }

export async function overview(req: Request, res: Response) {
  const data = await svc.getOverview(uid(req));
  return res.json(data);
}

const goalParam = z.object({ goalId: z.string().uuid() });

export async function goal(req: Request, res: Response) {
  const parsed = goalParam.safeParse(req.params);
  if (!parsed.success) return res.status(400).json({ error: parsed.error.issues?.[0]?.message || "Invalid goalId" });
  const data = await svc.getGoalDetails(uid(req), parsed.data.goalId);
  if (!data) return res.status(404).json({ error: "Not found" });
  return res.json(data);
}
