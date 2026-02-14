const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const shipmentRoutes = require("./routes/shipmentRoutes");
const path = require("path");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = express();

// Connect to MongoDB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api", shipmentRoutes);

// Serve Frontend (if hosting static build)
app.use(express.static(path.join(__dirname, "../public")));

// 404 fallback (Safe for Express 4 & 5)
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Dynamic Port (Required for Render)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
