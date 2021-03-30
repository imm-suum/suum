const mongoose = require("mongoose");

const Schema=mongoose.Schema; 

const userSchema = Schema({
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
      Boolean
      
    }, 
    habits:[[{type:Schema.Types.ObjectId, ref:'habit'}]]
  });

const User = mongoose.model('user', userSchema, 'user');

module.exports = User; 