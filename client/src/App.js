import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap";

import AddPatient from "./component/patient/addPatient";
import ShowPatient from "./component/patient/showPatient";
import UpdatePatient from "./component/patient/updatePatient";
import login from "./component/user/signin";
import signup from "./component/user/signup";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: {
        name: "",
        id: ""
      }
    };
  }
  showName(id, name) {
    var id = localStorage.getItem("token");
    this.setState({
      userInfo: {
        id: id,
        name
      }
    });
  }
  render() {
    return (
      <div className="App">
        <p>name:{localStorage.getItem("token")}</p>
        <Router>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Signin</Link>
          <Link to="/addPatient">Add Patient</Link>
          <Link to="/showPatient">Show Patient</Link>
          <Link to="/updatePatient">Update Patient</Link>

          {/* <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="signup" title="Signup">
              <Link to="/signup">Signup</Link>
            </Tab>
            <Tab eventKey="signin" title="Signin">
              <Link to="/login">Signin</Link>
            </Tab>
            <Tab eventKey="addPatient" title="Add Patient">
              <Link to="/addPatient">Add Patient</Link>
            </Tab>
            <Tab eventKey="showPatient" title="Show Patient">
              <Link to="/showPatient">Show Patient</Link>
            </Tab>
            <Tab eventKey="updatePatient" title="Update Patient">
              <Link to="/updatePatient">Update Patient</Link>
            </Tab>
          </Tabs> */}
          <Route exact path="/addPatient" component={AddPatient} />
          <Route exact path="/showPatient" component={ShowPatient} />
          <Route exact path="/updatePatient" component={UpdatePatient} />
          <Route exact path="/login" component={login} />
          <Route exact path="/signup" component={signup} />
        </Router>
      </div>
    );
  }
}

export default App;
