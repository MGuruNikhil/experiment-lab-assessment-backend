"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET ?? "";
const requireAuth = (req, res, next) => {
    try {
        const auth = req.headers.authorization ?? "";
        const [scheme, token] = auth.split(" ");
        if (scheme !== "Bearer" || !token) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        if (!JWT_SECRET) {
            return res.status(500).json({ error: "JWT secret not configured" });
        }
        const payload = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        if (!payload?.sub) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        req.userId = payload.sub;
        return next();
    }
    catch (_err) {
        return res.status(401).json({ error: "Unauthorized" });
    }
};
exports.requireAuth = requireAuth;
//# sourceMappingURL=auth.middleware.js.map