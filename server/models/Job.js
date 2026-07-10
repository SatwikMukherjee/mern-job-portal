const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
{
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
        required: true
    },

    title: {
        type: String,
        required: true
    },

    eligibility: {
        type: Number,
        required: true
    },

    lastDate: {
        type: Date,
        required: true
    },

    description: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("Job", jobSchema);