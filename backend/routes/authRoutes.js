const express = require("express");

const router = express.Router();

const { register, login, getMe } = require("../controllers/authController");

const { protect } = require("../middleware/authMiddleware");

const { authLimiter, generalLimiter } = require("../middleware/rateLimitMiddleware");

router.post("/register", generalLimiter, register);

router.post("/login", authLimiter, login);

router.get("/me", protect, getMe);

module.exports = router;