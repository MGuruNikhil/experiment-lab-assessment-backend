import type { Request, Response } from "express";
import { z } from "zod";
import * as svc from "../services/tutorSummaryService";

function uid(req: Request): string { return (req as any).userId as string; }
function firstIssueMessage(error: z.ZodError): string { const f = error.issues?.[0]; return f?.message ?? "Invalid request"; }

const sessionIdParam = z.object({ sessionId: z.string().uuid() });
const postBody = z.object({ force: z.boolean().optional() });

export async function createSummary(req: Request, res: Response) {
  const params = sessionIdParam.safeParse(req.params);
  if (!params.success) return res.status(400).json({ error: firstIssueMessage(params.error) });
  const parsed = postBody.safeParse(req.body ?? {});
  if (!parsed.success) return res.status(400).json({ error: firstIssueMessage(parsed.error) });
  try {
    const opts: { force?: boolean } = {};
    if (typeof parsed.data.force === "boolean") opts.force = parsed.data.force;
    const r = await svc.generateAndStoreSummary(uid(req), params.data.sessionId, opts);
    const status = r.cached ? 200 : 201;
    return res.status(status).json({ summary: r.summary, cached: r.cached });
  } catch (e: any) {
    if (e?.status === 429) return res.status(429).json({ error: "rate_limited", retryAfter: e?.detail?.retryAfter });
    if (e?.status === 502) return res.status(502).json({ error: "summary_failed" });
    const status = typeof e?.status === "number" ? e.status : 500;
    return res.status(status).json({ error: e?.message || "Failed to generate summary" });
  }
}

export async function getSummary(req: Request, res: Response) {
  const params = sessionIdParam.safeParse(req.params);
  if (!params.success) return res.status(400).json({ error: firstIssueMessage(params.error) });
  const found = await svc.getSummary(uid(req), params.data.sessionId);
  if (!found) return res.status(404).json({ error: "Not found" });
  return res.json({ summary: found });
}
