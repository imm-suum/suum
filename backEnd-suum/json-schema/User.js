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
    const searchDate = new Date();
    User.find().then(function (users) {
  
      console.log("found objects");
      let appointUser;
  
      users = users.filter(function (user) {
  
        console.log(user + " single object");
        console.log(users + "FILTERED objects");
        appointUser = users;
        console.log(appointUser);
        //console.log(user.requiresNotification(searchDate), " < line 50 from appointment.requiresNotification(searchDate");
        
  
        //return user.requiresNotification(searchDate);
      });
      
      console.log(users.length);
      if (1 > 0) {
        sendNotifications(appointUser);
        console.log("more than 1 appointment ");
        console.log(appointUser);
      }
    });

    /**
   * Send messages to all appoinment owners via Twilio
   * @param {array} users List of users.
   */
     function sendNotifications(users) {
      console.log("sendNotifications called")
      const client = new Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
  
      users.forEach(function (user) {
        // Create options to send the message
        const options = {
          to: `+ ${user.phoneNumber}`,
          from: process.env.TWILIO_PHONE_NUMBER,
          /* eslint-disable max-len */
          body: `Hi ${user.name}. Just a reminder that you have a suum habit coming up. www.suumwebsiteHerokuLinkhere.com `,
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