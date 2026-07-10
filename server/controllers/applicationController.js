const Application = require("../models/Application");

// Student Apply Job
const applyJob = async (req, res) => {
    try {

        const { job } = req.body;

        const alreadyApplied = await Application.findOne({
            student: req.user.id,
            job
        });

        if (alreadyApplied) {
            return res.status(400).json({
                success: false,
                message: "Already Applied"
            });
        }

        const application = await Application.create({
            student: req.user.id,
            job
        });

        res.status(201).json({
            success: true,
            message: "Applied Successfully",
            application
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// Get My Applications
const getMyApplications = async (req, res) => {

    try {

        const applications = await Application.find({
            student: req.user.id
        }).populate({
            path: "job",
            populate: {
                path: "company"
            }
        });

        res.status(200).json({
            success: true,
            applications
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


const getAllApplications = async (req, res) => {
    try {

        const applications = await Application.find()
            .populate("student", "name email branch cgpa")
            .populate({
                path: "job",
                populate: {
                    path: "company"
                }
            });

        res.status(200).json({
            success: true,
            applications
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


const updateStatus = async (req, res) => {

    try {

        const { status } = req.body;

        const application = await Application.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );

        res.status(200).json({
            success: true,
            message: "Status Updated",
            application
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    applyJob,
    getMyApplications,
    getAllApplications,
    updateStatus
};