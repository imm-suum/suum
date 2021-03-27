const mongoose = require("mongoose");
const Schema=mongoose.Schema; 

const habitSchema = mongoose.Schema({
  _id:String, 

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
  user_id: {type:Schema.Types.ObjectId, ref:'user'}
});



const Habit = mongoose.model('habit', habitSchema, 'habits');

module.exports = Habit;