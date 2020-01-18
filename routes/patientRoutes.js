const mongoose = require("mongoose");
const patientSchema = require("../models/Patient");
const Patient = mongoose.model("patient");
const express = require("express");
const auth = require("../middleware/auth");

const app = express();

module.exports = app => {
  //add patient
  app.post("/api/addPatient", (req, res) => {
    // Patient.findOne(
    //   { nationalNumber: req.body.nationalNumber },
    //   (err, result) => {
    //     if (err) {
    //       return res.status(401).json({ message: "check again" });
    //     }
    //   }
    // );
    Patient.findOne(
      { nationalNumber: req.body.nationalNumber },
      (err, data) => {
        if (err) return res.status(404).send(err);
        if (data) {
          return res.status(404).json("National Number is already used");
        }
        var patient = new Patient({
          name: req.body.name,
          nationalNumber: req.body.nationalNumber,
          address: req.body.address,
          phoneNumber: req.body.phoneNumber,
          birthDate: req.body.birthDate,
          disease: req.body.disease,
          surgeriesHistory: req.body.surgeriesHistory,
          futureSurgeries: req.body.futureSurgeries,
          surgeryDate: req.body.surgeryDate
        });
        patient.save();
        return res.status(200).json("data saved");
      }
    );
  });

  //show patient
  app.get("/api/allPatient", (req, res) => {
    Patient.find().then(patients => res.send(patients));
  });

  //show one patient
  app.get("/api/onePatient/:nationalNumber", (req, res) => {
    console.log("num", req.params.nationalNumber);

    Patient.findOne({ nationalNumber: req.params.nationalNumber }).then(
      patients => {
        res.send(patients);
        // console.log(patients);
      }
    );
  });

  //update patient
  app.post("/api/updatePatient/:nationalNumber", (req, res) => {
    // console.log("que", req.query);
    Patient.update(
      { nationalNumber: req.params.nationalNumber },
      {
        $set: {
          name: req.body.name,
          nationalNumber: req.body.nationalNumber,
          address: req.body.address,
          phoneNumber: req.body.phoneNumber,
          birthDate: req.body.birthDate,
          disease: req.body.disease,
          surgeriesHistory: req.body.surgeriesHistory,
          futureSurgeries: req.body.futureSurgeries,
          surgeryDate: req.body.surgeryDate
        }
      },
      (err, result) => {
        if (err) {
          res.send(err);
        } else {
          res.json("patient is updated" + JSON.stringify(result));
        }
      }
    );
    // Patient.findById(req.params.nationalNumber, (err, result) => {
    //   if (!result)
    //   res.status(404).send("data is not found");
    // else {
    //     result.name = req.body.name;
    //     result.address = req.body.address;
    //     result.phoneNumber = req.body.phoneNumber;
    //     result.save().then(res=>{
    //   })
    //   .catch(err => {
    //         res.status(400).send("unable to update the database");
    //   });
    // });
  });

  //delete patient
  app.delete("/api/deletePatient/:nationalNumber", (req, res) => {
    Patient.deleteOne({ nationalNumber: req.params.nationalNumber }, err => {
      if (err) {
        console.log(err);
      }
      res.send("patient is deleted");
    });
  });
};
