var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
const mongoose = require("mongoose");
require("dotenv/config");
const bodyParser = require("body-parser"); //handles reading data from forms
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const testAPIRouter = require("./routes/testAPI");
const authRoute = require('./routes/auth');
const postsRoute = require("./routes/posts");
const pushHabitRoute = require("./routes/pushHabit");
const HabitEndpoint = require("./routes/HabitEndpoint");
const getStashRoute = require("./routes/getStash");
const allHabits = require("./routes/allHabits");
var app = express();

//Swagger import
const swaggerUi = require('swagger-ui-express');
swaggerDocument = require ("./swagger");

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

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
//app.listen(5000);

mongoose.connect(process.env.DB_CONNECTION, { useNewURLParser: true }, () => {
  console.log("connected to DB");
});

//Middleware
app.use(express.json()); //handles request body

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use('/api/user', authRoute);
app.use("/testAPI", testAPIRouter);
app.use("/posts", postsRoute);



// usable routers for front-end 
// pushes habit into then next day 
app.use("/pushHabit", pushHabitRoute);
// gets all the habits that are stashed 
app.use("/getStash", getStashRoute);
// gets all the habits for a user 
app.use("/allHabits", allHabits);
// creates a habit and posts it inte habit collection and pushes a habit into the user habits array 
app.use('/api/habit', HabitEndpoint);


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
