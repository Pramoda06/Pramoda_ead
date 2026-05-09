const express = require("express");
const dotenv = require("dotenv");

const routes = require("./routes/route");
const verifyAuth = require("./middleware/authentication");

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use("/api/route", routes);

// Test route
app.get("/", (req, res) => {
  res.json({ message: "JWT is running" });
});

// Protected route
app.get("/api/route/protected", verifyAuth, (req, res) => {
  res.json({
    message: "Protected data accessed",
    user: req.user
  });
});

// 404
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});