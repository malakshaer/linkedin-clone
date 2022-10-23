const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
  name: {
    type: String,
    required: "name is required",
  },
  email: {
    type: String,
    required: "email is required",
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: "password is required",
    select: false,
  },
  location: {
    type: String,
    trim: true,
  },
  picture: {
    type: String,
    default: "",
  },
  bio: {
    type: String,
    default: "",
  },
  followers: {
    type: Number,
  },
  type: {
    type: String,
    trim: true,
  },
  timeCreated: {
    type: Date,
  },
});

const Company = mongoose.model("Company", CompanySchema);

module.exports = Company;
