import { Router } from "express";
import { requireAuth } from "../middleware/auth.middleware";
import { getAnalytics } from "../controllers/analytics.controller";
import * as newCtrl from "../controllers/analyticsController";

const router = Router();

router.get("/analytics", requireAuth, getAnalytics);
router.get("/analytics/overview", requireAuth, newCtrl.overview);
router.get("/analytics/goal/:goalId", requireAuth, newCtrl.goal);

export default router;
