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
import * as jwt_decode from "jwt-decode";
import { decode } from "jsonwebtoken";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      matricule: ""
    };
  }
  componentWillMount() {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwt_decode(token);
      this.setState({
        name: decoded.name,
        matricule: decoded.matricule
      });
    }
  }
  logOut(e) {
    e.preventDefault();
    localStorage.clear();
    this.setState({
      name: "",
      matricule: ""
    });
  }
  render() {
    return (
      <div className="App">
        <Router>
          <MDBNavbar
            style={{
              // backgroundColor: "#003f5c",
              backgroundColor: "#71c9ce",
              // position: "sticky",
              position: "sticky",
              height: "80px",
              width: "100%",
              top: "-5px",
              // lineHeight: "5px",
              textTransform: "uppercase"
            }}
            dark
            expand="md"
            className="navv"
          >
            <MDBNavbarBrand className="  home">
              <Link to="/" className=" navButton">
                <img
                  src="http://icons.iconarchive.com/icons/graphicloads/medical-health/256/heart-beat-icon.png"
                  id="logo"
                />
                <strong className="txt">Cardiology/ Heart Disease App</strong>
              </Link>
            </MDBNavbarBrand>
            <MDBCollapse id="navbarCollapse3" navbar>
              {!localStorage.token ? (
                <MDBNavbarNav left style={{ marginBottom: "20px" }}>
                  <MDBNavItem className=" navButton heightnav">
                    <Link to="/signup" className=" navButton hoverLink">
                      Signup
                    </Link>
                  </MDBNavItem>
                  <MDBNavItem className="navButton heightnav">
                    <Link to="/signin" className="navButton hoverLink">
                      Signin
                    </Link>
                  </MDBNavItem>
                </MDBNavbarNav>
              ) : (
                <MDBNavbarNav>
                  <MDBNavbarNav left>
                    <MDBNavItem className="navButton heightnav">
                      <Link to="/addPatient" className=" navButton hoverLink">
                        Add Patient
                      </Link>
                    </MDBNavItem>
                    <MDBNavItem className="navButton heightnav">
                      <Link to="/allPatient" className=" navButton hoverLink">
                        Show Patient
                      </Link>
                    </MDBNavItem>
                  </MDBNavbarNav>
                  <MDBNavbarNav right>
                    <MDBNavItem>
                      <MDBDropdown>
                        <MDBDropdownToggle nav caret style={{ margin: "10px" }}>
                          <span className="white-text ">
                            <MDBIcon icon="user" />
                            {"  " + this.state.name}
                          </span>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu className="dropdown-default">
                          <MDBDropdownItem style={{ padding: "10px" }}>
                            {" "}
                            {this.state.matricule}
                          </MDBDropdownItem>
                          <MDBDropdownItem
                            style={{ padding: "10px" }}
                            href=""
                            onClick={this.logOut.bind(this)}
                          >
                            <Link to="/" className="navButton ">
                              Logout
                            </Link>
                          </MDBDropdownItem>
                        </MDBDropdownMenu>
                      </MDBDropdown>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBNavbarNav>
              )}
            </MDBCollapse>
          </MDBNavbar>
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
