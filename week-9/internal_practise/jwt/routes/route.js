const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

let users = [];


// 🔹 Register
router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  users.push({ username, password: hashedPassword });

  res.json({ message: "Registration successful" });
});


// 🔹 Login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username);

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  const matched = await bcrypt.compare(password, user.password);

  if (!matched) {
    return res.status(400).json({ message: "Incorrect credentials" });
  }

  const token = jwt.sign(
    { username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );

  res.json({
    message: "Login successful",
    token
  });
});

module.exports = router;