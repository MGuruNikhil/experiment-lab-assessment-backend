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
exports.createSummary = createSummary;
exports.getSummary = getSummary;
const zod_1 = require("zod");
const svc = __importStar(require("../services/tutorSummaryService"));
function uid(req) { return req.userId; }
function firstIssueMessage(error) { const f = error.issues?.[0]; return f?.message ?? "Invalid request"; }
const sessionIdParam = zod_1.z.object({ sessionId: zod_1.z.string().uuid() });
const postBody = zod_1.z.object({ force: zod_1.z.boolean().optional() });
async function createSummary(req, res) {
    const params = sessionIdParam.safeParse(req.params);
    if (!params.success)
        return res.status(400).json({ error: firstIssueMessage(params.error) });
    const parsed = postBody.safeParse(req.body ?? {});
    if (!parsed.success)
        return res.status(400).json({ error: firstIssueMessage(parsed.error) });
    try {
        const opts = {};
        if (typeof parsed.data.force === "boolean")
            opts.force = parsed.data.force;
        const r = await svc.generateAndStoreSummary(uid(req), params.data.sessionId, opts);
        const status = r.cached ? 200 : 201;
        return res.status(status).json({ summary: r.summary, cached: r.cached });
    }
    catch (e) {
        if (e?.status === 429)
            return res.status(429).json({ error: "rate_limited", retryAfter: e?.detail?.retryAfter });
        if (e?.status === 502)
            return res.status(502).json({ error: "summary_failed" });
        const status = typeof e?.status === "number" ? e.status : 500;
        return res.status(status).json({ error: e?.message || "Failed to generate summary" });
    }
}
async function getSummary(req, res) {
    const params = sessionIdParam.safeParse(req.params);
    if (!params.success)
        return res.status(400).json({ error: firstIssueMessage(params.error) });
    const found = await svc.getSummary(uid(req), params.data.sessionId);
    if (!found)
        return res.status(404).json({ error: "Not found" });
    return res.json({ summary: found });
}
//# sourceMappingURL=tutorSummary.controller.js.map