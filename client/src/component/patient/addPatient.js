import React from "react";
import { Form, Button } from "react-bootstrap";
import { IoMdPersonAdd } from "react-icons/io";
import patientService from "../../services/patientService";

class AddPatient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      nationalNumber: "",
      address: "",
      phoneNumber: "",
      birthDate: "",
      disease: "",
      surgeriesHistory: "",
      futureSurgeries: "",
      surgeryDate: ""
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    // if (patientService.onePatient(this.state.nationalNumber) !== null){}else{console.log("err")}
    patientService
      .addPatient(this.state)
      .then(res => console.log("res", res))
      .catch(err => console.log("err", err));
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div>
        <Form onSubmit={e => this.handleSubmit(e)}>
          <Form.Group controlId="exampleForm.ControlInputName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="name"
              name="name"
              value={this.state.name}
              onChange={e => {
                this.onChange(e);
              }}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInputNationalNumber">
            <Form.Label>National Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="National Number"
              name="nationalNumber"
              value={this.state.nationalNumber}
              onChange={e => {
                this.onChange(e);
              }}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInputAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="address"
              name="address"
              value={this.state.address}
              onChange={e => {
                this.onChange(e);
              }}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInputPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Phone Number"
              name="phoneNumber"
              value={this.state.phoneNumber}
              onChange={e => {
                this.onChange(e);
              }}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInputBirthDate">
            <Form.Label>Birth Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={this.state.date}
              onChange={e => {
                this.onChange(e);
              }}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlDisease">
            <Form.Label>Disease</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              name="disease"
              value={this.state.disease}
              onChange={e => {
                this.onChange(e);
              }}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSurgeriesHistory">
            <Form.Label>Surgeries History</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              name="surgeriesHistory"
              value={this.state.surgeriesHistory}
              onChange={e => {
                this.onChange(e);
              }}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlFutureSurgeries">
            <Form.Label>Future Surgeries</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              name="futureSurgeries"
              value={this.state.futureSurgeries}
              onChange={e => {
                this.onChange(e);
              }}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInputSurgeryDate">
            <Form.Label>Surgery Date</Form.Label>
            <Form.Control
              type="datetime-local"
              name="surgeryDate"
              value={this.state.surgeryDate}
              onChange={e => {
                this.onChange(e);
              }}
            />
          </Form.Group>
          <input type="submit" />
        </Form>
      </div>
    );
  }
}
export default AddPatient;
