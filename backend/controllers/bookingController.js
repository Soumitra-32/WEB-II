const Booking = require("../models/Booking");


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

    const booking = await Booking.create({
      bookingReference,
      tripId,
      student,
      seatNumber
    });

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
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      req.body,
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
