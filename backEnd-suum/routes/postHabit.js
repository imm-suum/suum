const express = require("express");
const router = express.Router();
const Habit = require("../json-schema/Habit");
var mongoose = require('mongoose');
const verify = require('./verifyToken');

//submits the habits
router.post("/", verify, async (req, res) => {
  console.log(req.body);
  console.log(req.user._id);
  
  //make New user Habit
  const habit = new Habit({
   habitName: req.body.habitName,
   user_id: req.user

  });

  console.log(habit);

  //Try to save Habit
  const newHabitId = {habit:""};
  try{
    const saveHabit = await habit.save();
    
    res.send({habit: habit.id});
    
  } 
  catch (err){

    res.status(400).send(err);
  }

  console.log(newHabitId);
  

  //Try to populate new Habit Id in the approproate user object
  // try{
  //   // const saveHabit = await habit.save();
  //   // res.send({habit});

  //   // habit.findOne(habit.user_id)
  // // .populate('user_id')
  // // .exec(function(err, habit){
  // } 
  // catch (err){

  //   res.status(400).send(err);
  // }


});

module.exports = router;
