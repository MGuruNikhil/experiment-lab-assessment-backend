"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.me = exports.logout = exports.login = exports.register = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma_1 = require("../lib/prisma");
const JWT_SECRET = process.env.JWT_SECRET ?? "";
const register = async (req, res) => {
    try {
        const { name, email, password } = req.body ?? {};
        if (!name || !email || !password) {
            return res.status(400).json({ message: "name, email and password are required" });
        }
        const existing = await prisma_1.prisma.user.findUnique({ where: { email } });
        if (existing) {
            return res.status(400).json({ message: "Email already in use" });
        }
        const hashed = await bcrypt_1.default.hash(password, 10);
        const user = await prisma_1.prisma.user.create({
            data: { name, email, password: hashed },
            select: { id: true, name: true, email: true, createdAt: true, updatedAt: true },
        });
        return res.status(201).json(user);
    }
    catch (err) {
        return res.status(500).json({ message: "Internal server error" });
    }
};
exports.register = register;
const login = async (req, res) => {
    try {
        const { email, password } = req.body ?? {};
        if (!email || !password) {
            return res.status(400).json({ message: "email and password are required" });
        }
        const user = await prisma_1.prisma.user.findUnique({ where: { email } });
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        const ok = await bcrypt_1.default.compare(password, user.password);
        if (!ok) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        if (!JWT_SECRET) {
            return res.status(500).json({ message: "JWT secret not configured" });
        }
        const token = jsonwebtoken_1.default.sign({ sub: user.id }, JWT_SECRET, { expiresIn: "1h" });
        return res.json({ accessToken: token });
    }
    catch (err) {
        return res.status(500).json({ message: "Internal server error" });
    }
};
exports.login = login;
const logout = async (_req, res) => {
    // Client-side should discard token. No server state to invalidate for simple JWTs.
    return res.json({ message: "Logged out" });
};
exports.logout = logout;
const me = async (req, res) => {
    try {
        const userId = req.userId;
        if (!userId) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const user = await prisma_1.prisma.user.findUnique({
            where: { id: userId },
            select: { id: true, name: true, email: true, createdAt: true, updatedAt: true },
        });
        if (!user) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        return res.json(user);
    }
    catch (err) {
        return res.status(500).json({ message: "Internal server error" });
    }
};
exports.me = me;
//# sourceMappingURL=auth.controller.js.map