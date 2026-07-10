const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const { addJob, getJobs } = require("../controllers/jobController");

// POST /api/job (Admin Only)
router.post("/", authMiddleware, adminMiddleware, addJob);

// GET /api/job (Everyone can view jobs)
router.get("/", getJobs);

module.exports = router;