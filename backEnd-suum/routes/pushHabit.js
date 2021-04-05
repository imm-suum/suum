const express = require("express");
const router = express.Router();
const Habit = require("../json-schema/Habit");

//pushes a habit
router.patch("/:postId", async (req, res) => {
  try {
    let today = new Date();
    let tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const updateHabit = await Habit.updateOne(
      { _id: req.params.postId },
      {
        $set: {
          habitAssignedDateTime: tomorrow,
        },
      }
    );
    res.json(updateHabit);
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;
