const express = require("express");
const router = express.Router();
const Habit = require("../json-schema/Habit");
const User = require("../json-schema/User");
const verify = require('./verifyToken');

//GET HABITS for A User 
router.get("/", verify, async (req, res) => {
  try {

    //Get the user with the user id provided and populate the habits[] with the referenced and full habit objects
    const Userhabits = await User.findById(req.user).populate('habits');

    res.json(Userhabits.habits);
  } catch (err) {
   
    res.json({ message: err });
  }
});

//GET HABITS for A User for the dat
router.get("/forToday", verify, async (req, res) => {
  try {

    //Get todays Date
    let today = new Date();
    //Remove the Hours
    today.setHours(0,0,0,0);
    console.log(today);

    let tomorrow = new Date();
    console.log(today.getDate() + 1);

    //Get habits with the user id provided for the date range provided
    const Userhabits = await Habit.find({ 
      user_id:req.user, 
      habitAssignedDateTime: today 
    });

   

    res.json(Userhabits);
  } catch (err) {
   
    res.json({ message: err });
  }
});




//POST A NEW HABIT
router.post("/", verify, async (req, res) => {
  //console.log(req.body);
  //console.log(req.user._id);

  //Get todays Date
  let today = new Date();
  //Remove the Hours
  today.setHours(0,0,0,0);
  console.log(today);
  
  //make New user Habit
  const habit = new Habit({
   habitName: req.body.habitName,
   user_id: req.user,
   habitAssignedDateTime: today

  });

  //console.log(habit);

 //The code below is a little bit of call back hell, but it works. I dont think 1 call back is all that bad.
  try{
    //Try to save Habit in async function
    const saveHabit = await habit.save()

      //Use updateOne() to find user for the habit based on the habit.user_id
      .then( async data =>{

        const updateUserHabitArray = await User.updateOne(
          {_id: data.user_id}, //Find the USER document with this _id 
          {
            //then use $addToset to populate new Habit Id in the user object habit array
            $addToSet:{
              habits:[data._id]
            }
          }
        )
        //Console log for debugging the recipt of the update 
        //console.log(updateUserHabitArray);
        
        //res.json(updateUserHabitArray);
      });
      
    res.send({habit_id: habit.id});
  } 
  catch (err){
    res.status(400).send(err);
  }


});


//PATCH A HABIT DATE
router.patch("/", verify, async (req, res) => {
  try {
    let today = new Date();
    let tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    //Get todays Date
    let dateRemoveTime = tomorrow.setHours(0,0,0,0);
    //Remove the Hours
    console.log(dateRemoveTime);

    //get date from request body
    let date = req.body.habitAssignedDateTime;

    const updateHabit = await Habit.updateOne(
      { _id: req.body._id },
      {
        $set: {
          habitAssignedDateTime: dateRemoveTime,
        },
      }
    );
    res.json('Habit Date has been Updated');
  } catch (err) {
    res.json({ message: err });
  }
});






//PATCH HABIT TO BE COMPLETE 
router.patch("/complete", verify, async (req, res) => {
  try {    
    
    
    const updateHabit = await Habit.updateOne(
      { _id: req.body._id },
      {
        $set: {
          habitComplete: true,
          stashed:false, 
          habitCompletionDateTime:req.body.habitCompletionDateTime
        },
      }
    );
    res.json("Habit has been marked as complete");
  } catch (err) {
    res.json({ message: err });
    console.log("error");
  }
});


//PATCH HABIT TO STASHED
router.patch("/stash", verify, async (req, res) => {
  try {    
    
    
    const updateHabit = await Habit.updateOne(
      { _id: req.body._id },
      {
        $set: {          
          stashed:true,
        },
      }
    );
    res.json("Habit has been stashed");
  } catch (err) {
    res.json({ message: err });
    console.log("error");
  }
});






module.exports = router;
