import React, { Component } from "react";
import userService from "../../services/userService";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput
} from "mdbreact";
import { Button, Card, Form, Row, FormGroup, Col } from "react-bootstrap";
import {
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  CardHeader,
  CardBody
} from "reactstrap";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matricule: "",
      password: ""
    };
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    userService.signin(this.state).then(res => {
      if (res) {
        localStorage.setItem("token", res.token);
      }
      this.props.history.push("/allPatient");
      window.location.reload();
    });
  }

  render() {
    return (
      <MDBContainer className="containerSign">
        <MDBRow className="signn">
          <MDBCol md="4">
            <MDBCard>
              <MDBCardBody>
                <MDBCardHeader
                  className="form-header rounded "
                  style={{ backgroundColor: "#bc5090", color: "white" }}
                >
                  <h3 className="my-3">
                    <MDBIcon icon="lock" /> Login:
                  </h3>
                </MDBCardHeader>
                <form
                  onSubmit={e => {
                    this.handleSubmit(e);
                  }}
                >
                  <div className="form-group">
                    <label>Matricule</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Matricule"
                      name="matricule"
                      value={this.state.matricule}
                      onChange={e => {
                        this.onChange(e);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                      name="password"
                      value={this.state.password}
                      onChange={e => {
                        this.onChange(e);
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      backgroundColor: "#003f5c",
                      color: "white",
                      padding: "10px",
                      width: "200px",
                      borderRadius: "10px"
                    }}
                  >
                    Log In{" "}
                  </button>
                </form>
                <MDBModalFooter>
                  <div className="font-weight-light">
                    <Link to="/signup">New doctor ? Sign Up</Link>
                  </div>
                </MDBModalFooter>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
export default Login;
