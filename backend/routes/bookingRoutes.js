const express = require("express");

const router = express.Router();

const {
  createBooking,
  getAllBookings,
  getBookingById,
  updateBooking,
  deleteBooking
} = require("../controllers/bookingController");

const { protect } = require("../middleware/authMiddleware");


// CREATE
router.post("/", protect, createBooking);


// READ ALL
router.get("/", getAllBookings);


// READ BY ID
router.get("/:id", getBookingById);


// UPDATE
router.put("/:id", protect, updateBooking);


// DELETE
router.delete("/:id", protect, deleteBooking);


module.exports = router;