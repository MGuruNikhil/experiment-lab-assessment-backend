import { Router } from "express";
import { requireAuth } from "../middleware/auth.middleware";
import * as tutor from "../controllers/tutor.controller";

const router = Router();

// Sessions
router.post("/tutor/sessions", requireAuth, tutor.createSession);
router.get("/tutor/sessions", requireAuth, tutor.listSessions);

// Messages in a session
router.get("/tutor/sessions/:sessionId/messages", requireAuth, tutor.listMessages);
router.post("/tutor/sessions/:sessionId/message", requireAuth, tutor.sendMessage);

// Close session
router.post("/tutor/sessions/:sessionId/close", requireAuth, tutor.closeSession);

export default router;
