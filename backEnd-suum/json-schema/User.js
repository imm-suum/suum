const mongoose = require("mongoose");
const moment = require("moment");
const cfg = require("dotenv/config");
const Twilio = require("twilio");
 

const userSchema = mongoose.Schema({  

    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
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