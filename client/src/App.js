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
import { Tabs, Tab, Button, Navbar, Nav, NavDropdown } from "react-bootstrap";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon
} from "mdbreact";
import Home from "./component/home";
import AddPatient from "./component/patient/addPatient";
import ShowPatient from "./component/patient/showPatient";
import UpdatePatient from "./component/patient/updatePatient";
import Navbarcomp from "./component/navbarComp";
import Login from "./component/user/signin";
import Signup from "./component/user/signup";
import Signout from "./services/userService";
import CountdownTimer from "../src/component/datetime";
import Countdown from "react-countdown-now";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Navbarcomp />
          {/* <CountdownTimer /> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/allPatient" component={ShowPatient} />
          <Route exact path="/addPatient" component={AddPatient} />
          <Route exact path="/updatePatient" component={UpdatePatient} />
          <Route exact path="/signin" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Router>
      </div>
    );
  }
}

export default App;
