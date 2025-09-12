import type { Request, Response } from "express";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { generateJourneyWithLLM, LLMJourneySchema } from "../services/llmService";

function userId(req: Request): string {
  return (req as any).userId as string;
}

function badRequest(res: Response, message: string) {
  return res.status(400).json({ error: message });
}

function notFound(res: Response, message: string = "Not Found") {
  return res.status(404).json({ error: message });
}

function log(action: string, meta?: any) {
  // eslint-disable-next-line no-console
  console.log(`[audit] ${action}`, meta ?? {});
}

function firstIssueMessage(error: z.ZodError): string {
  const first = error.issues?.[0];
  return first?.message ?? "Invalid request body";
}

function stableStringify(obj: any): string {
  // Deterministic stringify: sorts object keys recursively
  if (obj === null || typeof obj !== "object") return JSON.stringify(obj);
  if (Array.isArray(obj)) return `[${obj.map((v) => stableStringify(v)).join(",")}]`;
  const keys = Object.keys(obj).sort();
  const entries = keys.map((k) => `${JSON.stringify(k)}:${stableStringify((obj as any)[k])}`);
  return `{${entries.join(",")}}`;
}

function hashString32(str: string): string {
  // FNV-1a 32-bit hash (sufficient for cache keying, not for security)
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = (h + (h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24)) >>> 0;
  }
  return h.toString(16).padStart(8, "0");
}

function computeSuggestionSignature(goal: {
  id: string;
  title: string;
  description: string | null;
  complexity: number | null;
  suggestedWeeks: number | null;
  chunking: string | null;
}, options: { durationWeeks?: number; chunking?: "weekly" | "biweekly" } | undefined) {
  const payload = {
    goal: {
      id: goal.id,
      title: goal.title,
      description: goal.description ?? null,
      complexity: goal.complexity ?? null,
      suggestedWeeks: goal.suggestedWeeks ?? null,
      chunking: goal.chunking === "biweekly" ? "biweekly" : (goal.chunking ? "weekly" : null),
      updatedAt: undefined, // excluded on purpose
      createdAt: undefined, // excluded on purpose
    },
    options: {
      durationWeeks: typeof options?.durationWeeks === "number" ? options.durationWeeks : undefined,
      chunking: options?.chunking ?? undefined,
    },
  };
  const str = stableStringify(payload);
  // Short hash for efficient equality
  return hashString32(str);
}

export function generateHeuristicJourney(
  title: string,
  complexity?: number | null,
  durationWeeks?: number | null,
  chunking?: "weekly" | "biweekly" | null,
) {
  const effectiveChunking: "weekly" | "biweekly" = (chunking === "biweekly") ? "biweekly" : "weekly";
  const chosenDuration = durationWeeks ?? ((complexity ?? 5) <= 4 ? 6 : (complexity ?? 5) <= 7 ? 12 : 24);
  const template = [
    { t: "Intro & Setup", d: "Kick off, scope goal, environment setup" },
    { t: "Core Concepts", d: "Study foundations and key ideas" },
    { t: "Practice & Exercises", d: "Hands-on drills to solidify learning" },
    { t: "Projects", d: "Build small projects to integrate skills" },
    { t: "Advanced Topics", d: "Explore deeper patterns and tradeoffs" },
    { t: "Review & Next Steps", d: "Summarize, reflect, and plan follow-up" },
  ];

  const weeksPerMilestone = effectiveChunking === "weekly" ? 1 : 2;
  const estimatedHoursPerMilestone = effectiveChunking === "weekly" ? 10 : 20;

  // number of milestones: min(template length, floor(duration / weeksPerMilestone)) but at least 1
  const maxMilestonesByDuration = Math.max(1, Math.floor(chosenDuration / weeksPerMilestone));
  const milestoneCount = Math.min(template.length, maxMilestonesByDuration);

  const milestones = Array.from({ length: milestoneCount }).map((_, i) => {
    const startWeek = i * weeksPerMilestone + 1;
    const endWeek = Math.min(chosenDuration, startWeek + weeksPerMilestone - 1);
    const tpl = template[i] ?? { t: `Phase ${i + 1}`, d: "Work chunk" };
    return {
      title: `${tpl.t}`,
      description: `${tpl.d} for: ${title}`,
      orderIndex: i,
      startWeek,
      endWeek,
      estimatedHours: estimatedHoursPerMilestone,
      dependsOnId: i > 0 ? `M${i}` : null, // label for client-side mapping (not persisted directly)
    };
  });

  // Convert dependsOnId to index linking; API consumer can map when creating dependencies
  return {
    journeyTitle: `${title}: Suggested Journey`,
    durationWeeks: chosenDuration,
    chunking: effectiveChunking,
    milestones,
  };
}

const createGoalSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
  complexity: z.number().int().min(1).max(10).optional(),
  suggestedWeeks: z.number().int().positive().optional(),
  chunking: z.enum(["weekly", "biweekly"]).optional(),
});

export async function createGoal(req: Request, res: Response) {
  const parsed = createGoalSchema.safeParse(req.body);
  if (!parsed.success) return badRequest(res, firstIssueMessage(parsed.error));
  const uid = userId(req);
  const data = {
    userId: uid,
    title: parsed.data.title,
    description: parsed.data.description ?? null,
    complexity: parsed.data.complexity ?? null,
    suggestedWeeks: parsed.data.suggestedWeeks ?? null,
    chunking: parsed.data.chunking ?? null,
  };
  const goal = await prisma.goal.create({ data });
  log("goal.create", { uid, goalId: goal.id });
  return res.json(goal);
}

export async function listGoals(req: Request, res: Response) {
  const uid = userId(req);
  const goals = await prisma.goal.findMany({
    where: { userId: uid },
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      title: true,
      description: true,
      complexity: true,
      suggestedWeeks: true,
      chunking: true,
      createdAt: true,
      updatedAt: true,
      suggestions: { orderBy: { createdAt: "desc" }, take: 1, select: { createdAt: true } },
    },
  });
  const withLatestSuggestion = goals.map((g) => {
    const latest = g.suggestions?.[0]?.createdAt ?? null;
    return {
      id: g.id,
      title: g.title,
      description: g.description,
      complexity: g.complexity,
      suggestedWeeks: g.suggestedWeeks,
      chunking: g.chunking,
      createdAt: g.createdAt,
      updatedAt: g.updatedAt,
      latestSuggestionAt: latest,
    };
  });
  log("goal.list", { uid, count: withLatestSuggestion.length });
  return res.json(withLatestSuggestion);
}

export async function getGoalById(req: Request, res: Response) {
  const uid = userId(req);
  const { goalId } = req.params as { goalId: string };
  const goal = await prisma.goal.findFirst({
    where: { id: goalId, userId: uid },
    include: {
      journeys: {
        orderBy: { createdAt: "asc" },
        include: {
          milestones: { orderBy: { orderIndex: "asc" } },
        },
      },
    },
  });
  if (!goal) return notFound(res, "Goal not found");
  log("goal.get", { uid, goalId });
  return res.json(goal);
}

const updateGoalSchema = z.object({
  title: z.string().min(1).optional(),
  description: z.string().nullable().optional(),
  complexity: z.number().int().min(1).max(10).nullable().optional(),
  suggestedWeeks: z.number().int().positive().nullable().optional(),
  chunking: z.enum(["weekly", "biweekly"]).nullable().optional(),
});

