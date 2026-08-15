const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    bookingReference: {
      type: String,
      required: true,
      unique: true,
      immutable: true
    },

    tripId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Trip",
      required: true,
      immutable: true
    },

    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      immutable: true
    },

    seatNumber: {
      type: Number,
      required: true,
      min: 1
    },

    status: {
      type: String,
      enum: ["confirmed", "cancelled"],
      default: "confirmed"
    },

    bookedAt: {
      type: Date,
      default: Date.now
    },

    cancelledAt: {
      type: Date,
      default: null
    },

    cancelledBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    cancellationReason: {
      type: String,
      trim: true,
      maxlength: 300
    }
  },
  {
    timestamps: true,
    optimisticConcurrency: true
  }
);


// Prevent one student from having two confirmed
// bookings for the same trip
bookingSchema.index(
  { tripId: 1, student: 1 },
  {
    unique: true,
    partialFilterExpression: {
      status: "confirmed"
    }
  }
);


// Prevent two students from booking the same seat
bookingSchema.index(
  { tripId: 1, seatNumber: 1 },
  {
    unique: true,
    partialFilterExpression: {
      status: "confirmed"
    }
  }
);


module.exports = mongoose.model("Booking", bookingSchema);
