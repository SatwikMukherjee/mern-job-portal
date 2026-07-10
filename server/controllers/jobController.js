const Job = require("../models/Job");

// Add Job
const addJob = async (req, res) => {
    try {
        const { company, title, eligibility, lastDate, description } = req.body;

        const job = await Job.create({
            company,
            title,
            eligibility,
            lastDate,
            description
        });

        res.status(201).json({
            success: true,
            message: "Job Added Successfully",
            job
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get All Jobs
const getJobs = async (req, res) => {
    try {
        const jobs = await Job.find().populate("company");

        res.status(200).json({
            success: true,
            jobs
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    addJob,
    getJobs
};