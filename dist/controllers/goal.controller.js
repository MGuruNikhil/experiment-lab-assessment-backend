"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateHeuristicJourney = generateHeuristicJourney;
exports.createGoal = createGoal;
exports.listGoals = listGoals;
exports.getGoalById = getGoalById;
exports.updateGoal = updateGoal;
exports.deleteGoal = deleteGoal;
exports.createJourney = createJourney;
exports.createMilestone = createMilestone;
exports.updateMilestone = updateMilestone;
exports.deleteMilestone = deleteMilestone;
exports.addMilestoneDependency = addMilestoneDependency;
exports.suggestForGoal = suggestForGoal;
exports.listSuggestionsForGoal = listSuggestionsForGoal;
const zod_1 = require("zod");
const prisma_1 = require("../lib/prisma");
const llmService_1 = require("../services/llmService");
function userId(req) {
    return req.userId;
}
function badRequest(res, message) {
    return res.status(400).json({ error: message });
}
function notFound(res, message = "Not Found") {
    return res.status(404).json({ error: message });
}
function log(action, meta) {
    // eslint-disable-next-line no-console
    console.log(`[audit] ${action}`, meta ?? {});
}
function firstIssueMessage(error) {
    const first = error.issues?.[0];
    return first?.message ?? "Invalid request body";
}
function stableStringify(obj) {
    // Deterministic stringify: sorts object keys recursively
    if (obj === null || typeof obj !== "object")
        return JSON.stringify(obj);
    if (Array.isArray(obj))
        return `[${obj.map((v) => stableStringify(v)).join(",")}]`;
    const keys = Object.keys(obj).sort();
    const entries = keys.map((k) => `${JSON.stringify(k)}:${stableStringify(obj[k])}`);
    return `{${entries.join(",")}}`;
}
function hashString32(str) {
    // FNV-1a 32-bit hash (sufficient for cache keying, not for security)
    let h = 0x811c9dc5;
    for (let i = 0; i < str.length; i++) {
        h ^= str.charCodeAt(i);
        h = (h + (h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24)) >>> 0;
    }
    return h.toString(16).padStart(8, "0");
}
function computeSuggestionSignature(goal, options) {
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
function generateHeuristicJourney(title, complexity, durationWeeks, chunking) {
    const effectiveChunking = (chunking === "biweekly") ? "biweekly" : "weekly";
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
const createGoalSchema = zod_1.z.object({
    title: zod_1.z.string().min(1),
    description: zod_1.z.string().optional(),
    complexity: zod_1.z.number().int().min(1).max(10).optional(),
    suggestedWeeks: zod_1.z.number().int().positive().optional(),
    chunking: zod_1.z.enum(["weekly", "biweekly"]).optional(),
});
async function createGoal(req, res) {
    const parsed = createGoalSchema.safeParse(req.body);
    if (!parsed.success)
        return badRequest(res, firstIssueMessage(parsed.error));
    const uid = userId(req);
    const data = {
        userId: uid,
        title: parsed.data.title,
        description: parsed.data.description ?? null,
        complexity: parsed.data.complexity ?? null,
        suggestedWeeks: parsed.data.suggestedWeeks ?? null,
        chunking: parsed.data.chunking ?? null,
    };
    const goal = await prisma_1.prisma.goal.create({ data });
    log("goal.create", { uid, goalId: goal.id });
    return res.json(goal);
}
async function listGoals(req, res) {
    const uid = userId(req);
    const goals = await prisma_1.prisma.goal.findMany({
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
async function getGoalById(req, res) {
    const uid = userId(req);
    const { goalId } = req.params;
    const goal = await prisma_1.prisma.goal.findFirst({
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
    if (!goal)
        return notFound(res, "Goal not found");
    log("goal.get", { uid, goalId });
    return res.json(goal);
}
const updateGoalSchema = zod_1.z.object({
    title: zod_1.z.string().min(1).optional(),
    description: zod_1.z.string().nullable().optional(),
    complexity: zod_1.z.number().int().min(1).max(10).nullable().optional(),
    suggestedWeeks: zod_1.z.number().int().positive().nullable().optional(),
    chunking: zod_1.z.enum(["weekly", "biweekly"]).nullable().optional(),
});
async function updateGoal(req, res) {
    const uid = userId(req);
    const { goalId } = req.params;
    const parsed = updateGoalSchema.safeParse(req.body);
    if (!parsed.success)
        return badRequest(res, firstIssueMessage(parsed.error));
    const exists = await prisma_1.prisma.goal.findFirst({ where: { id: goalId, userId: uid }, select: { id: true } });
    if (!exists)
        return notFound(res, "Goal not found");
    const updateData = {};
    if ("title" in parsed.data)
        updateData.title = parsed.data.title;
    if ("description" in parsed.data)
        updateData.description = parsed.data.description ?? null;
    if ("complexity" in parsed.data)
        updateData.complexity = parsed.data.complexity ?? null;
    if ("suggestedWeeks" in parsed.data)
        updateData.suggestedWeeks = parsed.data.suggestedWeeks ?? null;
    if ("chunking" in parsed.data)
        updateData.chunking = parsed.data.chunking ?? null;
    const goal = await prisma_1.prisma.goal.update({ where: { id: goalId }, data: updateData });
    // Invalidate existing cached LLM suggestions for this goal by expiring them
    try {
        await prisma_1.prisma.suggestion.updateMany({
            where: { goalId, provider: "openrouter", expiresAt: { gt: new Date() } },
            data: { expiresAt: new Date() },
        });
    }
    catch (e) {
        console.warn("[goal.update] cache.expire.failed", { goalId, message: String(e?.message || e) });
    }
    log("goal.update", { uid, goalId });
    return res.json(goal);
}
async function deleteGoal(req, res) {
    const uid = userId(req);
    const { goalId } = req.params;
    const exists = await prisma_1.prisma.goal.findFirst({ where: { id: goalId, userId: uid }, select: { id: true } });
    if (!exists)
        return notFound(res, "Goal not found");
    // Delete suggestions referencing this goal outside the transaction to reduce TX duration
    await prisma_1.prisma.suggestion.deleteMany({ where: { goalId } });
    await prisma_1.prisma.$transaction(async (tx) => {
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
const createJourneySchema = zod_1.z.object({
    title: zod_1.z.string().optional(),
    startDate: zod_1.z.string().datetime().optional(),
    endDate: zod_1.z.string().datetime().optional(),
    meta: zod_1.z.any().optional(),
});
async function createJourney(req, res) {
    const uid = userId(req);
    const { goalId } = req.params;
    const parsed = createJourneySchema.safeParse(req.body);
    if (!parsed.success)
        return badRequest(res, firstIssueMessage(parsed.error));
    const goal = await prisma_1.prisma.goal.findFirst({ where: { id: goalId, userId: uid }, select: { id: true } });
    if (!goal)
        return notFound(res, "Goal not found");
    // Idempotency guard: if a journey with same title already exists for this goal, return it
    if (parsed.data.title) {
        const existing = await prisma_1.prisma.journey.findFirst({ where: { goalId, title: parsed.data.title } });
        if (existing) {
            log("journey.create.idempotent", { uid, goalId, journeyId: existing.id });
            return res.json(existing);
        }
    }
    const journey = await prisma_1.prisma.journey.create({
        data: {
            goalId,
            title: parsed.data.title ?? null,
            startDate: parsed.data.startDate ? new Date(parsed.data.startDate) : null,
            endDate: parsed.data.endDate ? new Date(parsed.data.endDate) : null,
            meta: parsed.data.meta,
        },
    });
    log("journey.create", { uid, goalId, journeyId: journey.id });
    return res.json(journey);
}
const createMilestoneSchema = zod_1.z.object({
    title: zod_1.z.string().min(1),
    description: zod_1.z.string().optional(),
    orderIndex: zod_1.z.number().int(),
    startWeek: zod_1.z.number().int().optional(),
    endWeek: zod_1.z.number().int().optional(),
    estimatedHours: zod_1.z.number().int().optional(),
});
async function createMilestone(req, res) {
    const uid = userId(req);
    const { journeyId } = req.params;
    const parsed = createMilestoneSchema.safeParse(req.body);
    if (!parsed.success)
        return badRequest(res, firstIssueMessage(parsed.error));
    const journey = await prisma_1.prisma.journey.findFirst({ where: { id: journeyId, goal: { userId: uid } }, select: { id: true } });
    if (!journey)
        return notFound(res, "Journey not found");
    // Idempotency: if a milestone with the same orderIndex already exists for this journey, return it
    const existing = await prisma_1.prisma.milestone.findFirst({ where: { journeyId, orderIndex: parsed.data.orderIndex } });
    if (existing) {
        log("milestone.create.idempotent", { uid, journeyId, milestoneId: existing.id, orderIndex: parsed.data.orderIndex });
        return res.json(existing);
    }
    const milestone = await prisma_1.prisma.milestone.create({
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
const updateMilestoneSchema = zod_1.z.object({
    title: zod_1.z.string().min(1).optional(),
    description: zod_1.z.string().nullable().optional(),
    orderIndex: zod_1.z.number().int().optional(),
    startWeek: zod_1.z.number().int().nullable().optional(),
    endWeek: zod_1.z.number().int().nullable().optional(),
    estimatedHours: zod_1.z.number().int().nullable().optional(),
    progress: zod_1.z.number().int().min(0).max(100).optional(),
    metadata: zod_1.z.any().optional(),
});
async function updateMilestone(req, res) {
    const uid = userId(req);
    const { milestoneId } = req.params;
    const parsed = updateMilestoneSchema.safeParse(req.body);
    if (!parsed.success)
        return badRequest(res, firstIssueMessage(parsed.error));
    const milestone = await prisma_1.prisma.milestone.findFirst({ where: { id: milestoneId, journey: { goal: { userId: uid } } } });
    if (!milestone)
        return notFound(res, "Milestone not found");
    // If attempting to mark complete, validate dependencies are complete
    if ("progress" in parsed.data && parsed.data.progress === 100) {
        const deps = await prisma_1.prisma.milestoneDependency.findMany({
            where: { milestoneId },
            include: {
                dependsOn: { select: { id: true, title: true, progress: true } },
            },
        });
        const unmet = deps
            .filter((d) => d.dependsOn?.progress !== 100)
            .map((d) => ({ id: d.dependsOn?.id, title: d.dependsOn?.title }));
        if (unmet.length > 0) {
            return res.status(400).json({ error: "Unmet dependencies", unmetDependencies: unmet });
        }
    }
    const msUpdate = {};
    if ("title" in parsed.data)
        msUpdate.title = parsed.data.title;
    if ("description" in parsed.data)
        msUpdate.description = parsed.data.description ?? null;
    if ("orderIndex" in parsed.data)
        msUpdate.orderIndex = parsed.data.orderIndex;
    if ("startWeek" in parsed.data)
        msUpdate.startWeek = parsed.data.startWeek ?? null;
    if ("endWeek" in parsed.data)
        msUpdate.endWeek = parsed.data.endWeek ?? null;
    if ("estimatedHours" in parsed.data)
        msUpdate.estimatedHours = parsed.data.estimatedHours ?? null;
    if ("progress" in parsed.data)
        msUpdate.progress = parsed.data.progress;
    if ("metadata" in parsed.data)
        msUpdate.metadata = parsed.data.metadata;
    const updated = await prisma_1.prisma.milestone.update({ where: { id: milestoneId }, data: msUpdate });
    log("milestone.update", { uid, milestoneId });
    return res.json(updated);
}
async function deleteMilestone(req, res) {
    const uid = userId(req);
    const { milestoneId } = req.params;
    const milestone = await prisma_1.prisma.milestone.findFirst({ where: { id: milestoneId, journey: { goal: { userId: uid } } } });
    if (!milestone)
        return notFound(res, "Milestone not found");
    await prisma_1.prisma.$transaction(async (tx) => {
        await tx.milestoneDependency.deleteMany({ where: { OR: [{ milestoneId }, { dependsOnId: milestoneId }] } });
        await tx.milestone.delete({ where: { id: milestoneId } });
    });
    log("milestone.delete", { uid, milestoneId });
    return res.json({ ok: true });
}
const addDependencySchema = zod_1.z.object({
    dependsOnId: zod_1.z.string().uuid(),
});
async function wouldCreateCycle(startId, dependsOnId) {
    // DFS from dependsOnId to see if we can reach startId
    const stack = [dependsOnId];
    const visited = new Set();
    while (stack.length) {
        const current = stack.pop();
        if (current === startId)
            return true;
        if (visited.has(current))
            continue;
        visited.add(current);
        const next = await prisma_1.prisma.milestoneDependency.findMany({ where: { milestoneId: current }, select: { dependsOnId: true } });
        for (const edge of next)
            stack.push(edge.dependsOnId);
    }
    return false;
}
async function addMilestoneDependency(req, res) {
    const uid = userId(req);
    const { milestoneId } = req.params;
    const parsed = addDependencySchema.safeParse(req.body);
    if (!parsed.success)
        return badRequest(res, firstIssueMessage(parsed.error));
    const milestone = await prisma_1.prisma.milestone.findFirst({ where: { id: milestoneId, journey: { goal: { userId: uid } } }, select: { id: true } });
    if (!milestone)
        return notFound(res, "Milestone not found");
    // Ensure dependsOn belongs to same goal/user
    const dependsOn = await prisma_1.prisma.milestone.findFirst({ where: { id: parsed.data.dependsOnId, journey: { goal: { userId: uid } } }, select: { id: true } });
    if (!dependsOn)
        return badRequest(res, "dependsOnId invalid");
    if (milestoneId === parsed.data.dependsOnId)
        return badRequest(res, "Cannot depend on self");
    if (await wouldCreateCycle(milestoneId, parsed.data.dependsOnId))
        return badRequest(res, "Dependency would create a cycle");
    const dep = await prisma_1.prisma.milestoneDependency.create({ data: { milestoneId, dependsOnId: parsed.data.dependsOnId } });
    log("dependency.add", { uid, milestoneId, dependsOnId: parsed.data.dependsOnId });
    return res.json(dep);
}
const suggestSchema = zod_1.z.object({
    useLLM: zod_1.z.boolean().optional(),
    chunking: zod_1.z.enum(["weekly", "biweekly"]).optional(),
    durationWeeks: zod_1.z.number().int().positive().optional(),
});
async function suggestForGoal(req, res) {
    const uid = userId(req);
    const { goalId } = req.params;
    const parsed = suggestSchema.safeParse(req.body);
    if (!parsed.success)
        return badRequest(res, firstIssueMessage(parsed.error));
    const goal = await prisma_1.prisma.goal.findFirst({ where: { id: goalId, userId: uid } });
    if (!goal)
        return notFound(res, "Goal not found");
    const goalIdLocal = goal.id; // safe local copy for closures below
    const heuristic = generateHeuristicJourney(goal.title, goal.complexity ?? null, parsed.data.durationWeeks ?? null, parsed.data.chunking ?? goal.chunking ?? "weekly");
    // Helper to persist heuristic only when returned, with basic dedupe (10 minutes)
    async function persistHeuristicOnce() {
        const last = await prisma_1.prisma.suggestion.findFirst({
            where: { userId: uid, goalId: goalIdLocal, provider: "heuristic" },
            orderBy: { createdAt: "desc" },
            select: { createdAt: true },
        });
        const now = Date.now();
        const recent = last ? (now - new Date(last.createdAt).getTime() < 10 * 60 * 1000) : false;
        if (!recent) {
            await prisma_1.prisma.suggestion.create({
                data: {
                    userId: uid,
                    goalId: goalIdLocal,
                    provider: "heuristic",
                    response: heuristic,
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
    const usedToday = await prisma_1.prisma.suggestion.count({
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
    const cachedList = await prisma_1.prisma.suggestion.findMany({
        where: { userId: uid, goalId: goal.id, provider: "openrouter", expiresAt: { gt: new Date() } },
        orderBy: { createdAt: "desc" },
        take: 10,
    });
    const sigOptions = {};
    if (typeof parsed.data.durationWeeks === "number")
        sigOptions.durationWeeks = parsed.data.durationWeeks;
    if (parsed.data.chunking)
        sigOptions.chunking = parsed.data.chunking;
    const currentSig = computeSuggestionSignature({
        id: goal.id,
        title: goal.title,
        description: goal.description ?? null,
        complexity: goal.complexity ?? null,
        suggestedWeeks: goal.suggestedWeeks ?? null,
        chunking: goal.chunking ?? null,
    }, sigOptions);
    const firstParsed = cachedList.find((c) => {
        const r = c.response;
        const sig = r && typeof r === "object" ? r.signature : undefined;
        return sig === currentSig && r && typeof r === "object" && "parsed" in r && r.parsed && typeof r.parsed === "object";
    });
    console.log("[suggest] cache", { entries: cachedList.length, matchingParsed: Boolean(firstParsed) });
    if (firstParsed) {
        const r = firstParsed.response;
        return res.json({ ...r.parsed, cached: true, cachedAt: firstParsed.createdAt });
    }
    // Optionally, if there is a latest cache with matching signature but no parsed, return that metadata
    const latestMatching = cachedList.find((c) => {
        const r = c.response;
        const sig = r && typeof r === "object" ? r.signature : undefined;
        return sig === currentSig;
    });
    if (latestMatching) {
        return res.json({ suggestion: latestMatching.response, cached: true, cachedAt: latestMatching.createdAt });
    }
    // Call LLM provider
    try {
        const providerOpts = {};
        if (typeof parsed.data.durationWeeks === "number")
            providerOpts.durationWeeks = parsed.data.durationWeeks;
        if (parsed.data.chunking)
            providerOpts.chunking = parsed.data.chunking;
        console.log("[suggest] calling LLM", { uid, goalId: goal.id, providerOpts });
        const { parsed: llmParsed, rawText } = await (0, llmService_1.generateJourneyWithLLM)({
            id: goal.id,
            title: goal.title,
            description: goal.description ?? null,
            complexity: goal.complexity ?? null,
            suggestedWeeks: goal.suggestedWeeks ?? null,
            chunking: goal.chunking ?? null,
        }, providerOpts);
        console.log("[suggest] llm.result", { hasParsed: Boolean(llmParsed), rawLen: rawText?.length ?? 0 });
        if (llmParsed) {
            // Validate explicitly again (defensive)
            const valid = llmService_1.LLMJourneySchema.parse(llmParsed);
            const signature = computeSuggestionSignature({
                id: goal.id,
                title: goal.title,
                description: goal.description ?? null,
                complexity: goal.complexity ?? null,
                suggestedWeeks: goal.suggestedWeeks ?? null,
                chunking: goal.chunking ?? null,
            }, sigOptions);
            // Persist suggestion
            await prisma_1.prisma.suggestion.create({
                data: { userId: uid, goalId: goal.id, provider: "openrouter", response: { rawText, parsed: valid, signature, goalSnapshot: { id: goal.id, title: goal.title, description: goal.description ?? null, complexity: goal.complexity ?? null, suggestedWeeks: goal.suggestedWeeks ?? null, chunking: goal.chunking ?? null }, options: sigOptions }, expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000) },
            });
            // Create journey + milestones in DB within a transaction
            const created = await prisma_1.prisma.$transaction(async (tx) => {
                const journey = await tx.journey.create({
                    data: {
                        goalId: goal.id,
                        title: valid.journeyTitle,
                        meta: { durationWeeks: valid.durationWeeks, chunking: valid.chunking },
                    },
                });
                // Create milestones first; store their ids to add dependencies
                const ids = [];
                for (const [i, m] of valid.milestones.entries()) {
                    const createdMs = await tx.milestone.create({
                        data: {
                            journeyId: journey.id,
                            title: m.title,
                            description: m.description ?? null,
                            orderIndex: i,
                            startWeek: m.startWeek,
                            endWeek: m.endWeek,
                            estimatedHours: m.estimatedHours ?? null,
                        },
                        select: { id: true },
                    });
                    ids.push(createdMs.id);
                }
                // Add dependencies (only indices within range and earlier milestones) in bulk
                const depRows = [];
                for (const [i, m] of valid.milestones.entries()) {
                    const deps = m.dependencies ?? [];
                    for (const d of deps) {
                        if (Number.isInteger(d) && d >= 0 && d < i) {
                            depRows.push({ milestoneId: ids[i], dependsOnId: ids[d] });
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
        const signature = computeSuggestionSignature({
            id: goal.id,
            title: goal.title,
            description: goal.description ?? null,
            complexity: goal.complexity ?? null,
            suggestedWeeks: goal.suggestedWeeks ?? null,
            chunking: goal.chunking ?? null,
        }, sigOptions);
        await prisma_1.prisma.suggestion.create({ data: { userId: uid, goalId: goal.id, provider: "openrouter", response: { rawText, signature, goalSnapshot: { id: goal.id, title: goal.title, description: goal.description ?? null, complexity: goal.complexity ?? null, suggestedWeeks: goal.suggestedWeeks ?? null, chunking: goal.chunking ?? null }, options: sigOptions }, expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000) } });
        console.warn("[suggest] llm.parse.miss -> fallback heuristic");
        await persistHeuristicOnce();
        return res.json({ ...heuristic, llmError: true });
    }
    catch (e) {
        // Persist failure meta
        await prisma_1.prisma.suggestion.create({
            data: { userId: uid, goalId: goal.id, provider: "openrouter", response: { error: String(e?.message || e) }, expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000) },
        });
        console.error("[suggest] llm.error", { message: String(e?.message || e) });
        await persistHeuristicOnce();
        return res.json({ ...heuristic, llmError: true });
    }
}
async function listSuggestionsForGoal(req, res) {
    const uid = userId(req);
    const { goalId } = req.params;
    const goal = await prisma_1.prisma.goal.findFirst({ where: { id: goalId, userId: uid } });
    if (!goal)
        return notFound(res, "Goal not found");
    const suggestions = await prisma_1.prisma.suggestion.findMany({
        where: { userId: uid, goalId: goal.id },
        orderBy: { createdAt: "desc" },
        select: {
            id: true, provider: true, response: true, createdAt: true, expiresAt: true,
        },
    });
    return res.json(suggestions);
}
//# sourceMappingURL=goal.controller.js.map