const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = require("../models/User");
const User = mongoose.model("user");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

module.exports = app => {
  //signup for doctor
  //save data and hash password
  app.post("/api/signup", (req, res) => {
    // // var userData = ;
    // bcrypt.hash(req.body.password, 10, (err, hash) => {
    //   if (err) {
    //     console.log("err", err);
    //   }
    //   // req.body.password = hash;
    //   var doctor = new User({
    //     name: req.body.name,
    //     matricule: req.body.matricule,
    //     password: hash
    //   });
    //   doctor.save(err => {
    //     if (err) return res.json({ message: "User existe before" });
    //     res.json({ message: "User saved" });
    //   });
    //   // const token = doctor.generateAuthToken();
    //   // res.status(201).send({ doctor });
    //   // bcrypt.compare(userData.pa);
    // });
    User.findOne({ matricule: req.body.matricule })
      .then(user => {
        if (!user) {
          bcrypt.hash(req.body.password, 10, (err, hash) => {
            var doctor = new User({
              name: req.body.name,
              matricule: req.body.matricule,
              password: hash
            });
            User.create(doctor)
              .then(user => {
                res.json({ g: true, status: user.matricule + " registred!" });
              })
              .catch(err => {
                res.send("error: " + err);
              });
          });
        } else {
          res.json({
            error: "User already exists"
          });
        }
      })
      .catch(err => {
        res.send("error: " + err);
      });
  });

  //signin for doctor
  app.post("/api/signin", (req, res) => {
    // User.findOne({ matricule: req.body.matricule })
    //   .then(user => {
    //     bcrypt.compare(req.body.password, user.password, (err, match) => {
    //       if (match) {
    //         // const token = jwt.sign(
    //         //   {
    //         //     matricule: user.matricule,
    //         //     userId: user._id
    //         //   },
    //         //   "secret",
    //         //   {
    //         //     expiresIn: "1h"
    //         //   }
    //         // );
    //         const token = user.generateAuthToken();
    //         // res.send({ user, token });
    //         return res.status(200).json({
    //           message: "User is logged in",
    //           token: token,
    //           doctor: user.name
    //         });
    //       } else {
    //         res.status(401).json({ message: "check again" });
    //         return;
    //       }
    //     });
    //   })
    //   .catch(err => {
    //     res.status(401).json({ message: "User doesn't existe" });
    //   });
    User.findOne({ matricule: req.body.matricule })
      .then(user => {
        if (user) {
          bcrypt.compare(req.body.password, user.password, (err, match) => {
            if (match) {
              const token = jwt.sign(
                {
                  matricule: user.matricule,
                  name: user.name,
                  userId: user._id
                },
                "secret",
                {
                  expiresIn: "1h"
                }
              );
              return res.send({
                token: token,
                doctor: user.name
              });
            } else {
              res.status(401).json({ message: "check again" });
              return;
            }
          });
        }
      })
      .catch(err => {
        res.status(401).json({ message: "User doesn't existe" });
      });
  });

  app.get("/api/profile", (req, res) => {
    const decoded = jwt.verify(req.header["Authorization"], "secret");
    User.findOne({ matricule: decoded.matricule })
      .then(user => {
        if (user) {
          res.json(user);
        } else {
          res.send("user does not exist");
        }
      })
      .catch(err => {
        res.send("error: " + err);
      });
  });

  app.get("/api/users/me", auth, (req, res) => {
    // View logged in user profile
    res.send(req.user);
  });

  //logout Doctor
  app.post("/api/signout", auth, (req, res) => {
    User.findOne({ matricule: req.body.matricule })
      .then(user => console.log(user))
      .catch(() => {
        res.status(204).json({ message: "User logged out" });
      });
    // User.findOne({ name: req.body.name }, (err, data) => {
    //   if (err) res.json(err);

    //   data.token = [];
    //   data.save(err => {
    //     if (err) res.json(err);
    //     res.status(201).json({ deleted: "success" });
    //   });
    // });
  });
};
