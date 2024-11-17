const { getNotifications, deleteNotifications } = require("../controllers/notification.controller");
const express = require("express");
const { protectRoute } = require("../middleware/protectRoute");

const router = express.Router();

// Define routes
router.get("/", protectRoute, getNotifications);
router.delete("/", protectRoute, deleteNotifications);

module.exports = router; // Corrected export
