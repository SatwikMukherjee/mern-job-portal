const Company = require("../models/Company");

// Add Company
const addCompany = async (req, res) => {
    try {

        const company = await Company.create({
            ...req.body,
            createdBy: req.user.id
        });

        res.status(201).json({
            success: true,
            message: "Company Added Successfully",
            company
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// Get All Companies
const getCompanies = async (req, res) => {

    try {

        const companies = await Company.find();

        res.status(200).json({
            success: true,
            companies
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    addCompany,
    getCompanies
};