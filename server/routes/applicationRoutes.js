const express = require("express");
const router = express.Router();

const {
    applyJob,
    getMyApplications,
    getAllApplications,
    updateStatus
} = require("../controllers/applicationController");

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

// Student
router.post("/", authMiddleware, applyJob);
router.get("/my", authMiddleware, getMyApplications);

// Admin
router.get("/", authMiddleware, adminMiddleware, getAllApplications);
router.put("/:id", authMiddleware, adminMiddleware, updateStatus);

module.exports = router;