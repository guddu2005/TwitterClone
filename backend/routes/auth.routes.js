const express = require("express");
const {signup,logout ,login ,getMe} = require("../controllers/auth.controller");
const router = express.Router();
const {protectRoute}=require('../middleware/protectRoute')

router.post("/signup", signup);
router.post("/login", login);

router.post("/logout", logout);
// router.get("/me", protectRoute, getMe);

module.exports = router;
