const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  matricule: { type: String, unique: true, required: true },
  password: { type: String, required: true }
  //   tokens: [{ token: { type: String, required: true } }]
});

mongoose.model("user", userSchema);
