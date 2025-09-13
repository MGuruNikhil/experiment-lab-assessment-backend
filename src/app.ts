import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes";
import goalRoutes from "./routes/goal.routes";
import analyticsRoutes from "./routes/analytics.routes";
import tutorRoutes from "./routes/tutor.routes";
import checkinsRoutes from "./routes/checkins.routes";
import { errorHandler, notFound } from "./middleware/error.middleware";

dotenv.config();

const app = express();

// CORS configuration
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:3000",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api", goalRoutes);
app.use("/api", analyticsRoutes);
app.use("/api", tutorRoutes);
app.use("/api", checkinsRoutes);

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

export default app;
// 404 and error handlers
app.use(notFound);
app.use(errorHandler);


