const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
    addCompany,
    getCompanies
} = require("../controllers/companyController");

// Add a company (Protected)
router.post("/", authMiddleware, addCompany);

// Get all companies
router.get("/", getCompanies);

module.exports = router;