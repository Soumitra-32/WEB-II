// @ts-nocheck
const rateLimit = require("express-rate-limit");

// Authentication rate limiter (for login attempts)
const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 250,
    message: {
        success: false,
        message: "Too many authentication attempts. Please try again after 15 minutes."
    },
    standardHeaders: true,
    legacyHeaders: false
});

// Booking creation rate limiter
const bookingLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 50,
    message: {
        success: false,
        message: "Too many booking attempts. Please try again after 15 minutes."
    },
    standardHeaders: true,
    legacyHeaders: false
});

// General API rate limiter (for all other routes)
const generalLimiter = rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 500,
    message: {
        success: false,
        message: "Too many requests. Please try again after 1 hour."
    },
    standardHeaders: true,
    legacyHeaders: false
});

module.exports = {
    authLimiter,
    bookingLimiter,
    generalLimiter
};
