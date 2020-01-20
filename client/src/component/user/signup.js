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
import { FiUserPlus } from "react-icons/fi";
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
          <MDBCol md="5" className="m-auto">
            <MDBCard className="p-2">
              <MDBCardBody>
                <form onSubmit={e => this.handleSubmit(e)}>
                  <MDBCardHeader
                    className="form-header rounded "
                    style={{ backgroundColor: "white", color: "black" }}
                  >
                    <h3 className="my-3 text-center">
                      <FiUserPlus /> Sign up
                    </h3>
                  </MDBCardHeader>
                  <div className="grey-text my-3"></div>
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
                    style={{
                      backgroundColor: "#71c9ce",
                      padding: "6px",
                      width: "200px",
                      margin: "20px 100px",
                      borderRadius: "1rem",
                      borderColor: "transparent"
                    }}
                  >
                    Sign up{" "}
                  </button>
                  <MDBModalFooter>
                    <div className="font-weight-light">
                      <Link to="/signin">
                        <strong>Have account ? Sign In</strong>
                      </Link>
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
