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
exports.overview = overview;
exports.goal = goal;
const svc = __importStar(require("../services/analyticsService"));
const zod_1 = require("zod");
function uid(req) { return req.userId; }
async function overview(req, res) {
    const data = await svc.getOverview(uid(req));
    return res.json(data);
}
const goalParam = zod_1.z.object({ goalId: zod_1.z.string().uuid() });
async function goal(req, res) {
    const parsed = goalParam.safeParse(req.params);
    if (!parsed.success)
        return res.status(400).json({ error: parsed.error.issues?.[0]?.message || "Invalid goalId" });
    const data = await svc.getGoalDetails(uid(req), parsed.data.goalId);
    if (!data)
        return res.status(404).json({ error: "Not found" });
    return res.json(data);
}
//# sourceMappingURL=analyticsController.js.map