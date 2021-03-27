const mongoose = require("mongoose");


const habitSchema = mongoose.Schema({
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
  user_id: {type:mongoose.ObjectId, ref:user},
});

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  notifications: {
    Boolean,
    default:true
  }, 
  habits:[habitSchema]
});

module.exports = mongoose.model("habit", habitSchema, "habits");

module.exports = mongoose.model("user", userSchema, "users");

module.exports = {
  user,habit
}
