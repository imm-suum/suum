const Appointment = require("../json-schema/Appointment");

const notificationWorkerFactory = function () {
  return {
    run: function () {
      Appointment.sendNotifications();
    },
  };
};

module.exports = notificationWorkerFactory();
