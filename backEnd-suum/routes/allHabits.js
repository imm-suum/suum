const express = require("express");
const router = express.Router();
const Habit = require("../json-schema/Habit");
const User = require("../json-schema/User");


//get a specific post
router.get("/:userId", async (req, res) => {
  try {
    // "/habit/:habitName"
    //console.log(req.params.postId);
    //get all habits with the /user_id=userid
    //use populate method? 
    //how to use refs 
    // const habits = await Habit.find(req.params.habitName)
    // let user_id=User.id; 
    const Userhabits = await User.findById(req.params.id).populate('habits')
        // findById(req.params.id).populate('habits');
    // let userHabits=[]; 
    // user.habits.forEach (function(friend){
    //   userHabits.push(friends.adTime); 
    // })

    res.json(Userhabits);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
