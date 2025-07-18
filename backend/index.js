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
    "https://authentication-gaur-tau.vercel.app",  // ✅ HTTPS ke sath
    "http://localhost:5173"                         // ✅ For local testing
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
