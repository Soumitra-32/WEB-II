const mongoose = require("mongoose");

const routeSchema = new mongoose.Schema(
    {
        origin: {
            type: String,
            required: true,
            trim: true
        },

        destination: {
            type: String,
            required: true,
            trim: true
        },

        departureTime: {
            type: String,
            required: true
        },

        days: {
            type: [String],
            required: true
        },

        totalSeats: {
            type: Number,
            required: true,
            min: 1
        }
    },
    {
        timestamps: true
    }
);

// Unique constraint - no two identical routes
routeSchema.index(
  { origin: 1, destination: 1, departureTime: 1 },
  { unique: true }
);

// Indexes for frequently queried fields
routeSchema.index({ origin: 1 });
routeSchema.index({ destination: 1 });

module.exports = mongoose.model("Route", routeSchema);