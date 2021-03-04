const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const bodyParser= require('body-parser'); //handles reading data from forms
// const cors=require('cors');
// app.use(cors()); 
const app = express();
//Import Routes
const postsRoute = require("./routes/posts");
app.use(bodyParser.json()); 
app.listen(3000);

mongoose.connect(process.env.DB_CONNECTION, { usenewURLParser: true }, () => {
  console.log("connected to DB");
});

app.use("/posts", postsRoute);

// app.get("/", (req, res) => {
//   res.send("We are home");
// });
