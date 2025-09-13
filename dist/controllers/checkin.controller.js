"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEntrySchema = exports.createScheduleSchema = void 0;
exports.createSchedule = createSchedule;
exports.listSchedules = listSchedules;
exports.getSchedule = getSchedule;
exports.deleteSchedule = deleteSchedule;
exports.createEntry = createEntry;
exports.listEntries = listEntries;
const zod_1 = require("zod");
const svc = __importStar(require("../services/checkinService"));
function uid(req) {
    return req.userId;
}
function firstIssue(err) {
    const i = err.issues?.[0];
    return i?.message ?? "Invalid request";
}
exports.createScheduleSchema = zod_1.z.object({
    goalId: zod_1.z.string().uuid().optional(),
    milestoneId: zod_1.z.string().uuid().optional(),
    frequency: zod_1.z.enum(["daily", "weekly", "biweekly"]),
    startDate: zod_1.z.string().datetime().optional(),
});
async function createSchedule(req, res) {
    const parsed = exports.createScheduleSchema.safeParse(req.body);
    if (!parsed.success)
        return res.status(400).json({ error: firstIssue(parsed.error) });
    try {
        const schedule = await svc.createSchedule({
            userId: uid(req),
            goalId: parsed.data.goalId ?? null,
            milestoneId: parsed.data.milestoneId ?? null,
            frequency: parsed.data.frequency,
            startDate: parsed.data.startDate ? new Date(parsed.data.startDate) : null,
        });
        return res.status(201).json({ schedule });
    }
    catch (e) {
        const status = typeof e?.status === "number" ? e.status : 500;
        return res.status(status).json({ error: e?.message ?? "Failed to create schedule" });
    }
}
async function listSchedules(req, res) {
    const qp = zod_1.z.object({ goalId: zod_1.z.string().uuid().optional() }).safeParse(req.query);
    if (!qp.success)
        return res.status(400).json({ error: firstIssue(qp.error) });
    try {
        const schedules = await svc.listSchedules(uid(req), qp.data.goalId ? { goalId: qp.data.goalId } : undefined);
        return res.json(schedules);
    }
    catch (e) {
        const status = typeof e?.status === "number" ? e.status : 500;
        return res.status(status).json({ error: e?.message ?? "Failed to list schedules" });
    }
}
async function getSchedule(req, res) {
    const params = zod_1.z.object({ id: zod_1.z.string().uuid() }).safeParse(req.params);
    if (!params.success)
        return res.status(400).json({ error: firstIssue(params.error) });
    try {
        const schedule = await svc.getScheduleWithEntries(uid(req), params.data.id);
        return res.json(schedule);
    }
    catch (e) {
        const status = typeof e?.status === "number" ? e.status : 500;
        return res.status(status).json({ error: e?.message ?? "Failed to fetch schedule" });
    }
}
async function deleteSchedule(req, res) {
    const params = zod_1.z.object({ id: zod_1.z.string().uuid() }).safeParse(req.params);
    if (!params.success)
        return res.status(400).json({ error: firstIssue(params.error) });
    try {
        await svc.deleteSchedule(uid(req), params.data.id);
        return res.json({ ok: true });
    }
    catch (e) {
        const status = typeof e?.status === "number" ? e.status : 500;
        return res.status(status).json({ error: e?.message ?? "Failed to delete schedule" });
    }
}
exports.createEntrySchema = zod_1.z.object({
    answers: zod_1.z.any().optional(),
    notes: zod_1.z.string().max(2000).optional(),
    progress: zod_1.z.number().int().min(0).max(100).optional(),
    completedAt: zod_1.z.string().datetime().optional(),
});
async function createEntry(req, res) {
    const params = zod_1.z.object({ id: zod_1.z.string().uuid() }).safeParse(req.params);
    if (!params.success)
        return res.status(400).json({ error: firstIssue(params.error) });
    const parsed = exports.createEntrySchema.safeParse(req.body);
    if (!parsed.success)
        return res.status(400).json({ error: firstIssue(parsed.error) });
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
    }
    catch (e) {
        const status = typeof e?.status === "number" ? e.status : 500;
        return res.status(status).json({ error: e?.message ?? "Failed to create entry" });
    }
}
async function listEntries(req, res) {
    const qp = zod_1.z.object({
        goalId: zod_1.z.string().uuid().optional(),
        limit: zod_1.z.coerce.number().int().min(1).max(100).optional(),
    }).safeParse(req.query);
    if (!qp.success)
        return res.status(400).json({ error: firstIssue(qp.error) });
    try {
        const opts = {};
        if (qp.data.goalId)
            opts.goalId = qp.data.goalId;
        if (typeof qp.data.limit === "number")
            opts.limit = qp.data.limit;
        const entries = await svc.listEntries(uid(req), opts);
        return res.json(entries);
    }
    catch (e) {
        const status = typeof e?.status === "number" ? e.status : 500;
        return res.status(status).json({ error: e?.message ?? "Failed to list entries" });
    }
}
//# sourceMappingURL=checkin.controller.js.map