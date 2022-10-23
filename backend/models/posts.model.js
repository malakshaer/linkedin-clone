const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  text: {
    type: String,
  },
  time: {
    type: Date,
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
