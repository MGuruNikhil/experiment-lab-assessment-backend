"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = require("../middleware/auth.middleware");
const analytics_controller_1 = require("../controllers/analytics.controller");
const router = (0, express_1.Router)();
router.get("/analytics", auth_middleware_1.requireAuth, analytics_controller_1.getAnalytics);
exports.default = router;
//# sourceMappingURL=analytics.routes.js.map