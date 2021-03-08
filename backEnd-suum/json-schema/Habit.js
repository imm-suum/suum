const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const habit = mongoose.Schema({
  habitName: {
    type: String,
    required: true,
  },
  habitAssignedDateTime: {
    type: Date,
    default: Date.now,
  },

  habitComplete: {
    type: Boolean,
    default: false,
  },

  habitCompletionDateTime: {
    type: Date,
    default: Date.now,
  },
  stashed: {
    type: Boolean,
    default: false,
  },
  user_id: mongoose.ObjectId,
});

module.exports = mongoose.model("habit", habit, "habits");
