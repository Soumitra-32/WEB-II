const Trip = require("../models/Trip");

exports.createTrip = async (req, res) => {
  try {
    const { route, tripDate, departureTime, availableSeats, status } = req.body;
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
    const trip = await Trip.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
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