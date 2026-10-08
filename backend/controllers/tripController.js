const Trip = require("../models/Trip");
const Route = require("../models/Route");
const mongoose = require("mongoose");

exports.createTrip = async (req, res) => {
  try {
    const { route, tripDate, departureTime, availableSeats, status } = req.body;

    // Input validation
    if (!route || !mongoose.Types.ObjectId.isValid(route)) {
      return res.status(400).json({
        success: false,
        message: "route is required and must be a valid ObjectId"
      });
    }

    if (!tripDate) {
      return res.status(400).json({
        success: false,
        message: "tripDate is required"
      });
    }

    if (!departureTime || typeof departureTime !== "string") {
      return res.status(400).json({
        success: false,
        message: "departureTime is required and must be a string"
      });
    }

    if (availableSeats === undefined || typeof availableSeats !== "number" || availableSeats < 0) {
      return res.status(400).json({
        success: false,
        message: "availableSeats is required and must be a non-negative number"
      });
    }

    // Verify route exists
    const routeDoc = await Route.findById(route);
    if (!routeDoc) {
      return res.status(400).json({
        success: false,
        message: "Referenced route does not exist"
      });
    }

    const trip = await Trip.create({ route, tripDate, departureTime, availableSeats, status });
    res.status(201).json({ success: true, message: "Trip created successfully", data: trip });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.getAllTrips = async (req, res) => {
  try {
    const trips = await Trip.find().populate("route");
    res.status(200).json({ success: true, count: trips.length, data: trips });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getTripById = async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.id).populate("route");
    if (!trip) {
      return res.status(404).json({ success: false, message: "Trip not found" });
    }
    res.status(200).json({ success: true, data: trip });
  } catch (error) {
    res.status(400).json({ success: false, message: "Invalid trip ID" });
  }
};

exports.updateTrip = async (req, res) => {
  try {
  const {
  route,
  tripDate,
  departureTime,
  availableSeats,
  status
} = req.body; 
const trip = await Trip.findByIdAndUpdate(
  req.params.id,
  {
    route,
    tripDate,
    departureTime,
    availableSeats,
    status
  },
  {
    new: true,
    runValidators: true
  }
);
    if (!trip) {
      return res.status(404).json({ success: false, message: "Trip not found" });
    }
    res.status(200).json({ success: true, message: "Trip updated successfully", data: trip });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.deleteTrip = async (req, res) => {
  try {
    const trip = await Trip.findByIdAndDelete(req.params.id);
    if (!trip) {
      return res.status(404).json({ success: false, message: "Trip not found" });
    }
    res.status(200).json({ success: true, message: "Trip deleted successfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: "Invalid trip ID" });
  }
};