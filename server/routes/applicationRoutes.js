const express = require("express");
const router = express.Router();

const {
    applyJob,
    getMyApplications,
    getAllApplications,
    updateStatus
} = require("../controllers/applicationController");

const authMiddleware = require("../middleware/authMiddleware");

// Apply for a Job
router.post("/", authMiddleware, applyJob);

// Get My Applications
router.get("/my", authMiddleware, getMyApplications);

router.get("/", authMiddleware, getAllApplications);

router.put("/:id", authMiddleware, updateStatus);

module.exports = router;