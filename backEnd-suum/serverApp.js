var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
const mongoose = require("mongoose");
require("dotenv/config");
const bodyParser = require("body-parser"); //handles reading data from forms
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var testAPIRouter = require("./routes/testAPI");
var postsRoute = require("./routes/posts");
const pushHabitRoute = require("./routes/pushHabit");
const getStashRoute = require("./routes/getStash");
const allHabits = require("./routes/allHabits");
const postHabit=require("./routes/postHabit");

var app = express();

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
app.listen(3000);

mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true }, () => {
  console.log("connected to DB");
});

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/testAPI", testAPIRouter);
app.use("/posts", postsRoute);
app.use("/pushHabit", pushHabitRoute);
app.use("/getStash", getStashRoute);
app.use("/allHabits", allHabits);
app.use("/postHabit", postHabit);

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

module.exports = app;
