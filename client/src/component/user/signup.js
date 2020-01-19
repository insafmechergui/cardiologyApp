import React, { Component } from "react";
import userService from "../../services/userService";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBCardHeader
} from "mdbreact";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      matricule: "",
      password: ""
    };
    // this.onChange = this.onChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    userService
      .signup(this.state)
      .then(res => {
        console.log("connected", res);
        this.props.history.push("/signin");
      })
      .catch(err => console.log("err", err));
  }

  render() {
    return (
      <MDBContainer className="containerSign">
        <MDBRow className="signn2">
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <form onSubmit={e => this.handleSubmit(e)}>
                  <MDBCardHeader
                    className="form-header rounded "
                    style={{ backgroundColor: "#bc5090", color: "white" }}
                  >
                    <h3 className="my-3">Sign Up:</h3>
                  </MDBCardHeader>
                  <div className="grey-text"></div>
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="name"
                      name="name"
                      value={this.state.name}
                      onChange={e => {
                        this.onChange(e);
                      }}
                    />
                  </div>
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
                    Sign Up
                  </button>
                  <MDBModalFooter>
                    <div className="font-weight-light">
                      <Link to="/signin">Have account ? Sign In</Link>
                    </div>
                  </MDBModalFooter>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
export default SignUp;
