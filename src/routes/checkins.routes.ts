import { Router } from "express";
import { requireAuth } from "../middleware/auth.middleware";
import * as ctrl from "../controllers/checkin.controller";

const router = Router();

// Schedules
router.post("/checkins/schedules", requireAuth, ctrl.createSchedule);
router.get("/checkins/schedules", requireAuth, ctrl.listSchedules);
router.get("/checkins/schedules/:id", requireAuth, ctrl.getSchedule);
router.delete("/checkins/schedules/:id", requireAuth, ctrl.deleteSchedule);

// Entries
router.post("/checkins/schedules/:id/entries", requireAuth, ctrl.createEntry);
router.get("/checkins/entries", requireAuth, ctrl.listEntries);

export default router;
