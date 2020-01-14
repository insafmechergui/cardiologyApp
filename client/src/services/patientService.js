import axios from "axios";
export default {
  //add patient
  addPatient: patient => {
    return axios
      .post("/api/addPatient", {
        name: patient.name,
        nationalNumber: patient.nationalNumber,
        address: patient.address,
        phoneNumber: patient.phoneNumber,
        birthDate: patient.birthDate,
        disease: patient.disease,
        surgeriesHistory: patient.surgeriesHistory,
        futureSurgeries: patient.futureSurgeries,
        surgeryDate: patient.surgeryDate
      })
      .then(response => response)
      .catch(error => error);
  },
  //display patient
  showPatient: () => {
    console.log("service");
    return axios
      .get("/api/allPatient")
      .then(res => res)
      .catch(err => err);
  }
};
