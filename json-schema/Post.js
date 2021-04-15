const mongoose = require('mongoose');
const Schema=mongoose.Schema

const test=new Schema({
  testName:String,
  testContent:String, 
  testDate:{
    type:Date,
    default:Date.now
  }

})
// const userSchema = mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   notifications: {
//     Boolean,
//     default:true
//   }, 
//   habits: Array,
// });

// const habitSchema = mongoose.Schema({
//   habitName: {
//     type: String,
//     required: true,
//   },
//   habitAssignedDateTime: {
//     type: Date,
//     default: Date.now,
//   },

//   habitComplete: Boolean,

//   habitCompletionDateTime: {
//     type: Date,
//     default: Date.now,
//   },
//   stashed: Boolean,
//   user_id: mongoose.ObjectId,
// });


module.exports = mongoose.model('test', test, 'test');
