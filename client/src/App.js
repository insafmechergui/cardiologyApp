import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddPatient from "./component/patient/addPatient";
function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <Router>
        <AddPatient></AddPatient>
      </Router>
    </div>
  );
}

export default App;
