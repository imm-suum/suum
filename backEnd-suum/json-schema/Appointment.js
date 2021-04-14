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

    appointments = appointments.filter(function (appointment) {

      console.log(appointment + " single object");
      console.log(appointments + "FILTERED objects");
      //console.log(requiresNotification(searchDate));
      console.log(appointment.requiresNotification(searchDate));

      return appointment.requiresNotification(searchDate);
    });

    console.log(appointments.length);
    if (appointments.length > 0) {
      sendNotifications(appointments);
      console.log("more than 1 appointment ");
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
        body: `Hi ${appointment.name}. Just a reminder that you have an appointment coming up.`,
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
