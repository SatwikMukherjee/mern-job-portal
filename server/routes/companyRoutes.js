const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const {
    addCompany,
    getCompanies
} = require("../controllers/companyController");

// Add a company (Protected)
router.post("/", authMiddleware, adminMiddleware, addCompany);

// Get all companies
router.get("/", getCompanies);

module.exports = router;