import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import jobRoutes from "./routes/jobs.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors()); // This allows requests from your React app
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);


// Test route
app.get("/", (req, res) => {
  res.send("✅ Skill-Match server is running!");
});

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/skillmatch";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    // CHANGE: Added '0.0.0.0' to ensure it accepts external connections
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
      console.log(`📡 Access from mobile using your IP: http://10.147.219.85:${PORT}`);
    });
  })
  .catch((error) => console.error("❌ MongoDB connection failed:", error.message));