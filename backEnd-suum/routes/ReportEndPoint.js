const express = require("express");
const router = express.Router();
const Habit = require("../json-schema/Habit");
const User = require("../json-schema/User");
const verify = require('./verifyToken');


// get weekly report 

//GET HABITS for A Week
router.get("/weekly", verify, async (req, res) => {
    try {
  
      //Get the week range from 
      let startOfWeek = new Date(); //either accept dates here or track the begining and end of week in the backend
      let endOfWeek = new Date();
  
  
      //Get habits with the user id provided for the date range provided
      const Userhabits = await Habit.find({ 
        user_id:req.user, 
        habitAssignedDateTime:  {
          $gte: startOfWeek,
          $lte: endOfWeek
        } 
      });
  
     
  
      res.json(Userhabits);
    } catch (err) {
     
      res.json({ message: err });
    }
  });


// get monthly report 

router.get("/monthly", verify, async (req, res) => {
    try {
  
      //Get the week range from 
      let startOfWeek = new Date(); //either accept dates here or track the begining and end of week in the backend
      let endOfWeek = new Date();
      const month = ["JAN","FEB", 02, 05];
      const monthly = [];

      for(i=0; i < 12; i++){

        //Get habits with the user id provided for the date range provided
        const Userhabits = await Habit.find({ 
            user_id:req.user, 
            habitAssignedDateTime:  {
            $gte: month[i],
            $lte: month[i]
            } 
        });

        //add month to array
        monthly.push(Userhabits); //figure our how to add month name/number at begining of object

      }
      
  
     
  
      res.json(monthly);
    } catch (err) {
     
      res.json({ message: err });
    }
  });




module.exports = router;
