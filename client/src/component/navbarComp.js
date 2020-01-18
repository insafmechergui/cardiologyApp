import React from "react";
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

import * as jwt_decode from "jwt-decode";

import Home from "./home";
import AddPatient from "./patient/addPatient";
import ShowPatient from "./patient/showPatient";
import UpdatePatient from "./patient/updatePatient";
import Login from "./user/signin";
import Signup from "./user/signup";
import { decode } from "jsonwebtoken";
class Navbarcomp extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      matricule: ""
    };
  }
  componentDidMount() {
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
        <MDBNavbar color="default-color" dark expand="md" className="navv">
          <MDBNavbarBrand>
            <Link to="/">
              <strong className="white-text">Cardiology RBK App</strong>
            </Link>
          </MDBNavbarBrand>
          <MDBCollapse id="navbarCollapse3" navbar>
            {!localStorage.token ? (
              <MDBNavbarNav left>
                <MDBNavItem className="navButton">
                  <Link to="/signup">Signup</Link>
                </MDBNavItem>
                <MDBNavItem className="navButton">
                  <Link to="/signin">Signin</Link>
                </MDBNavItem>
              </MDBNavbarNav>
            ) : (
              <MDBNavbarNav left>
                <MDBNavItem className="navButton">
                  <Link to="/addPatient">Add Patient</Link>
                </MDBNavItem>
                <MDBNavItem className="navButton">
                  <Link to="/allPatient">Show Patient</Link>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <div className="d-none d-md-inline">
                        {this.state.name}
                      </div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="dropdown-default">
                      <MDBDropdownItem>{this.state.matricule}</MDBDropdownItem>
                      <MDBDropdownItem>
                        <a href="" onClick={this.logOut.bind(this)}>
                          <Link to="/">Logout</Link>
                        </a>
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
            )}
          </MDBCollapse>
        </MDBNavbar>
      </div>
    );
  }
}

export default Navbarcomp;
