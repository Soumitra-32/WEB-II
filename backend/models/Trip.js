const mongoose = require("mongoose");
const seatSchema = new mongoose.Schema({
  number: { type: Number, required: true, min: 1 },
  status: { type: String, enum: ["available", "held", "booked", "blocked"], default: "available" }
}, { _id: false });
const tripSchema = new mongoose.Schema({
  bus: { type: mongoose.Schema.Types.ObjectId, ref: "Bus", required: true },
  route: { type: mongoose.Schema.Types.ObjectId, ref: "Route", required: true },
  departureAt: { type: Date, required: true },
  arrivalAt: { type: Date, required: true },
  fare: { type: Number, required: true, min: 0 },
  status: { type: String, enum: ["scheduled", "boarding", "completed", "cancelled"], default: "scheduled" },
  seats: { type: [seatSchema], default: [] }
}, { timestamps: true });
tripSchema.virtual("availableSeats").get(function () { return this.seats.filter((seat) => seat.status === "available").length; });
tripSchema.set("toJSON", { virtuals: true });
tripSchema.index({ departureAt: 1, status: 1 });
module.exports = mongoose.model("Trip", tripSchema);
