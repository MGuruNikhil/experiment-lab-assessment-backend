"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const goal_routes_1 = __importDefault(require("./routes/goal.routes"));
const analytics_routes_1 = __importDefault(require("./routes/analytics.routes"));
const tutor_routes_1 = __importDefault(require("./routes/tutor.routes"));
const checkins_routes_1 = __importDefault(require("./routes/checkins.routes"));
const error_middleware_1 = require("./middleware/error.middleware");
dotenv_1.default.config();
const app = (0, express_1.default)();
// CORS configuration
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(express_1.default.json());
app.use("/api/auth", auth_routes_1.default);
app.use("/api", goal_routes_1.default);
app.use("/api", analytics_routes_1.default);
app.use("/api", tutor_routes_1.default);
app.use("/api", checkins_routes_1.default);
app.get("/health", (_req, res) => {
    res.json({ ok: true });
});
exports.default = app;
// 404 and error handlers
app.use(error_middleware_1.notFound);
app.use(error_middleware_1.errorHandler);
//# sourceMappingURL=app.js.map