import { Router } from "express";
import { requireAuth } from "../middleware/auth.middleware";
import * as goalController from "../controllers/goal.controller";

const router = Router();

router.post("/goals", requireAuth, goalController.createGoal);
router.get("/goals", requireAuth, goalController.listGoals);
router.get("/goals/:goalId", requireAuth, goalController.getGoalById);
router.put("/goals/:goalId", requireAuth, goalController.updateGoal);
router.delete("/goals/:goalId", requireAuth, goalController.deleteGoal);

router.post("/goals/:goalId/journeys", requireAuth, goalController.createJourney);
router.post("/journeys/:journeyId/milestones", requireAuth, goalController.createMilestone);
router.put("/milestones/:milestoneId", requireAuth, goalController.updateMilestone);
router.delete("/milestones/:milestoneId", requireAuth, goalController.deleteMilestone);
router.post("/milestones/:milestoneId/dependencies", requireAuth, goalController.addMilestoneDependency);
router.post("/goals/:goalId/suggest", requireAuth, goalController.suggestForGoal);
router.get("/goals/:goalId/suggestions", requireAuth, goalController.listSuggestionsForGoal);

export default router;


