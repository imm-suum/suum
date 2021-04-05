const express = require("express");
const router = express.Router();
const Habit = require("../json-schema/Habit");

//get a specific post
router.get("/:id", async (req, res) => {
  try {
    //console.log(req.params.postId);
    //get all habits with the /user_id=userid
    //use populate method? 
    //how to use refs 
    const habit = await Habit.find(req.params.userId);
    res.json(habit);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
