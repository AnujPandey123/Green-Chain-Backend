const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const shipmentRoutes = require("./routes/shipmentRoutes");
const path = require("path");
require("dotenv").config();

const app = express();

// Connect to MongoDB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api", shipmentRoutes);

// Serve Frontend
app.use(express.static(path.join(__dirname, "../public")));

// Handle React/HTML routing fallback (optional but recommended)
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// ✅ IMPORTANT: Use dynamic port for deployment
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

