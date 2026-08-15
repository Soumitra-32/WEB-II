require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/bookings", bookingRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Backend is running successfully."
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});