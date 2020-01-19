const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");

const patientSchema = new Schema({
  name: String,
  nationalNumber: Number,
  address: String,
  image: {
    type: String,
    required: false

    // validate: value => {
    //   if (!validator.isURL(value)) {
    //     throw new Error({ error: "Invalid URL address" });
    //   }
    // }
  },
  phoneNumber: { type: Number, required: true },
  birthDate: Date,
  disease: String,
  surgeriesHistory: String,
  futureSurgeries: String,
  surgeryDate: Date
});

mongoose.model("patient", patientSchema);
