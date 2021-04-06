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




//POST A NEW HABIT
router.post("/", verify, async (req, res) => {
  //console.log(req.body);
  //console.log(req.user._id);
  
  //make New user Habit
  const habit = new Habit({
   habitName: req.body.habitName,
   user_id: req.user

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
      
    res.send({habit: habit.id});
  } 
  catch (err){
    res.status(400).send(err);
  }


});


//PATCH A NEW HABIT 
router.patch("/", verify, async (req, res) => {
  try {
    // let today = new Date();
    // let tomorrow = new Date(today);
    // tomorrow.setDate(today.getDate() + 1);

    //get date from request body
    let date = req.body.habitAssignedDateTime;

    const updateHabit = await Habit.updateOne(
      { _id: req.body._id },
      {
        $set: {
          habitAssignedDateTime: date,
        },
      }
    );
    res.json(updateHabit);
  } catch (err) {
    res.json({ message: err });
  }
});




module.exports = router;
