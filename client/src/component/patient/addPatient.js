import React from "react";
import { Form, Button } from "react-bootstrap";
import { MdPersonAdd } from "react-icons/md";
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
  }
  hundleSubmit(event) {
    event.preventDefault();
    console.log("front");
    patientService
      .addPatient(this.state)
      .then(res => console.log("res", res))
      .catch(err => console.log("err", err));
  }
  render() {
    return (
      <div>
        <Form onSubmit={e => this.handleSubmit(e)}>
          <Form.Group controlId="exampleForm.ControlInputName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="name" name="name" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInputNationalNumber">
            <Form.Label>National Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="National Number"
              name="nationalNumber"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInputAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="address" name="address" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInputPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Phone Number"
              name="phoneNumber"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInputBirthDate">
            <Form.Label>Birth Date</Form.Label>
            <Form.Control type="date" name="date" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlDisease">
            <Form.Label>Disease</Form.Label>
            <Form.Control as="textarea" rows="3" name="disease" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSurgeriesHistory">
            <Form.Label>Surgeries History</Form.Label>
            <Form.Control as="textarea" rows="3" name="surgeriesHistory" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlFutureSurgeries">
            <Form.Label>Future Surgeries</Form.Label>
            <Form.Control as="textarea" rows="3" name="futureSurgeries" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInputSurgeryDate">
            <Form.Label>SurgeryDate</Form.Label>
            <Form.Control type="datetime-local" name="surgeryDate" />
          </Form.Group>
          <Button variant="success">
            <MdPersonAdd />
          </Button>
        </Form>
      </div>
    );
  }
}
export default AddPatient;
