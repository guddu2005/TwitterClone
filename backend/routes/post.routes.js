const express = require("express");
const { protectRoute } = require("../middleware/protectRoute");

const { 
    createPost, 
    deletePost, 
    commentOnPost, 
    likeUnlikePost, 
    getAllPosts, 
    getFollowingPosts, 
    getLikedPosts,
    getUserPosts 
} = require("../controllers/post.controller");

const router = express.Router();

// Route definitions
router.get("/all", protectRoute, getAllPosts);
router.get("/following", protectRoute, getFollowingPosts);
router.get("/likes/:id", protectRoute, getLikedPosts);
router.get("/user/:username", protectRoute, getUserPosts);
router.post("/create", protectRoute, createPost);
router.post("/like/:id", protectRoute, likeUnlikePost);
router.post("/comment/:id", protectRoute, commentOnPost);
router.delete("/:id", protectRoute, deletePost);

// Corrected export
module.exports = router;
