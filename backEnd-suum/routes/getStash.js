const express = require("express");
const router = express.Router();
const Habit = require("../json-schema/Habit");
const verify = require('./verifyToken');


router.get("/", verify,  async (req, res) => {
  try {
    // let stashValue = req.params.stashed;
    // let stashValue=Habit.stashed; 
    const stash = await Habit.find({_id: req.user, stashed: true});
    
    res.json(stash);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
