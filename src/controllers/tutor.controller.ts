import type { Request, Response } from "express";
import { z } from "zod";
import * as tutorService from "../services/tutorService";

function uid(req: Request): string {
  return (req as any).userId as string;
}

function firstIssueMessage(error: z.ZodError): string {
  const first = error.issues?.[0];
  return first?.message ?? "Invalid request body";
}

const createSessionSchema = z.object({
  goalId: z.string().uuid().optional(),
  milestoneId: z.string().uuid().optional(),
  title: z.string().min(1).max(200).optional(),
});

export async function createSession(req: Request, res: Response) {
  const parsed = createSessionSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: firstIssueMessage(parsed.error) });
  const session = await tutorService.createSession({
    userId: uid(req),
    goalId: parsed.data.goalId ?? null,
    milestoneId: parsed.data.milestoneId ?? null,
    title: parsed.data.title ?? null,
  });
  return res.json({ session });
}

export async function listSessions(req: Request, res: Response) {
  const sessions = await tutorService.listSessions(uid(req));
  return res.json({ sessions });
}

const sessionIdParam = z.object({ sessionId: z.string().uuid() });

export async function listMessages(req: Request, res: Response) {
  const parsed = sessionIdParam.safeParse(req.params);
  if (!parsed.success) return res.status(400).json({ error: firstIssueMessage(parsed.error) });
  const messages = await tutorService.listMessages(uid(req), parsed.data.sessionId);
  return res.json({ messages });
}

const sendMessageSchema = z.object({
  content: z.string().min(1),
  useLLM: z.boolean().optional(),
  mode: z.enum(["chat", "explain", "apply"]).optional(),
});

export async function sendMessage(req: Request, res: Response) {
  const params = sessionIdParam.safeParse(req.params);
  if (!params.success) return res.status(400).json({ error: firstIssueMessage(params.error) });

  const parsed = sendMessageSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: firstIssueMessage(parsed.error) });

  try {
    const { assistantMessage, session } = await tutorService.sendMessage({
      userId: uid(req),
      sessionId: params.data.sessionId,
      content: parsed.data.content,
      useLLM: parsed.data.useLLM ?? true,
      mode: parsed.data.mode ?? "chat",
    });
    return res.json({ assistantMessage, session });
  } catch (e: any) {
    if (e?.status === 502) return res.status(502).json({ error: "LLM provider error", detail: e?.detail ?? String(e?.message || e) });
    const status = typeof e?.status === "number" ? e.status : 500;
    return res.status(status).json({ error: e?.message ?? "Internal error" });
  }
}

export async function closeSession(req: Request, res: Response) {
  const params = sessionIdParam.safeParse(req.params);
  if (!params.success) return res.status(400).json({ error: firstIssueMessage(params.error) });
  const updated = await tutorService.closeSession(uid(req), params.data.sessionId);
  return res.json({ session: updated });
}
