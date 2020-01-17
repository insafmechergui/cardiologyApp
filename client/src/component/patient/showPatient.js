import React from "react";
import { Table, Form, FormControl } from "react-bootstrap";
import patientService from "../../services/patientService";
import { MdDelete, MdEdit } from "react-icons/md";
import {
  Route,
  Link,
  BrowserRouter as Router,
  Redirect
} from "react-router-dom";
import Update from "./updatePatient";

class ShowPatient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patient: [],
      search: ""
    };
    this.delete = this.delete.bind(this);
  }
  componentDidMount() {
    this.displayPatients();
  }
  displayPatients() {
    patientService.showPatient().then(res => {
      this.setState({
        patient: res.data
      });
    });
  }
  delete(id) {
    console.log(id);
    patientService.deletePatient(id).then(res => {
      this.displayPatients();
      document.getElementById("dddd").textContent = "Patient deleted";
    });
    // let delet = this.state.patient.filter(pat => {
    //   return;
    // });
  }
  onchange(e) {
    this.setState({
      search: e.target.value
    });
  }
  render() {
    let filterPatient = this.state.patient.filter(pat => {
      return (
        pat.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      );
    });
    return (
      <div>
        <Form
          inline
          style={{ display: "block", float: "right", margin: "20px" }}
        >
          <FormControl
            placeholder="Search for..."
            value={this.state.search}
            onChange={this.onchange.bind(this)}
          />
        </Form>
        {/* <form>
          <input
            placeholder="Search for..."
            value={this.state.search}
            onChange={this.onchange.bind(this)}
            // name="search"
          /> */}
        {/* <p>{this.state.search}</p> */}
        {/* </form> */}
        <Table responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>National Number</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Birth Date</th>
              <th>Disease</th>
              <th>Surgeries History</th>
              <th>Future Surgeries</th>
              <th>Surgery Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filterPatient.map(pat => {
              return (
                <tr>
                  <td>{pat.name}</td>
                  <td>{pat.nationalNumber}</td>
                  <td>{pat.address}</td>
                  <td>{pat.phoneNumber}</td>
                  <td>{pat.birthDate}</td>
                  <td>{pat.disease}</td>
                  <td>{pat.surgeriesHistory}</td>
                  <td>{pat.futureSurgeries}</td>
                  <td>{pat.surgeryDate}</td>
                  <td>
                    <Link to={`/updatePatient/?id=${pat.nationalNumber}`}>
                      <MdEdit
                        onClick={() => {
                          localStorage.setItem("id", pat.nationalNumber);
                          // <Redirect to="/update" />;
                        }}
                      />
                    </Link>
                  </td>
                  <td>
                    <MdDelete onClick={() => this.delete(pat.nationalNumber)} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <div id="dddd"></div>
      </div>
    );
  }
}
export default ShowPatient;
