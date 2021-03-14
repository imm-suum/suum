const express = require("express");
const router = express.Router();
const Habit = require("../json-schema/Habit");

//gets back all the tests
// router.get("/", async (req, res) => {
//   try {
//      let stashValue = req.params.stashed;
//     const stash = await Habit.filter(function(){
//       return req.query.stashed === true;
//     });
//     res.json(stash);
//   } 
  
  
  
//   catch (err) {
//     res.json({ message: err });
//   }
// });


router.get("/", async (req, res) => {
  try {
    // let stashValue = req.params.stashed;
    // let stashValue=Habit.stashed; 
    const stash = await Habit.find({stashed: true});
    res.json(stash);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