export async function updateGoal(req: Request, res: Response) {
  const uid = userId(req);
  const { goalId } = req.params as { goalId: string };
  const parsed = updateGoalSchema.safeParse(req.body);
  if (!parsed.success) return badRequest(res, firstIssueMessage(parsed.error));

  const exists = await prisma.goal.findFirst({ where: { id: goalId, userId: uid }, select: { id: true } });
  if (!exists) return notFound(res, "Goal not found");

  const updateData: any = {};
  if ("title" in parsed.data) updateData.title = parsed.data.title as string | undefined;
  if ("description" in parsed.data) updateData.description = (parsed.data as any).description ?? null;
  if ("complexity" in parsed.data) updateData.complexity = (parsed.data as any).complexity ?? null;
  if ("suggestedWeeks" in parsed.data) updateData.suggestedWeeks = (parsed.data as any).suggestedWeeks ?? null;
  if ("chunking" in parsed.data) updateData.chunking = (parsed.data as any).chunking ?? null;
  const goal = await prisma.goal.update({ where: { id: goalId }, data: updateData });
  // Invalidate existing cached LLM suggestions for this goal by expiring them
  try {
    await prisma.suggestion.updateMany({
      where: { goalId, provider: "openrouter", expiresAt: { gt: new Date() } },
      data: { expiresAt: new Date() },
    });
  } catch (e) {
    console.warn("[goal.update] cache.expire.failed", { goalId, message: String((e as any)?.message || e) });
  }
  log("goal.update", { uid, goalId });
  return res.json(goal);
}

export async function deleteGoal(req: Request, res: Response) {
  const uid = userId(req);
  const { goalId } = req.params as { goalId: string };
  const exists = await prisma.goal.findFirst({ where: { id: goalId, userId: uid }, select: { id: true } });
  if (!exists) return notFound(res, "Goal not found");

  // Delete suggestions referencing this goal outside the transaction to reduce TX duration
  await prisma.suggestion.deleteMany({ where: { goalId } });

  await prisma.$transaction(async (tx) => {
    // Delete all milestone dependencies where either side belongs to this goal's journeys
    await tx.milestoneDependency.deleteMany({
      where: {
        OR: [
          { milestone: { is: { journey: { is: { goalId } } } } },
          { dependsOn: { is: { journey: { is: { goalId } } } } },
        ],
      },
    });

    // Delete milestones belonging to this goal's journeys
    await tx.milestone.deleteMany({ where: { journey: { is: { goalId } } } });

    // Delete journeys of this goal
    await tx.journey.deleteMany({ where: { goalId } });

    // Finally delete the goal
    await tx.goal.delete({ where: { id: goalId } });
  }, { timeout: 14000, maxWait: 5000 });
  log("goal.delete", { uid, goalId });
  return res.json({ ok: true });
}

const createJourneySchema = z.object({
  title: z.string().optional(),
  startDate: z.string().datetime().optional(),
  endDate: z.string().datetime().optional(),
  meta: z.any().optional(),
});

export async function createJourney(req: Request, res: Response) {
  const uid = userId(req);
  const { goalId } = req.params as { goalId: string };
  const parsed = createJourneySchema.safeParse(req.body);
  if (!parsed.success) return badRequest(res, firstIssueMessage(parsed.error));

  const goal = await prisma.goal.findFirst({ where: { id: goalId, userId: uid }, select: { id: true } });
  if (!goal) return notFound(res, "Goal not found");

  // Idempotency guard: if a journey with same title already exists for this goal, return it
  if (parsed.data.title) {
    const existing = await prisma.journey.findFirst({ where: { goalId, title: parsed.data.title } });
    if (existing) {
      log("journey.create.idempotent", { uid, goalId, journeyId: existing.id });
      return res.json(existing);
    }
  }

  const journey = await prisma.journey.create({
    data: {
      goalId,
      title: parsed.data.title ?? null,
      startDate: parsed.data.startDate ? new Date(parsed.data.startDate) : null,
      endDate: parsed.data.endDate ? new Date(parsed.data.endDate) : null,
      meta: parsed.data.meta as any,
    },
  });
  log("journey.create", { uid, goalId, journeyId: journey.id });
  return res.json(journey);
}

const createMilestoneSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
  orderIndex: z.number().int(),
  startWeek: z.number().int().optional(),
  endWeek: z.number().int().optional(),
  estimatedHours: z.number().int().optional(),
});

