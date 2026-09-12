require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const connectDB = require("./config/db");
const bookingRoutes = require("./routes/bookingRoutes");
const userRoutes = require("./routes/userRoutes");
const tripRoutes = require("./routes/tripRoutes");
const routeRoutes = require("./routes/routeRoutes");
const authRoutes = require("./routes/authRoutes");
const mongoSanitize = require("express-mongo-sanitize");

connectDB();

const app = express();
app.use(helmet());

const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS
      .split(",")
      .map(origin => origin.trim())
  : [];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

app.use(express.json());

// Express v5 compatible NoSQL Sanitization Middleware
// Avoids mutating read-only req.query directly
app.use((req, res, next) => {
  if (req.body) {
    req.body = mongoSanitize.sanitize(req.body, { replaceWith: '_' });
  }
  if (req.params) {
    req.params = mongoSanitize.sanitize(req.params, { replaceWith: '_' });
  }
  next();
});

app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/users", userRoutes);
app.use("/api/trips", tripRoutes);
app.use("/api/routes", routeRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Backend is running successfully."
  });
});

// Explicit CORS Error Handler
app.use((err, req, res, next) => {
  if (err.message === "Not allowed by CORS") {
    return res.status(403).json({
      success: false,
      message: "CORS policy: Origin not allowed"
    });
  }
  next(err);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
