const express = require("express");
const momentTimeZone = require("moment-timezone");
const moment = require("moment");
const Appointment = require("../json-schema/Appointment");
const router = new express.Router();

const getTimeZones = function () {
  return momentTimeZone.tz.names();
};

// GET: /appointments
router.get("/", async (req, res) => {
  try {
    const appointment = await Appointment.find();
    res.json(appointment);
  } catch (err) {
    res.json({ message: err });
  }
});

// GET: /appointments/create
router.get("/create", function (req, res, next) {
  res.render("appointments/create", {
    timeZones: getTimeZones(),
    appointment: new Appointment({
      name: "",
      phoneNumber: "",
      notification: "",
      timeZone: "",
      time: "",
    }),
  });
});

// POST: /appointments
router.post("/", async (req, res, next) => {
  const name = req.body.name;
  const phoneNumber = req.body.phoneNumber;
  const notification = req.body.notification;
  const timeZone = req.body.timeZone;
  const time = moment(req.body.time, "MM-DD-YYYY hh:mma");
  try {
    const appointment = new Appointment({
      name: name,
      phoneNumber: phoneNumber,
      notification: notification,
      timeZone: timeZone,
      time: time,
    });

    const newAppointment = await appointment.save();
    res.json({ newAppointment });
    res.redirect("/");
  } catch (err) {
    res.json({ message: err });
  }
});

// GET: /appointments/:id/edit
router.get("/:id/edit", function (req, res, next) {
  const id = req.params.id;
  Appointment.findOne({ _id: id }).then(function (appointment) {
    res.render("appointments/edit", {
      timeZones: getTimeZones(),
      appointment: appointment,
    });
  });
});

// POST: /appointments/:id/edit
router.post("/:id/edit", function (req, res, next) {
  const id = req.params.id;
  const name = req.body.name;
  const phoneNumber = req.body.phoneNumber;
  const notification = req.body.notification;
  const timeZone = req.body.timeZone;
  const time = moment(req.body.time, "MM-DD-YYYY hh:mma");

  Appointment.findOne({ _id: id }).then(function (appointment) {
    appointment.name = name;
    appointment.phoneNumber = phoneNumber;
    appointment.notification = notification;
    appointment.timeZone = timeZone;
    appointment.time = time;

    appointment.save().then(function () {
      res.redirect("/");
    });
  });
});

// POST: /appointments/:id/delete
router.post("/:id/delete", function (req, res, next) {
  const id = req.params.id;

  Appointment.remove({ _id: id }).then(function () {
    res.redirect("/");
  });
});

module.exports = router;
