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
  MDBModalFooter
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
                  <p className="h4 text-center py-4">Sign Up</p>
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
                  <input
                    type="submit"
                    value="Sign Up"
                    className="btn btn-primary btn-block"
                  />
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
