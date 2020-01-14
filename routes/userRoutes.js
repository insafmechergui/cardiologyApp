const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = require("../models/User");
const User = mongoose.model("user");

module.exports = app => {
  //signup for doctor
  //save data and hash password
  app.post("/api/signupDoctor", (req, res) => {
    var userData = {
      name: req.body.name,
      matricule: req.body.matricule,
      password: req.body.password
    };
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      if (err) {
        console.log("err", err);
      }
      req.body.password = hash;
      var doctor = new User(req.body);
      doctor.save(userData);
      // bcrypt.compare(userData.pa);
    });
  });

  //signin for doctor
  app.post("/api/signinDoctor", (req, res) => {
    User.find({ matricule: req.body.matricule })
      .then(user => {
        bcrypt.compare(req.body.password, user[0].password, (err, match) => {
          if (match) {
            res.json({ status: true });
          } else {
            res.json({ status: false });
          }
        });
      })
      .catch(err => {
        res.json({ status: false });
      });
  });
};
