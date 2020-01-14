const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patientSchema = new Schema({
  name: String,
  nationalNumber: Number,
  address: String,
  phoneNumber: { type: Number, required: true },
  birthDate: Date,
  disease: String,
  surgeriesHistory: String,
  futureSurgeries: String,
  surgeryDate: Date
});

mongoose.model("patient", patientSchema);
