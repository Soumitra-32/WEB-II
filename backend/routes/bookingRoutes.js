const express = require("express");

const router = express.Router();

const {
  createBooking,
  getAllBookings,
  getBookingById,
  updateBooking,
  deleteBooking
} = require("../controllers/bookingController");


// CREATE
router.post("/", createBooking);


// READ ALL
router.get("/", getAllBookings);


// READ BY ID
router.get("/:id", getBookingById);


// UPDATE
router.put("/:id", updateBooking);


// DELETE
router.delete("/:id", deleteBooking);


module.exports = router;
