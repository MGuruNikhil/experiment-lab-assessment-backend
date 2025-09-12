import type { Request, Response } from "express";
import { z } from "zod";
import { prisma } from "../lib/prisma";

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
  log("goal.update", { uid, goalId });
  return res.json(goal);
}

export async function deleteGoal(req: Request, res: Response) {
  const uid = userId(req);
  const { goalId } = req.params as { goalId: string };
  const exists = await prisma.goal.findFirst({ where: { id: goalId, userId: uid }, select: { id: true } });
  if (!exists) return notFound(res, "Goal not found");

  await prisma.$transaction(async (tx) => {
    const journeys = await tx.journey.findMany({ where: { goalId } });
    const journeyIds = journeys.map(j => j.id);
    const milestones = await tx.milestone.findMany({ where: { journeyId: { in: journeyIds } }, select: { id: true } });
    const milestoneIds = milestones.map(m => m.id);
    if (milestoneIds.length > 0) {
      await tx.milestoneDependency.deleteMany({ where: { OR: [{ milestoneId: { in: milestoneIds } }, { dependsOnId: { in: milestoneIds } }] } });
      await tx.milestone.deleteMany({ where: { id: { in: milestoneIds } } });
    }
    await tx.journey.deleteMany({ where: { goalId } });
    await tx.goal.delete({ where: { id: goalId } });
  });
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

  const heuristic = generateHeuristicJourney(
    goal.title,
    goal.complexity ?? null,
    parsed.data.durationWeeks ?? null,
    parsed.data.chunking ?? (goal.chunking as any) ?? "weekly",
  );

  // Persist heuristic suggestion
  await prisma.suggestion.create({
    data: {
      userId: uid,
      goalId: goal.id,
      provider: "heuristic",
      response: heuristic as any,
    },
  });

  const useLLM = parsed.data.useLLM === true;
  const providerConfigured = Boolean(process.env.OPENROUTER_API_KEY || process.env.OPENAI_API_KEY);

  if (!useLLM || !providerConfigured) {
    return res.json(heuristic);
  }

  // If LLM flow desired, still return heuristic immediately for instant UI rendering
  return res.json({ heuristicSuggestion: heuristic });
}


