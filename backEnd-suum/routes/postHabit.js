const express = require("express");
const router = express.Router();
const Habit = require("../json-schema/Habit");

//submits the habits
router.post("/", (req, res) => {
  //   console.log(req.body);
  const habit = new Habit({
    habitName: req.body.habitName,
  });
  habit
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

module.exports = router;
