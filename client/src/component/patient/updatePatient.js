import React from "react";
import { Table } from "react-bootstrap";
import patientService from "../../services/patientService";
import { MdDelete, MdEdit } from "react-icons/md";
import { Form, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";

class UpdatePatient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      nationalNumber: "",
      address: "",
      image: "",
      phoneNumber: "",
      birthDate: "",
      disease: "",
      surgeriesHistory: "",
      futureSurgeries: "",
      surgeryDate: "",
      patient: []
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onChange(e) {
    // console.log(e.target.value);
    this.setState({
      patient: { ...this.state.patient, [e.target.name]: e.target.value }
    });
  }
  componentDidMount() {
    var id = localStorage.getItem("id");
    patientService.onePatient(id).then(res => {
      this.setState({
        patient: res.data
      });
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    var id = localStorage.getItem("id");
    patientService.updatePatient(id, this.state.patient).then(result => {
      console.log(result);
    });

    this.props.history.push("/allPatient");
    window.location.reload();
  }
  render() {
    return (
      <div>
        <Form.Group controlId="exampleForm.ControlInputName">
          <img
            src={this.state.patient.image}
            className="img-fluid patImage"
            style={{ float: "right", marginRight: "50px" }}
          />
        </Form.Group>

        <Form onSubmit={e => this.handleSubmit(e)} className="formm">
          <div>
            <h3>
              Update Patient:{" "}
              <em style={{ color: "#3282b8" }}>{this.state.patient.name}</em>
            </h3>
            <Form.Group controlId="exampleForm.ControlInputName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                // placeholder={this.state.patient.name}
                name="name"
                value={this.state.patient.name}
                onChange={e => {
                  this.onChange(e);
                }}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInputNationalNumber">
              <Form.Label>National Number</Form.Label>
              <Form.Control
                type="number"
                // placeholder={this.state.patient.nationalNumber}
                name="nationalNumber"
                value={this.state.patient.nationalNumber}
                onChange={e => {
                  this.onChange(e);
                }}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInputAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                // placeholder={this.state.patient.address}
                name="address"
                value={this.state.patient.address}
                onChange={e => {
                  this.onChange(e);
                }}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInputPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="number"
                // placeholder={this.state.patient.phoneNumber}
                name="phoneNumber"
                value={this.state.patient.phoneNumber}
                onChange={e => {
                  this.onChange(e);
                }}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInputBirthDate">
              <Form.Label>Birth Date</Form.Label>
              <Form.Control
                type="date"
                name="birthDate"
                value={this.state.patient.birthDate}
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
                value={this.state.patient.disease}
                onChange={e => {
                  this.onChange(e);
                }}
                // placeholder={this.state.patient.disease}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSurgeriesHistory">
              <Form.Label>Surgeries History</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                name="surgeriesHistory"
                value={this.state.patient.surgeriesHistory}
                onChange={e => {
                  this.onChange(e);
                }}
                // placeholder={this.state.patient.surgeriesHistory}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlFutureSurgeries">
              <Form.Label>Future Surgeries</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                name="futureSurgeries"
                value={this.state.patient.futureSurgeries}
                onChange={e => {
                  this.onChange(e);
                }}
                // placeholder={this.state.patient.futureSurgeries}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInputSurgeryDate">
              <Form.Label>Surgery Date</Form.Label>
              <Form.Control
                type="datetime-local"
                name="surgeryDate"
                value={this.state.patient.surgeryDate}
                onChange={e => {
                  this.onChange(e);
                }}
              />
            </Form.Group>
            <button
              type="submit"
              style={{
                backgroundColor: "#40bfc1",
                color: "white",
                padding: "10px",
                borderRadius: "10px"
              }}
            >
              Update Patient
            </button>
          </div>
        </Form>
      </div>
    );
  }
}
export default UpdatePatient;
