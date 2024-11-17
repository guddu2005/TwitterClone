const express = require("express");

const { protectRoute } = require("../middleware/protectRoute"); // Ensure correct import name
const { getUserProfile, getSuggestedUsers, followUnfollowUser  , updateProfile} = require("../controllers/user.controller");

const router = express.Router();

router.get("/profile/:username", protectRoute, getUserProfile);
router.get("/suggested", protectRoute, getSuggestedUsers);
router.post("/follow/:id", protectRoute, followUnfollowUser);
router.post("/update", protectRoute, updateProfile);

module.exports = router; // Correct way to export router
