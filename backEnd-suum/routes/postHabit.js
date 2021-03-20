const express = require("express");
const router = express.Router();
const Habit = require("../json-schema/Habit");

//submits the habits
router.post("/:userId", (req, res) => {
  //   console.log(req.body);
  const habit = new Habit({
    habitName: req.body.habitName,
    user_id:user_id
    // post the new habit with the current user to the habit collection 
    // then save the habit in the user's collection as an index in the habit array 

  });
  habit
    .save().then(()=>{
      const user=new Habit.user({ 
        habits=req.body.habitName, 
        habit_id=habit_id 
      })
    })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

module.exports = router;
