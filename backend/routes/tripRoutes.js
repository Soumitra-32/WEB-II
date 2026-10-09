const express = require("express");
const router = express.Router();
const { createTrip, getAllTrips, getTripById, updateTrip, deleteTrip, configureSeats } = require("../controllers/tripController");
const { protect, authorize } = require("../middleware/authMiddleware");
router.get("/", getAllTrips); router.get("/:id", getTripById);
router.post("/", protect, authorize("admin"), createTrip); router.put("/:id", protect, authorize("admin"), updateTrip); router.patch("/:id/seats", protect, authorize("admin"), configureSeats); router.delete("/:id", protect, authorize("admin"), deleteTrip);
module.exports = router;
