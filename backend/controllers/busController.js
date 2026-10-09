const Bus = require("../models/Bus");

exports.createBus = async (req, res) => {
  try {
    const bus = await Bus.create(req.body);
    res.status(201).json({ success: true, message: "Bus created successfully", data: bus });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.getAllBuses = async (req, res) => {
  try {
    const buses = await Bus.find().sort({ createdAt: -1 });
    res.json({ success: true, count: buses.length, data: buses });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getBusById = async (req, res) => {
  try {
    const bus = await Bus.findById(req.params.id);
    if (!bus) return res.status(404).json({ success: false, message: "Bus not found" });
    res.json({ success: true, data: bus });
  } catch (error) {
    res.status(400).json({ success: false, message: "Invalid bus ID" });
  }
};

exports.updateBus = async (req, res) => {
  try {
    const bus = await Bus.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!bus) return res.status(404).json({ success: false, message: "Bus not found" });
    res.json({ success: true, message: "Bus updated successfully", data: bus });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.deactivateBus = async (req, res) => {
  try {
    const bus = await Bus.findByIdAndUpdate(req.params.id, { isActive: false, deactivatedAt: new Date() }, { new: true });
    if (!bus) return res.status(404).json({ success: false, message: "Bus not found" });
    res.json({ success: true, message: "Bus deactivated successfully", data: bus });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
