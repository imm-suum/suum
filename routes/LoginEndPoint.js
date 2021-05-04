const express = require("express");
const router = require("express").Router();
const User = require("../json-schema/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { registerValidation, loginValidation } = require("../validation");
const verify = require("./verifyToken");

//  Get user
router.get("/", verify, async (req, res) => {
  res.send("You're logged in.");
});



module.exports = router;
