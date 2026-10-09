const mongoose = require("mongoose");
const routeSchema = new mongoose.Schema({
  source: { type: String, required: true, trim: true, maxlength: 100 },
  destination: { type: String, required: true, trim: true, maxlength: 100 },
  via: { type: String, trim: true, maxlength: 160 },
  estimatedDurationMinutes: { type: Number, min: 1, max: 1440, default: 60 },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });
routeSchema.index({ source: 1, destination: 1 }, { unique: true });
module.exports = mongoose.model("Route", routeSchema);
