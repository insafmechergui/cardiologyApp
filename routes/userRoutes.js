const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = require("../models/User");
const User = mongoose.model("user");
const jwt = require("jsonwebtoken");
module.exports = app => {
  //signup for doctor
  //save data and hash password
  app.post("/api/signupDoctor", (req, res) => {
    // var userData = ;
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      if (err) {
        console.log("err", err);
      }
      // req.body.password = hash;
      var doctor = new User({
        name: req.body.name,
        matricule: req.body.matricule,
        password: hash
      });
      doctor.save(err => {
        if (err) return res.json({ error: true });
        res.json({ error: false });
      });
      // bcrypt.compare(userData.pa);
    });
  });

  //signin for doctor
  app.post("/api/signinDoctor", (req, res) => {
    User.findOne({ matricule: req.body.matricule })
      .exec()
      .then(user => {
        bcrypt.compare(req.body.password, user.password, (err, match) => {
          if (match) {
            const token = jwt.sign(
              {
                matricule: user.matricule,
                userId: user._id
              },
              "secret",
              {
                expiresIn: "1h"
              }
            );
            return res.status(200).json({
              message: "User is logged in",
              token: token
            });
          } else {
            return res.status(401).json({ message: "check again" });
          }
        });
      })
      .catch(err => {
        res.status(401).json({ message: "User doesn't existe" });
      });
  });
};
