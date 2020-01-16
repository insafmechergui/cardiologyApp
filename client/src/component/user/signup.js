import React, { Component } from "react";
import userService from "../../services/userService";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      matricule: "",
      password: ""
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    userService
      .signup(this.state)
      .then(res => console.log("connected", res))
      .catch(err => console.log("err", err));
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)} class="signn">
        {console.log(this.state)}
        <h3>Sign Up</h3>
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
        <input type="submit" className="btn btn-primary btn-block " />
      </form>
    );
  }
}
export default SignUp;
