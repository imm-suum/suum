const Appointment = require("../json-schema/Appointment");

const notificationWorkerFactory = function () {
  console.log("I running notifications worker");
  return {
    run: function () {
      Appointment.sendNotifications();
    },
  };
};

module.exports = notificationWorkerFactory();
