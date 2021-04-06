const mongoose = require("mongoose");
 

const userSchema = mongoose.Schema({
    // _id=Schema.Types.ObjectId, 

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
      type: Boolean
      
    }, 
    habits:[
      {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Habit'}
    ]
  });

const User = mongoose.model('User', userSchema, 'user');

module.exports = User; 