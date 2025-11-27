require("dotenv").config(); // Load environment variables first

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth"); // Import your auth routes

const app = express();

// Middleware
app.use(express.json()); // Allows app to handle JSON requests
app.use(cors()); // Allows frontend to talk to backend

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Routes
app.use("/api/auth", authRoutes); // Use the auth routes for /api/auth path

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
