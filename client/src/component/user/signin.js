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
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    // userService
    //   .signin(this.state)
    //   .then(res => {
    //     console.log("connected");
    //     return res;
    //   })
    //   .then(datta => {
    //     //this.props.showName();
    //   })
    //   .catch(err => console.log("err", err));

    userService.signin(this.state).then(res => {
      if (res) {
        localStorage.setItem("token", res.token);
        // localStorage.setItem("name", res.doctor);
        this.props.history.push("/allPatient");
      }
    });
  }

  render() {
    return (
      <MDBContainer className="containerSign">
        <MDBRow className="signn">
          <MDBCol md="4">
            <MDBCard>
              <MDBCardBody>
                <MDBCardHeader className="form-header rounded">
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

                  <input
                    type="submit"
                    value="Log In"
                    className="btn btn-primary btn-block"
                  />
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
