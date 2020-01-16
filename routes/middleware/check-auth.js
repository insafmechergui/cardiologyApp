const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = mongoose.model("user");

module.exports = (req, res, next) => {
  //  const token = req.body.token;
  //   if (token !== null) {
  //     jwt.verify(req.body.token, "secret", (err, decoded) => {
  //       if (err) {
  //         return res
  //           .status(401)
  //           .send({ error: "Not authorized to access this resource" });
  //       }
  //     });
  //     User.findOne({ _id: decoded._id, "tokens.token": token }, (err, user) => {
  //       if (err) console.log(err);
  //       if (!user) {
  //         throw new Error();
  //       }
  //       req.user = user;
  //       req.token = token;
  //       next();
  //     });
  //   } else {
  //     res.status(404).send("no token");
  //   }
  try {
    const decoded = jwt.verify(req.body.token, "secret");
    req.userData = decoded;
    naxt();
  } catch (error) {
    return res.status(401).json({
      message: "Auth failed"
    });
  }
};
