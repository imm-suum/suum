const express = require("express");
const router = express.Router();
const Habit = require("../json-schema/Habit");
const User = require("../json-schema/User");
const verify = require('./verifyToken');
const startOfWeek = require('date-fns/startOfWeek');
const endOfWeek = require('date-fns/endOfWeek');
const getYear = require('date-fns/getYear');
const eachWeekOfInterval = require('date-fns/eachWeekOfInterval');
const getWeeksInMonth = require('date-fns/getWeeksInMonth')


// get weekly report 

//GET HABITS for A Week
router.get("/week", verify, async (req, res) => {
    try {
      
      let today = new Date();
      //Get the week range from 
      let startWeek = startOfWeek(today, {weekStartsOn:1});//either accept dates here or track the begining and end of week in the backend
      let endWeek = endOfWeek(today);

      console.log(startWeek, endWeek);
      
     
  
      //Get habits with the user id provided for the date range provided
      const Userhabits = await Habit.find({ 
        user_id:req.user ,
        habitAssignedDateTime:  {
          $gte: startWeek,
          $lte: endWeek
        } 
      });

      //Create new array where habitComplete is true based on the retured user habits in the defined time
      let completedHabits = Userhabits.filter(function (theHabit) {
        if (theHabit.habitComplete == true){
           
          return theHabit
        }
      });

      
      let weekObject = {

        "weekStart": startWeek,
        "weekEnd": endWeek,
        "numberOfHabits": Userhabits.length,
        "numberCompleted": completedHabits.length ,
        "habits": Userhabits

      };
     
      res.json(weekObject);
    } catch (err) {
     
      res.json({ message: err });
    }
  });


// get monthly report 

router.get("/month", verify, async (req, res) => {
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
            habitCompletionDateTime:  {
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


  router.get("/year", verify, async (req, res) => {
    try {
  
      let today = new Date();
      let currentYear = getYear(today);
      console.log(currentYear);

      let weeksInYearArray = eachWeekOfInterval({
        start: new Date(currentYear, 0), // Start interval in January 1 
        end: new Date(currentYear, 12) // Start interval in Dec 31 
      },{weekStartsOn:1});

      //console.log(yearArray);

      const allWeeksHabits = [];

      for(i=0; i < weeksInYearArray.length; i++){

        let theDay = weeksInYearArray[i];
        //Get the week range from 
        let startWeek = startOfWeek(theDay, {weekStartsOn:1});//either accept dates here or track the begining and end of week in the backend
        let endWeek = endOfWeek(theDay);

        //Get habits with the user id provided for the date range provided
        const theWeekHabits = await Habit.find({ 
          user_id:req.user ,
          habitCompletionDateTime:  {
            $gte: startWeek,
            $lte: endWeek
          } 
        });

      
        var buildTheWeekObject = { 
            
            "weekStart": startWeek,
            "weekEnd": endWeek,
            "weeklyHabits": theWeekHabits
          
          }
        allWeeksHabits.push(buildTheWeekObject);

      }

      const allMonthsHabits = [];
      var amountOfMonths = getWeeksInMonth(new Date(2017, 6, 5), { weekStartsOn: 1 })

      for(m=0; m < amountOfMonths; m++ ){
        // for(i=0; i < allWeeksHabits.length; i++){
        //   if (allWeeksHabits[i].weekStart === currentMonth)
        // }


          allMonthsHabits.push(buildTheMonthObject);

      }

      console.log(allWeeksHabits);
      

      // const month = ["JAN","FEB", 02, 05];
      // const monthly = [];

      // for(i=0; i < 12; i++){

      //   //Get habits with the user id provided for the date range provided
      //   const Userhabits = await Habit.find({ 
      //       user_id:req.user, 
      //       habitCompletionDateTime:  {
      //       $gte: month[i],
      //       $lte: month[i]
      //       } 
      //   });
        

      //   //add month to array
      //   monthly.push(Userhabits); //figure our how to add month name/number at begining of object

      // }
      
  
     
  
      //res.json(weeksInYearArray);
      res.json(allWeeksHabits);
    } catch (err) {
     
      res.json({ message: err });
    }
  });



module.exports = router;
