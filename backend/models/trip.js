const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema(
  {
    route: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Route",
      required: true
    },
    tripDate: {
      type: Date,
      required: true
    },
    departureTime: {
      type: String,
      required: true
    },
    availableSeats: {
      type: Number,
      required: true,
      min: 0
    },
    status: {
      type: String,
      enum: ["scheduled", "cancelled", "completed"],
      default: "scheduled"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Trip", tripSchema);