const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = mongoose.model("user");

// const auth = (req, res, next) => {
//   const token = req.body.token;
//   if (token !== null) {
//     jwt.verify(token, "secret", (err, decoded) => {
//       if (err) {
//         return res
//           .status(401)
//           .send({ error: "Not authorized to access this resource" });
//       }
//       User.findOne({ _id: decoded._id, "tokens.token": token }, (err, user) => {
//         if (err) console.log(err);
//         if (!user) {
//           throw new Error();
//         }
//         req.user = user;
//         req.token = token;
//         next();
//       });
//     });
//   } else {
//     res.status(404).send("no token");
//   }
// };
const auth = (req, res, next) => {
  const token = req.header("Authorization").replace("Bearer ", "");
  //   console.log(token);
  const data = jwt.verify(token, "secret");
  try {
    const user = User.findOne({
      matricule: data.matricule,
      "tokens.token": token
    });
    if (!user) {
      res.json(error);
    }
    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    res.status(401).send({ error: "Not authorized to access this resource" });
  }
};

module.exports = auth;
