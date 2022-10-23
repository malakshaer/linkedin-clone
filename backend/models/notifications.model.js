const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  text: {
    type: String,
  },
  time: {
    type: Date,
  },
});

const Notification = mongoose.model("Notification", notificationSchema);

module.exports = Notification;
