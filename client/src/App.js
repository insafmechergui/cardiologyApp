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
import AddPatient from "./component/patient/addPatient";
import ShowPatient from "./component/patient/showPatient";
import UpdatePatient from "./component/patient/updatePatient";
import Login from "./component/user/signin";
import Signup from "./component/user/signup";
import Signout from "./services/userService";
class App extends React.Component {
  constructor() {
    super();

    this.id = localStorage.getItem("token");
    this.name = localStorage.getItem("name");
  }

  signOutUser() {
    console.log(this.name);
    Signout.signout(this.name).then(res => {
      console.log(res);
    });
    //   // if (res.data.deleted === "success") {
    //   //   localStorage.removeItem("token");
    //   //   localStorage.removeItem("name");
    // localStorage.clear();
    //   // } else {
    //   //   console.log("not deleted");
    //   // }
    //   console.log(res);
    // })
    // .catch(err => console.log(err));
    // .then(res => console.log(res));
  }

  render() {
    return (
      <div className="App">
        <Router>
          <MDBNavbar color="default-color" dark expand="md">
            <MDBNavbarBrand>
              <strong className="white-text">Cardiology RBK App</strong>
            </MDBNavbarBrand>
            <Navbar bg="light" expand="lg" id="notInclude">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                {!localStorage.getItem("token") ? (
                  <Nav className="mr-auto">
                    {/* <p>name:{localStorage.getItem("token")}</p> */}
                    <Nav.Link href="#link">
                      <Link to="/signup">Signup</Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link to="/signin">Signin</Link>
                    </Nav.Link>
                  </Nav>
                ) : (
                  <Nav className="mr-auto">
                    <Nav.Link>
                      <Link to="/addPatient">Add Patient</Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link to="/">Show Patient</Link>
                    </Nav.Link>

                    <NavDropdown title={this.name} id="basic-nav-dropdown">
                      <NavDropdown.Item
                        onClick={() => {
                          this.signOutUser();
                        }}
                      >
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                )}
              </Navbar.Collapse>
            </Navbar>
            <Route exact path="/" component={ShowPatient} />
            <Route exact path="/addPatient" component={AddPatient} />
            <Route exact path="/updatePatient" component={UpdatePatient} />
            <Route exact path="/signin" component={Login} />
            <Route exact path="/signup" component={Signup} />
            {/* <Route
            exact
            path="/login"
            component={name => {
              return <Login showName={() => this.showName()} />;
            }}
          /> */}
          </MDBNavbar>
        </Router>
      </div>
    );
  }
}

export default App;

{
  /* <Nav.Link href="#link">
  <Link to="/updatePatient">Update Patient</Link>
</Nav.Link> */
}

{
  /* <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item> */
}
