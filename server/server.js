var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
const cron = require("node-cron");
const mongoose = require("mongoose");
require("dotenv/config");
const bodyParser = require("body-parser"); //handles reading data from forms
const scheduler = require("./scheduler");
const path = require("path");

// intialize endpoint routes
const UserEndPoint = require("./routes/UserEndPoint");
const HabitEndpoint = require("./routes/HabitEndpoint");
const Stash = require("./routes/StashEndPoint");
const TipsEndPoint = require("./routes/tipsEndPoint");
const ReportEndPoint = require("./routes/reportEndPoint");

var app = express();

// Schedule tasks to be run on the server.

scheduler.start();

//Swagger import
const swaggerUi = require("swagger-ui-express");
swaggerDocument = require("./swagger");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log("Express server is running on localhost:5000")
);

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to DB");
  }
);

app.use("/api/user", UserEndPoint);

app.use("/api/stash", Stash);

app.use("/api/habit", HabitEndpoint);

app.use("/api/tips", TipsEndPoint);

app.use("/api/report", ReportEndPoint);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve_dirname, "client", "build", "index.html");
  });
}
module.exports = app;
