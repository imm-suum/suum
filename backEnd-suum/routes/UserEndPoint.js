const express = require("express");
const router = require('express').Router();
const User = require('../json-schema/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {registerValidation, loginValidation} = require('../validation');
const verify = require('./verifyToken');

//  Get user and edit user needs to be fixed 


router.get("/get", verify, async (req, res) => {
  try {

    //Get the user with the user id provided and populate the habits[] with the referenced and full habit objects
    const user = await User.findById(req.user);

    res.json(user);
  } catch (err) {
   
    res.json({ message: err });
  }
});

router.patch("/edit", verify, async (req, res) => {
try {
     await User.updateOne(
      { _id: req.user },
      {
        $set: {
          name: req.body.name,
          email: req.body.email
        },
      }
    );
    res.json('User has been Updated');
  }catch (err) {
    res.json({ message: err });
  }
});






router.post('/register', async (req,res) => {

    //Validating Data from User Before User is made
    const {error} = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    //Check if The user is already in the Database
    const emailExist = await User.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send('Email already exists')

    //Hash Paasswords
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    //Create a new User
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
        notifications:req.body.notifications
    });
    try{
        const savedUser = await user.save();
        res.send({user: user.id});
    }catch(err){
        res.status(400).send(err);
    }

});


//LOGIN
router.post('/login', async (req,res) => {

    //Validating Data from User Before log in a user
    const {error} = loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    //Check if Email Exists to eventually login
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).send('Email is not found ')

    //Check if password is Correct
    const validPass = await bcrypt.compare(req.body.password, user.password)
    if(!validPass) res.status(400).send('Invalid Password')

    //Create and assign a token
    const token = jwt.sign({ _id:user._id }, process.env.TOKEN_SECRET);
    res.cookie('auth-token', token, {httpOnly: true});
    //res.header('auth-token', token).send(token);
    res.send('Succesfuly Signed In');

    //set JWT to expire at 3600000 *4 which is 4 hours

    //If succesful, send string that they are login in
    //res.send('Logged in!')
});



router.patch("/setNotif", verify, async (req, res) => {
    try {
   
      const setNotification = req.body.notifications; 
  
       await User.updateOne(
        { _id: req.user },
        {
          $set: {
            notifications:setNotification
          },
        }
      );
      res.json('Notifications has been Updated');
    } catch (err) {
      res.json({ message: err });
    }
  });






module.exports = router;
