const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
      trim: true,
    },

    role: {
      type: String,
      required: true,
    },

    package: {
      type: Number,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    deadline: {
      type: Date,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Company", companySchema);