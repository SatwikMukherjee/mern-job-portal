const express = require("express");
const router = express.Router();

const { addJob, getJobs } = require("../controllers/jobController");

// POST /api/job
router.post("/", addJob);

// GET /api/job
router.get("/", getJobs);

module.exports = router;