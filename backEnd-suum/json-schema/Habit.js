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
  user_id: {
    type: mongoose.Schema.Types.ObjectId, 
    ref:'User',
    required: true
  } 
  

});



const Habit = mongoose.model('Habit', habitSchema);

module.exports = Habit;