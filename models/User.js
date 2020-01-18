const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");

const userSchema = new Schema({
  name: String,
  matricule: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  tokens: [
    {
      token: {
        type: String,
        required: true
      }
    }
  ]
});

// const generateAuthToken = (user, callback) => {
//   jwt.sign(
//     { userId: user._id },
//     "secret",
//     { expiresIn: "90m" },
//     (err, token) => {
//       if (err) throw err;
//       user.tokens = user.tokens.concat({ token });
//       user
//         .save()
//         .then(user => callback(user, token))
//         .catch(err => {
//           throw err;
//         });
//     }
//   );
// };

userSchema.methods.generateAuthToken = function() {
  // Generate an auth token for the user
  const user = this;
  const token = jwt.sign(
    {
      matricule: user.matricule,
      userId: user._id
    },
    "secret",
    { expiresIn: "86400" }
  );
  user.tokens = user.tokens.concat({ token });
  user.save();
  return token;
};

mongoose.model("user", userSchema);
// exports.generateAuthToken = generateAuthToken;
