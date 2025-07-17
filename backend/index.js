import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const app = express();

// ✅ CORS Setup (allow frontend)
const allowedOrigins = [
  "authentication-gaur-tau.vercel.app",  // 👈 Replace with your live Vercel frontend URL
//   "http://localhost:5173"                      // ✅ Keep for local testing (Vite dev)
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

app.use(express.json());

// ✅ Routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
