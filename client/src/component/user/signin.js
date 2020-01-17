import React, { Component } from "react";
import userService from "../../services/userService";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
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
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)} class="signn">
        <h3>Sign In</h3>
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
        <Link to="/signup">Signup</Link>
      </form>
    );
  }
}
export default Login;
