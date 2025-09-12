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
const express_1 = require("express");
const auth_middleware_1 = require("../middleware/auth.middleware");
const goalController = __importStar(require("../controllers/goal.controller"));
const router = (0, express_1.Router)();
router.post("/goals", auth_middleware_1.requireAuth, goalController.createGoal);
router.get("/goals", auth_middleware_1.requireAuth, goalController.listGoals);
router.get("/goals/:goalId", auth_middleware_1.requireAuth, goalController.getGoalById);
router.put("/goals/:goalId", auth_middleware_1.requireAuth, goalController.updateGoal);
router.delete("/goals/:goalId", auth_middleware_1.requireAuth, goalController.deleteGoal);
router.post("/goals/:goalId/journeys", auth_middleware_1.requireAuth, goalController.createJourney);
router.post("/journeys/:journeyId/milestones", auth_middleware_1.requireAuth, goalController.createMilestone);
router.put("/milestones/:milestoneId", auth_middleware_1.requireAuth, goalController.updateMilestone);
router.delete("/milestones/:milestoneId", auth_middleware_1.requireAuth, goalController.deleteMilestone);
router.post("/milestones/:milestoneId/dependencies", auth_middleware_1.requireAuth, goalController.addMilestoneDependency);
router.post("/goals/:goalId/suggest", auth_middleware_1.requireAuth, goalController.suggestForGoal);
exports.default = router;
//# sourceMappingURL=goal.routes.js.map