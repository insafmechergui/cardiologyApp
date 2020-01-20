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

import {
  Button,
  Card,
  Form,
  Row,
  FormGroup,
  Col,
  Alert
} from "react-bootstrap";
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
      password: "",
      alert: { state: false, text: "", variant: "" }
    };
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      alert: { ...this.state.alert, state: false }
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    userService.signin(this.state).then(res => {
      if (res) {
        localStorage.setItem("token", res.token);
        this.setState({
          alert: { state: true, text: res.data, variant: "danger" }
        });
      }
      this.props.history.push("/allPatient");
      window.location.reload();
    });
  }

  render() {
    return (
      <div>
        <MDBContainer className="containerSign">
          <MDBRow className="signn ">
            <MDBCol md="4" className="m-auto">
              <MDBCard className="p-2">
                <MDBCardBody>
                  <MDBCardHeader
                    className="form-header rounded "
                    style={{ backgroundColor: "white", color: "black" }}
                  >
                    <h3 className="my-3 text-center">
                      <MDBIcon icon="lock" /> Sign in
                    </h3>
                  </MDBCardHeader>

                  <form
                    onSubmit={e => {
                      this.handleSubmit(e);
                    }}
                  >
                    <div className="form-group my-3">
                      <label>Registration Number</label>
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
                      className="my-3"
                      style={{
                        backgroundColor: "#71c9ce",
                        padding: "6px",
                        width: "200px",
                        marginLeft: "50px",
                        borderRadius: "1rem",
                        borderColor: "transparent"
                      }}
                    >
                      Log In{" "}
                    </button>
                  </form>
                  <MDBModalFooter>
                    <div className="font-weight-light">
                      <Link to="/signup">
                        <strong>New doctor ? Sign Up</strong>
                      </Link>
                    </div>
                  </MDBModalFooter>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}
export default Login;
