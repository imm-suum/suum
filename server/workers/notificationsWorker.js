const User = require("../json-schema/User");

const notificationWorkerFactory = function () {
  console.log("I running notifications worker");
  return {
    run: function () {
      User.sendNotifications();
    },
  };
};

module.exports = notificationWorkerFactory();