export async function createMilestone(req: Request, res: Response) {
  const uid = userId(req);
  const { journeyId } = req.params as { journeyId: string };
  const parsed = createMilestoneSchema.safeParse(req.body);
  if (!parsed.success) return badRequest(res, firstIssueMessage(parsed.error));

  const journey = await prisma.journey.findFirst({ where: { id: journeyId, goal: { userId: uid } }, select: { id: true } });
  if (!journey) return notFound(res, "Journey not found");

  // Idempotency: if a milestone with the same orderIndex already exists for this journey, return it
  const existing = await prisma.milestone.findFirst({ where: { journeyId, orderIndex: parsed.data.orderIndex } });
  if (existing) {
    log("milestone.create.idempotent", { uid, journeyId, milestoneId: existing.id, orderIndex: parsed.data.orderIndex });
    return res.json(existing);
  }

  const milestone = await prisma.milestone.create({
    data: {
      journeyId,
      title: parsed.data.title,
      description: parsed.data.description ?? null,
      orderIndex: parsed.data.orderIndex,
      startWeek: parsed.data.startWeek ?? null,
      endWeek: parsed.data.endWeek ?? null,
      estimatedHours: parsed.data.estimatedHours ?? null,
    },
  });
  log("milestone.create", { uid, journeyId, milestoneId: milestone.id });
  return res.json(milestone);
}

const updateMilestoneSchema = z.object({
  title: z.string().min(1).optional(),
  description: z.string().nullable().optional(),
  orderIndex: z.number().int().optional(),
  startWeek: z.number().int().nullable().optional(),
  endWeek: z.number().int().nullable().optional(),
  estimatedHours: z.number().int().nullable().optional(),
  progress: z.number().int().min(0).max(100).optional(),
  metadata: z.any().optional(),
});

export async function updateMilestone(req: Request, res: Response) {
  const uid = userId(req);
  const { milestoneId } = req.params as { milestoneId: string };
  const parsed = updateMilestoneSchema.safeParse(req.body);
  if (!parsed.success) return badRequest(res, firstIssueMessage(parsed.error));

  const milestone = await prisma.milestone.findFirst({ where: { id: milestoneId, journey: { goal: { userId: uid } } } });
  if (!milestone) return notFound(res, "Milestone not found");

  // If attempting to mark complete, validate dependencies are complete
  if ("progress" in parsed.data && (parsed.data as any).progress === 100) {
    const deps = await prisma.milestoneDependency.findMany({
      where: { milestoneId },
      include: {
        dependsOn: { select: { id: true, title: true, progress: true } },
      },
    });
    const unmet = deps
      .filter((d) => (d as any).dependsOn?.progress !== 100)
      .map((d) => ({ id: (d as any).dependsOn?.id as string, title: (d as any).dependsOn?.title as string }));
    if (unmet.length > 0) {
      return res.status(400).json({ error: "Unmet dependencies", unmetDependencies: unmet });
    }
  }

  const msUpdate: any = {};
  if ("title" in parsed.data) msUpdate.title = (parsed.data as any).title;
  if ("description" in parsed.data) msUpdate.description = (parsed.data as any).description ?? null;
  if ("orderIndex" in parsed.data) msUpdate.orderIndex = (parsed.data as any).orderIndex;
  if ("startWeek" in parsed.data) msUpdate.startWeek = (parsed.data as any).startWeek ?? null;
  if ("endWeek" in parsed.data) msUpdate.endWeek = (parsed.data as any).endWeek ?? null;
  if ("estimatedHours" in parsed.data) msUpdate.estimatedHours = (parsed.data as any).estimatedHours ?? null;
  if ("progress" in parsed.data) msUpdate.progress = (parsed.data as any).progress;
  if ("metadata" in parsed.data) msUpdate.metadata = (parsed.data as any).metadata;
  const updated = await prisma.milestone.update({ where: { id: milestoneId }, data: msUpdate });
  log("milestone.update", { uid, milestoneId });
  return res.json(updated);
}

export async function deleteMilestone(req: Request, res: Response) {
  const uid = userId(req);
  const { milestoneId } = req.params as { milestoneId: string };
  const milestone = await prisma.milestone.findFirst({ where: { id: milestoneId, journey: { goal: { userId: uid } } } });
  if (!milestone) return notFound(res, "Milestone not found");

  await prisma.$transaction(async (tx) => {
    await tx.milestoneDependency.deleteMany({ where: { OR: [{ milestoneId }, { dependsOnId: milestoneId }] } });
    await tx.milestone.delete({ where: { id: milestoneId } });
  });
  log("milestone.delete", { uid, milestoneId });
  return res.json({ ok: true });
}

