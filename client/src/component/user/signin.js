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
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //   name: "",
      matricule: "",
      password: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    userService
      .signin(this.state)
      .then(res => {
        console.log("connected");
        return res.data;
      })
      .then(datta => {
        localStorage.setItem("token", datta.token);
        localStorage.setItem("name", datta.doctor);
        //this.props.showName();
      })
      .catch(err => console.log("err", err));
    this.props.history.push("/");
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <MDBContainer className="containerSign">
        <MDBRow>
          <MDBCol md="4">
            <MDBCard>
              <MDBCardBody>
                <MDBCardHeader className="form-header deep-blue-gradient rounded">
                  <h3 className="my-3">
                    <MDBIcon icon="lock" /> Login:
                  </h3>
                </MDBCardHeader>
                <form onSubmit={e => this.handleSubmit(e)} className="signn">
                  {/* <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="your name"
            name="name"
            value={this.state.name}
            onChange={e => {
              this.onChange(e);
            }}
          />
        </div> */}
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

                  <input type="submit" className="btn btn-primary btn-block" />
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
