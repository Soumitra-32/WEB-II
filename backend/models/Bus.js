const mongoose = require("mongoose");

const busSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 80 },
    registrationNumber: { type: String, required: true, unique: true, uppercase: true, trim: true },
    operator: { type: String, default: "University Transport", trim: true },
    seatCount: { type: Number, required: true, min: 1, max: 120 },
    seatLayout: {
      columns: { type: Number, required: true, min: 1, max: 5, default: 4 },
      aisleAfter: { type: Number, min: 1, max: 4, default: 2 }
    },
    isActive: { type: Boolean, default: true },
    deactivatedAt: { type: Date, default: null }
  },
  { timestamps: true }
);

busSchema.index({ isActive: 1 });
module.exports = mongoose.model("Bus", busSchema);
