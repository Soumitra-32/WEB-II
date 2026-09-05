const express = require("express");
const router = express.Router();
const { createTrip, getAllTrips, getTripById, updateTrip, deleteTrip } = require("../controllers/tripController");
const { protect, authorize } = require("../middleware/authMiddleware");

router.post("/", protect, authorize("admin"), createTrip);
router.get("/", getAllTrips);
router.get("/:id", getTripById);
router.put("/:id", protect, authorize("admin"), updateTrip);
router.delete("/:id", protect, authorize("admin"), deleteTrip);

module.exports = router;