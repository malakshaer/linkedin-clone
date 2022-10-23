const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
  education: [
    {
      school: {
        type: String,
        required: "school is required",
        trim: true,
      },
      degree: {
        type: String,
        required: "degree is required",
        trim: true,
      },
      field: {
        type: String,
        trim: true,
      },
      grade: {
        type: Number,
        trim: true,
      },
      startDate: {
        type: Date,
      },
      endDate: {
        type: Date,
      },
    },
  ],
});

const Education = mongoose.model("Education", educationSchema);

module.exports = Education;
