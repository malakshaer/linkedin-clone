const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
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
  languages: {
    type: Array,
  },
  skills: {
    type: Array,
  },
  posts: [
    {
      text: {
        type: String,
      },
      postDate: {
        type: Date,
      },
    },
  ],
  notification: [
    {
      text: {
        type: String,
      },
      time: {
        type: Date,
      },
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
