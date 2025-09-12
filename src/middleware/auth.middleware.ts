import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET ?? "";

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const auth = req.headers.authorization ?? "";
    const [scheme, token] = auth.split(" ");
    if (scheme !== "Bearer" || !token) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    if (!JWT_SECRET) {
      return res.status(500).json({ error: "JWT secret not configured" });
    }
    const payload = jwt.verify(token, JWT_SECRET) as { sub?: string };
    if (!payload?.sub) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    (req as any).userId = payload.sub;
    return next();
  } catch (_err) {
    return res.status(401).json({ error: "Unauthorized" });
  }
};


