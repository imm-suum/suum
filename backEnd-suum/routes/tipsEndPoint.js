const express = require("express");
const router = express.Router();
const Tips = require("../json-schema/Tips");
const verify = require('./verifyToken');


router.get("/", verify,  async (req, res) => {
    try {
      const tips = await Tips.find();
      
      res.json(tips);
    } catch (err) {
      res.json({ message: err });
    }
  });






module.exports = router;