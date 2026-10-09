const express = require("express");
const router = express.Router();
const { protect, authorize } = require("../middleware/authMiddleware");
const { createBus, getAllBuses, getBusById, updateBus, deactivateBus } = require("../controllers/busController");

router.get("/", getAllBuses);
router.get("/:id", getBusById);
router.post("/", protect, authorize("admin"), createBus);
router.put("/:id", protect, authorize("admin"), updateBus);
router.patch("/:id/deactivate", protect, authorize("admin"), deactivateBus);
module.exports = router;
