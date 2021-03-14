const express = require("express");
const router = express.Router();
const Habit = require("../json-schema/Habit");

//get a specific post
router.get("/:userId", async (req, res) => {
  try {
    //console.log(req.params.postId);
    const habit = await Habit.findById(req.params.userId);
    res.json(habit);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
