const mongoose = require("mongoose");
const moment = require("moment");
const cfg = require("dotenv/config");
const Twilio = require("twilio");

const AppointmentSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String,
  notification: Number,
  timeZone: String,
  time: { type: Date, index: true },
});

//Figure out how this works >>
AppointmentSchema.methods.requiresNotification = function (date) {
  console.log(date, "< date that was passed in");
  console.log(moment(date), "< date passed into moment");
  console.log(moment(date).utc(), "< date that was passed into UTC");
  console.log(moment(this.time).tz(this.timeZone), "< Line 30 1 no utc");
  console.log(moment(this.time).tz(this.timeZone).utc(), "< Line 30 1");
  console.log(moment(this.time).tz(this.timeZone).utc().diff(moment(date).utc()), "< Line 30 2");
  console.log(moment.duration(moment(this.time).tz(this.timeZone).utc().diff(moment(date).utc())).asMinutes(), "< Line 28");
  console.log(Math.round(moment.duration(moment(this.time).tz(this.timeZone).utc().diff(moment(date).utc())).asMinutes()), "< Line 27");
  console.log(this.notification, "< Line 33");
  console.log(this.timeZone, "this.timezone");

  
  //if time is Morning 
    //for each users[] send morning-text to (user.number) were User.notifications=true
  //if time is afternoon
    //for each users[] send afternoon-text to (user.number) were User.notifications=true
  return (
    Math.round(
      moment
        .duration(
          moment(this.time).tz(this.timeZone).utc().diff(moment(date).utc())
        )
        .asMinutes()
    ) === this.notification
  );
};

AppointmentSchema.statics.sendNotifications = function (callback) {
  console.log(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN,process.env.TWILIO_PHONE_NUMBER );
  // now
  const searchDate = new Date();
  Appointment.find().then(function (appointments) {

    console.log("found objects");
    let appoint;

    appointments = appointments.filter(function (appointment) {

      console.log(appointment + " single object");
      console.log(appointments + "FILTERED objects");
      appoint = appointments;
      console.log(appoint);
      console.log(appointment.requiresNotification(searchDate), " < line 50 from appointment.requiresNotification(searchDate");
      

      return appointment.requiresNotification(searchDate);
    });
    
    console.log(appointments.length);
    if (1 > 0) {
      //sendNotifications(appoint);
      console.log("more than 1 appointment ");
      console.log(appoint);
    }
  });

  

  /**
   * Send messages to all appoinment owners via Twilio
   * @param {array} appointments List of appointments.
   */
  function sendNotifications(appointments) {
    console.log("sendNotifications called")
    const client = new Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

    appointments.forEach(function (appointment) {
      // Create options to send the message
      const options = {
        to: `+ ${appointment.phoneNumber}`,
        from: process.env.TWILIO_PHONE_NUMBER,
        /* eslint-disable max-len */
        body: `Hi ${appointment.name}. Just a reminder that you have a suum habit coming up.`,
        /* eslint-enable max-len */
      };

      // Send the message!
      client.messages.create(options, function (err, response) {
        if (err) {
          // Just log it for now
          console.error(err);
        } else {
          // Log the last few digits of a phone number
          let masked = appointment.phoneNumber.substr(
            0,
            appointment.phoneNumber.length - 5
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

const Appointment = mongoose.model(
  "appointment",
  AppointmentSchema,
  "appointment"
);
module.exports = Appointment;
