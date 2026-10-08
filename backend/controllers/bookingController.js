const Booking = require("../models/Booking");
const Trip = require("../models/Trip");
const User = require("../models/User");
const mongoose = require("mongoose");


// ==========================================
// CREATE BOOKING
// POST /api/bookings
// ==========================================
exports.createBooking = async (req, res) => {
  try {
    const {
      bookingReference,
      tripId,
      student,
      seatNumber
    } = req.body;

    // Input validation
    if (!bookingReference || typeof bookingReference !== "string") {
      return res.status(400).json({
        success: false,
        message: "bookingReference is required and must be a string"
      });
    }

    if (!tripId || !mongoose.Types.ObjectId.isValid(tripId)) {
      return res.status(400).json({
        success: false,
        message: "tripId is required and must be a valid ObjectId"
      });
    }

    if (!student || !mongoose.Types.ObjectId.isValid(student)) {
      return res.status(400).json({
        success: false,
        message: "student is required and must be a valid ObjectId"
      });
    }

    if (seatNumber === undefined || typeof seatNumber !== "number" || seatNumber < 1) {
      return res.status(400).json({
        success: false,
        message: "seatNumber is required and must be a positive number"
      });
    }

    // Verify trip exists
    const trip = await Trip.findById(tripId);
    if (!trip) {
      return res.status(400).json({
        success: false,
        message: "Referenced trip does not exist"
      });
    }

    // Verify student exists
    const studentUser = await User.findById(student);
    if (!studentUser) {
      return res.status(400).json({
        success: false,
        message: "Referenced student does not exist"
      });
    }

    // Verify seat availability
    const existingBooking = await Booking.findOne({
      tripId,
      seatNumber,
      status: "confirmed"
    });
    if (existingBooking) {
      return res.status(400).json({
        success: false,
        message: `Seat ${seatNumber} is already booked on this trip`
      });
    }

    // Verify trip has available seats
    if (trip.availableSeats <= 0) {
      return res.status(400).json({
        success: false,
        message: "No available seats on this trip"
      });
    }

    const booking = await Booking.create({
      bookingReference,
      tripId,
      student,
      seatNumber
    });

    // Decrement available seats on the trip
    trip.availableSeats -= 1;
    await trip.save();

    res.status(201).json({
      success: true,
      message: "Booking created successfully",
      data: booking
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};


// ==========================================
// GET ALL BOOKINGS
// GET /api/bookings
// ==========================================
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("student", "name studentId universityEmail")
      .populate("tripId");

    res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


// ==========================================
// GET BOOKING BY ID
// GET /api/bookings/:id
// ==========================================
exports.getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id)
      .populate("student", "name studentId universityEmail")
      .populate("tripId");

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found"
      });
    }

    res.status(200).json({
      success: true,
      data: booking
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Invalid booking ID"
    });
  }
};


// ==========================================
// UPDATE BOOKING
// PUT /api/bookings/:id
// ==========================================
exports.updateBooking = async (req, res) => {
  try {
    const {
  bookingReference,
  tripId,
  student,
  seatNumber
} = req.body; 
const booking = await Booking.findByIdAndUpdate(
  req.params.id,
  {
    bookingReference,
    tripId,
    student,
    seatNumber
  },
  {
    new: true,
    runValidators: true
  }
);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Booking updated successfully",
      data: booking
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};


// ==========================================
// DELETE BOOKING
// DELETE /api/bookings/:id
// ==========================================
exports.deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(
      req.params.id
    );

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Booking deleted successfully"
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Invalid booking ID"
    });
  }
};
