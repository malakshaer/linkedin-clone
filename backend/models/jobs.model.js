const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: {
    type: Number,
  },
  position: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
  },
  applicants: {
    type: Number,
  },
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
