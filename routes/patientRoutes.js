const mongoose = require("mongoose");
const patientSchema = require("../models/Patient");
const Patient = mongoose.model("patient");

module.exports = app => {
  //add patient
  app.post("/api/addPatient", (req, res) => {
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
  });

  //show patient
  app.get("/api/allPatient", (req, res) => {
    Patient.find().then(patients => res.send(patients));
  });

  //update patient
  app.put("/api/updatePatient/:nationalNumber", (req, res) => {
    Patient.update(
      { nationalNumber: req.body.nationalNumber },
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
          console.log(err);
        }
        console.log(result);
      }
    );

    res.send("patient is updated");
  });

  //delete patient
  app.delete("/api/deletePatient/:nationalNumber", (req, res) => {
    Patient.deleteOne(
      { nationalNumber: req.body.nationalNumber },
      (err, result) => {
        if (err) {
          console.log(err);
        }

        res.send("patient is deleted");
      }
    );
  });
};
