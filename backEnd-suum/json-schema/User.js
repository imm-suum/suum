const mongoose = require("mongoose");
const moment = require("moment");
const cfg = require("dotenv/config");
const Twilio = require("twilio");
 

const userSchema = mongoose.Schema({  

    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    notifications: {
      type: Boolean
      
    }, 
    habits:[
      {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Habit'}
    ]
  });


  // userSchema.methods.requiresNotification = function (date) {
  // //if time is Morning 
  //   //for each users[] send morning-text to (user.number) were User.notifications=true
  // //if time is afternoon
  //   //for each users[] send afternoon-text to (user.number) were User.notifications=true
  //   return (
  //     Math.round(
  //       moment
  //         .duration(
  //           moment(this.time).tz(this.timeZone).utc().diff(moment(date).utc())
  //         )
  //         .asMinutes()
  //     ) === this.notification
  //   );
  // };

  userSchema.statics.sendNotifications = function (callback) {
    // now
    let todayDateTime = moment(); //the current date and time

    User.find().populate('habits').then(function (users, habits) {

      //if notifications = false && there are no habits && dont notfications
      console.log(users, "user");
      console.log(habits, "habits");
      let appointUser = users;
  
        users = users.filter(function (user) {
          //filter for users that have notifications set to true
          //console.log(user.habits, "the user habits");
          

            habits = user.habits.filter( function (habitList) {

              let habitDay = moment(habitList.habitAssignedDateTime).format('MMMM Do YYYY'); //we need to extract the day only
              let theDay = todayDateTime.format('MMMM Do YYYY'); //we need to extract the day only
              // console.log(habitDay, "habitDay");
              // console.log(theDay, "theDay");
            
              if (habitDay == theDay){
                return habitList //a clean array of habits that are for today for the user
              }
            }); 
            
          //console.log(habits, "habits 2");

          console.log(habits.length > 0, "this should dbe true or false");
          if (user.notifications && habits.length > 0 ){ // Check if user has notifications on
            return user;
          }
        });

          console.log(users, "this is the filtered results");

      
  

      const morningTime = moment(09, "HH"); //Set morning Time 9am 

      const afternoonTime = moment(17, "HH"); //Set Afternoon Time  5pm
      
      
      
      if (todayDateTime.format('HH') === morningTime.format('HH')) {

        sendMorningNotifications(users);
        console.log(users,"sendMorningNotifications" );

      } else if(todayDateTime.format('HH') === afternoonTime.format('HH')) {

        sendAfternoonNotifications(users);
        // console.log(users, "sendAfternoonNotifications");
        
        
      }
    });

    /**
   * Send messages to all appoinment owners via Twilio
   * @param {array} users List of users.
   */
     function sendMorningNotifications(users) {
      console.log("sendMorningNotifications called")
      const client = new Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
  
      users.forEach(function (user) {
        // Create options to send the message
        const options = {
          to: `+ ${user.phoneNumber}`,
          from: process.env.TWILIO_PHONE_NUMBER,
          /* eslint-disable max-len */
          body: `Hi ${user.name}. Good Morning, Just a reminder that you have a suum habit coming up. www.suumwebsiteHerokuLinkhere.com `,
          /* eslint-enable max-len */
        };
  
        // Send the message!
        client.messages.create(options, function (err, response) {
          if (err) {
            // Just log it for now
            console.error(err);
          } else {
            // Log the last few digits of a phone number
            let masked = user.phoneNumber.substr(
              0,
              user.phoneNumber.length - 5
            );
            masked += "*****";
            console.log(`Message sent to ${masked}`);
          }
        });
      });
  
      // Don't wait on success/failure, just indicate all messages have been
      // queued for delivery
      if (callback) {
        callback.call();
      }
    }



  function sendAfternoonNotifications(users) {
    console.log("sendAfternoonNotifications called")
    const client = new Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

    users.forEach(function (user) {
      // Create options to send the message
      const options = {
        to: `+ ${user.phoneNumber}`,
        from: process.env.TWILIO_PHONE_NUMBER,
        /* eslint-disable max-len */
        body: `Hi ${user.name}. Good Afternoon Just a reminder that you have a suum habit coming up. www.suumwebsiteHerokuLinkhere.com `,
        /* eslint-enable max-len */
      };

      // Send the message!
      client.messages.create(options, function (err, response) {
        if (err) {
          // Just log it for now
          console.error(err);
        } else {
          // Log the last few digits of a phone number
          let masked = user.phoneNumber.substr(
            0,
            user.phoneNumber.length - 5
          );
          masked += "*****";
          console.log(`Message sent to ${masked}`);
        }
      });
    });

    // Don't wait on success/failure, just indicate all messages have been
    // queued for delivery
    if (callback) {
      callback.call();
    }
  }
};

const User = mongoose.model('User', userSchema, 'user');

module.exports = User; 