const addDependencySchema = z.object({
  dependsOnId: z.string().uuid(),
});

async function wouldCreateCycle(startId: string, dependsOnId: string): Promise<boolean> {
  // DFS from dependsOnId to see if we can reach startId
  const stack = [dependsOnId];
  const visited = new Set<string>();
  while (stack.length) {
    const current = stack.pop()!;
    if (current === startId) return true;
    if (visited.has(current)) continue;
    visited.add(current);
    const next = await prisma.milestoneDependency.findMany({ where: { milestoneId: current }, select: { dependsOnId: true } });
    for (const edge of next) stack.push(edge.dependsOnId);
  }
  return false;
}

export async function addMilestoneDependency(req: Request, res: Response) {
  const uid = userId(req);
  const { milestoneId } = req.params as { milestoneId: string };
  const parsed = addDependencySchema.safeParse(req.body);
  if (!parsed.success) return badRequest(res, firstIssueMessage(parsed.error));

  const milestone = await prisma.milestone.findFirst({ where: { id: milestoneId, journey: { goal: { userId: uid } } }, select: { id: true } });
  if (!milestone) return notFound(res, "Milestone not found");

  // Ensure dependsOn belongs to same goal/user
  const dependsOn = await prisma.milestone.findFirst({ where: { id: parsed.data.dependsOnId, journey: { goal: { userId: uid } } }, select: { id: true } });
  if (!dependsOn) return badRequest(res, "dependsOnId invalid");

  if (milestoneId === parsed.data.dependsOnId) return badRequest(res, "Cannot depend on self");
  if (await wouldCreateCycle(milestoneId, parsed.data.dependsOnId)) return badRequest(res, "Dependency would create a cycle");

  const dep = await prisma.milestoneDependency.create({ data: { milestoneId, dependsOnId: parsed.data.dependsOnId } });
  log("dependency.add", { uid, milestoneId, dependsOnId: parsed.data.dependsOnId });
  return res.json(dep);
}

const suggestSchema = z.object({
  useLLM: z.boolean().optional(),
  chunking: z.enum(["weekly", "biweekly"]).optional(),
  durationWeeks: z.number().int().positive().optional(),
});

