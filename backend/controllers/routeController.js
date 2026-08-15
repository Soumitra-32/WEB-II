const Route = require("../models/Route");

exports.createRoute = async (req, res) => {
  try {
    const { origin, destination, departureTime, days, totalSeats } = req.body;
    const route = await Route.create({ origin, destination, departureTime, days, totalSeats });
    res.status(201).json({ success: true, message: "Route created successfully", data: route });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.getAllRoutes = async (req, res) => {
  try {
    const routes = await Route.find();
    res.status(200).json({ success: true, count: routes.length, data: routes });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getRouteById = async (req, res) => {
  try {
    const route = await Route.findById(req.params.id);
    if (!route) {
      return res.status(404).json({ success: false, message: "Route not found" });
    }
    res.status(200).json({ success: true, data: route });
  } catch (error) {
    res.status(400).json({ success: false, message: "Invalid route ID" });
  }
};

exports.updateRoute = async (req, res) => {
  try {
    const route = await Route.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!route) {
      return res.status(404).json({ success: false, message: "Route not found" });
    }
    res.status(200).json({ success: true, message: "Route updated successfully", data: route });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.deleteRoute = async (req, res) => {
  try {
    const route = await Route.findByIdAndDelete(req.params.id);
    if (!route) {
      return res.status(404).json({ success: false, message: "Route not found" });
    }
    res.status(200).json({ success: true, message: "Route deleted successfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: "Invalid route ID" });
  }
};