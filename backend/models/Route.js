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

module.exports = mongoose.model("Route", routeSchema);