export async function suggestForGoal(req: Request, res: Response) {
  const uid = userId(req);
  const { goalId } = req.params as { goalId: string };
  const parsed = suggestSchema.safeParse(req.body);
  if (!parsed.success) return badRequest(res, firstIssueMessage(parsed.error));

  const goal = await prisma.goal.findFirst({ where: { id: goalId, userId: uid } });
  if (!goal) return notFound(res, "Goal not found");
  const goalIdLocal = goal.id; // safe local copy for closures below

  const heuristic = generateHeuristicJourney(
    goal.title,
    goal.complexity ?? null,
    parsed.data.durationWeeks ?? null,
    parsed.data.chunking ?? (goal.chunking as any) ?? "weekly",
  );

  // Helper to persist heuristic only when returned, with basic dedupe (10 minutes)
  async function persistHeuristicOnce() {
    const last = await prisma.suggestion.findFirst({
      where: { userId: uid, goalId: goalIdLocal, provider: "heuristic" },
      orderBy: { createdAt: "desc" },
      select: { createdAt: true },
    });
    const now = Date.now();
    const recent = last ? (now - new Date(last.createdAt).getTime() < 10 * 60 * 1000) : false;
    if (!recent) {
      await prisma.suggestion.create({
        data: {
          userId: uid,
          goalId: goalIdLocal,
          provider: "heuristic",
          response: heuristic as any,
          expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
        },
      });
    }
  }

  const useLLM = parsed.data.useLLM === true;
  const providerConfigured = Boolean(process.env.OPENROUTER_API_KEY);
  console.log("[suggest] pre", { uid, goalId: goal.id, useLLM, providerConfigured });

  if (!useLLM || !providerConfigured) {
    await persistHeuristicOnce();
    return res.json(heuristic);
  }

  // Daily quota: MAX_LLM_PER_DAY (default 20). Set env to override.
  const maxEnv = Number(process.env.MAX_LLM_PER_DAY);
  const maxPerDay = Number.isFinite(maxEnv) && maxEnv > 0 ? maxEnv : 20;
  const nowDate = new Date();
  const startOfDay = new Date(nowDate);
  startOfDay.setHours(0, 0, 0, 0);
  const usedToday = await prisma.suggestion.count({
    where: { userId: uid, provider: "openrouter", createdAt: { gte: startOfDay } },
  });
  console.log("[suggest] quota", { uid, usedToday, maxPerDay });
  if (usedToday >= maxPerDay) {
    const nextDay = new Date(startOfDay);
    nextDay.setDate(nextDay.getDate() + 1);
    const retryAfterSec = Math.max(1, Math.floor((nextDay.getTime() - nowDate.getTime()) / 1000));
  return res.status(429).json({ error: "Daily suggestion limit reached", retryAfter: retryAfterSec });
  }

  // caching by expiresAt
  // Prefer the most recent valid parsed LLM suggestion whose signature matches current goal/options
  const cachedList = await prisma.suggestion.findMany({
    where: { userId: uid, goalId: goal.id, provider: "openrouter", expiresAt: { gt: new Date() } },
    orderBy: { createdAt: "desc" },
    take: 10,
  });
  const sigOptions: { durationWeeks?: number; chunking?: "weekly" | "biweekly" } = {};
  if (typeof parsed.data.durationWeeks === "number") sigOptions.durationWeeks = parsed.data.durationWeeks;
  if (parsed.data.chunking) sigOptions.chunking = parsed.data.chunking;
  const currentSig = computeSuggestionSignature(
    {
      id: goal.id,
      title: goal.title,
      description: goal.description ?? null,
      complexity: goal.complexity ?? null,
      suggestedWeeks: goal.suggestedWeeks ?? null,
      chunking: goal.chunking ?? null,
    },
    sigOptions
  );
  const firstParsed = cachedList.find((c) => {
    const r: any = c.response as any;
    const sig = r && typeof r === "object" ? (r.signature as string | undefined) : undefined;
    return sig === currentSig && r && typeof r === "object" && "parsed" in r && r.parsed && typeof r.parsed === "object";
  });
  console.log("[suggest] cache", { entries: cachedList.length, matchingParsed: Boolean(firstParsed) });
  if (firstParsed) {
    const r: any = firstParsed.response as any;
    return res.json({ ...(r.parsed as any), cached: true, cachedAt: firstParsed.createdAt });
  }
  // Optionally, if there is a latest cache with matching signature but no parsed, return that metadata
  const latestMatching = cachedList.find((c) => {
    const r: any = c.response as any;
    const sig = r && typeof r === "object" ? (r.signature as string | undefined) : undefined;
    return sig === currentSig;
  });
  if (latestMatching) {
    return res.json({ suggestion: latestMatching.response as any, cached: true, cachedAt: latestMatching.createdAt });
  }

  // Call LLM provider
  try {
    const providerOpts: any = {};
    if (typeof parsed.data.durationWeeks === "number") providerOpts.durationWeeks = parsed.data.durationWeeks;
    if (parsed.data.chunking) providerOpts.chunking = parsed.data.chunking;
    console.log("[suggest] calling LLM", { uid, goalId: goal.id, providerOpts });
  const { parsed: llmParsed, rawText } = await generateJourneyWithLLM(
      {
        id: goal.id,
        title: goal.title,
        description: goal.description ?? null,
        complexity: goal.complexity ?? null,
        suggestedWeeks: goal.suggestedWeeks ?? null,
        chunking: goal.chunking ?? null,
      },
      providerOpts
    );
    console.log("[suggest] llm.result", { hasParsed: Boolean(llmParsed), rawLen: rawText?.length ?? 0 });

    if (llmParsed) {
      // Validate explicitly again (defensive)
      const valid = LLMJourneySchema.parse(llmParsed);
      const signature = computeSuggestionSignature(
        {
          id: goal.id,
          title: goal.title,
          description: goal.description ?? null,
          complexity: goal.complexity ?? null,
          suggestedWeeks: goal.suggestedWeeks ?? null,
          chunking: goal.chunking ?? null,
        },
        sigOptions
      );
      // Persist suggestion
      await prisma.suggestion.create({
        data: { userId: uid, goalId: goal.id, provider: "openrouter", response: { rawText, parsed: valid, signature, goalSnapshot: { id: goal.id, title: goal.title, description: goal.description ?? null, complexity: goal.complexity ?? null, suggestedWeeks: goal.suggestedWeeks ?? null, chunking: goal.chunking ?? null }, options: sigOptions } as any, expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000) },
      });

      // Create journey + milestones in DB within a transaction
  const created = await prisma.$transaction(async (tx) => {
        const journey = await tx.journey.create({
          data: {
            goalId: goal.id,
            title: valid.journeyTitle,
            meta: { durationWeeks: valid.durationWeeks, chunking: valid.chunking },
          },
        });

        // Create milestones first; store their ids to add dependencies
        const ids: string[] = [];
        for (const [i, m] of valid.milestones.entries()) {
          const createdMs = await tx.milestone.create({
            data: {
              journeyId: journey.id,
              title: m!.title,
              description: m!.description ?? null,
              orderIndex: i,
              startWeek: m!.startWeek,
              endWeek: m!.endWeek,
              estimatedHours: m!.estimatedHours ?? null,
            },
            select: { id: true },
          });
          ids.push(createdMs.id);
        }

        // Add dependencies (only indices within range and earlier milestones) in bulk
        const depRows: Array<{ milestoneId: string; dependsOnId: string }> = [];
        for (const [i, m] of valid.milestones.entries()) {
          const deps = m.dependencies ?? [];
          for (const d of deps) {
            if (Number.isInteger(d) && d >= 0 && d < i) {
              depRows.push({ milestoneId: ids[i]!, dependsOnId: ids[d]! });
            }
          }
        }
        if (depRows.length > 0) {
          await tx.milestoneDependency.createMany({ data: depRows, skipDuplicates: true });
        }
        return journey;
  }, { timeout: 14000, maxWait: 5000 });

      return res.json({ ...valid, journeyId: created.id });
    }

    // If parsing failed, persist raw and fallback (still with signature so cache can be matched explicitly)
  const signature = computeSuggestionSignature(
      {
        id: goal.id,
        title: goal.title,
        description: goal.description ?? null,
        complexity: goal.complexity ?? null,
        suggestedWeeks: goal.suggestedWeeks ?? null,
        chunking: goal.chunking ?? null,
      },
      sigOptions
    );
  await prisma.suggestion.create({ data: { userId: uid, goalId: goal.id, provider: "openrouter", response: { rawText, signature, goalSnapshot: { id: goal.id, title: goal.title, description: goal.description ?? null, complexity: goal.complexity ?? null, suggestedWeeks: goal.suggestedWeeks ?? null, chunking: goal.chunking ?? null }, options: sigOptions } as any, expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000) } });
  console.warn("[suggest] llm.parse.miss -> fallback heuristic");
  await persistHeuristicOnce();
  return res.json({ ...heuristic, llmError: true });
  } catch (e: any) {
    // Persist failure meta
    await prisma.suggestion.create({
      data: { userId: uid, goalId: goal.id, provider: "openrouter", response: { error: String(e?.message || e) } as any, expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000) },
    });
  console.error("[suggest] llm.error", { message: String(e?.message || e) });
  await persistHeuristicOnce();
  return res.json({ ...heuristic, llmError: true });
  }
}

export async function listSuggestionsForGoal(req: Request, res: Response) {
  const uid = userId(req);
  const { goalId } = req.params as { goalId: string };
  const goal = await prisma.goal.findFirst({ where: { id: goalId, userId: uid } });
  if (!goal) return notFound(res, "Goal not found");

  const suggestions = await prisma.suggestion.findMany({
    where: { userId: uid, goalId: goal.id },
    orderBy: { createdAt: "desc" },
    select: {
      id: true, provider: true, response: true, createdAt: true, expiresAt: true,
    },
  });
  return res.json(suggestions);
}


