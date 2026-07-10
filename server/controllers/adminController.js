const User = require("../models/User");
const Company = require("../models/Company");
const Job = require("../models/Job");
const Application = require("../models/Application");

const dashboard = async (req, res) => {
    try {

        const totalStudents = await User.countDocuments();
        const totalCompanies = await Company.countDocuments();
        const totalJobs = await Job.countDocuments();
        const totalApplications = await Application.countDocuments();

        res.status(200).json({
            success: true,
            totalStudents,
            totalCompanies,
            totalJobs,
            totalApplications
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

module.exports = {
    dashboard
};