const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

//import Routes
require("./routes/userRoutes")(app);
require("./routes/patientRoutes")(app);

mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || `mongodb://localhost:27017/cardioPatient`,
  //   process.env.MONGODB_URI || `mongodb://localhost:27017/cardioPatient`,

  { useUnifiedTopology: true, useNewUrlParser: true }
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
