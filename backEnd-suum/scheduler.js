const CronJob = require("node-cron");
const notificationsWorker = require("./workers/notificationsWorker");
const moment = require("moment");

const schedulerFactory = function () {
  return {
    start: function () {
      CronJob.schedule(
        "* * * * *",
        function () {
          console.log(
            "Running Send Notifications Worker for " + moment().format()
          );
          //notificationsWorker.run();
        },
        null,
        true,
        ""
      );
    },
  };
};

module.exports = schedulerFactory();
