import { Router } from "express";
import { requireAuth } from "../middleware/auth.middleware";
import * as controller from "../controllers/analyticsController";

const router = Router();

router.get("/analytics/overview", requireAuth, controller.overview);
router.get("/analytics/goal/:goalId", requireAuth, controller.goal);

export default router;
