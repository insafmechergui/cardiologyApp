import React from "react";
import { Table, Form, FormControl } from "react-bootstrap";
import patientService from "../../services/patientService";
import { MdDelete, MdEdit, MDSearch } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
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
      // document.getElementById("dddd").textContent = "Patient deleted";
    });
  }
  onchange(e) {
    this.setState({
      search: e.target.value
    });
  }
  todayDate() {}
  render() {
    let filterPatient = this.state.patient.filter(pat => {
      return (
        pat.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      );
    });
    // var date = new Date().getDate(); //Current Date
    // var month = new Date().getMonth() + 1; //Current Month
    // var year = new Date().getFullYear(); //Current Year
    // var hours = new Date().getHours(); //Current Hours
    // var min = new Date().getMinutes(); //Current Minutes
    // var sec = new Date().getSeconds(); //Current Seconds
    var tempDate = new Date();
    var date =
      tempDate.getFullYear() +
      "-" +
      (tempDate.getMonth() + 1) +
      "-" +
      tempDate.getDate() +
      " " +
      (tempDate.getHours() - 1) +
      ":" +
      tempDate.getMinutes();
    const currDate = "Current Date= " + date;
    return (
      <div className="p-3">
        <Form
          inline
          style={{
            float: "right",
            margin: "8px 0px"
          }}
        >
          {/* <FaSearch /> */}
          <FormControl
            placeholder="Search for..."
            value={this.state.search}
            onChange={this.onchange.bind(this)}
            style={{
              width: "300px"
            }}
          />
        </Form>
        <Table responsive className="text-center">
          <thead>
            <tr>
              <th>Patient Image</th>
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
                  <td>
                    <img
                      className="patImage2"
                      src={pat.image}
                      alt="patientImage"
                    />
                  </td>
                  <td>{pat.name}</td>
                  <td>{pat.nationalNumber}</td>
                  <td>{pat.address}</td>
                  <td>{pat.phoneNumber}</td>
                  <td>{pat.birthDate}</td>
                  <td>{pat.disease}</td>
                  <td>{pat.surgeriesHistory}</td>
                  <td>{pat.futureSurgeries}</td>
                  <td>{pat.surgeryDate}</td>
                  {/* {currDate}
                  {currDate < pat.surgeryDate ? (
                    <td>
                      <strong style={{ color: "red" }}>
                        Still time for Surgery
                      </strong>
                    </td>
                  ) : (
                    <td>
                      <strong style={{ color: "green" }}>
                        Surgery is Done
                      </strong>
                    </td>
                  )} */}
                  <td>
                    <Link to={`/updatePatient/?id=${pat.nationalNumber}`}>
                      <MdEdit
                        onClick={() => {
                          localStorage.setItem("id", pat.nationalNumber);
                        }}
                        style={{
                          color: "#21bf73",
                          fontSize: "16pt"
                        }}
                      />
                    </Link>

                    <Link className="pl-4">
                      <MdDelete
                        onClick={() => this.delete(pat.nationalNumber)}
                        style={{ color: "#ff6361", fontSize: "16pt" }}
                      />
                    </Link>
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
