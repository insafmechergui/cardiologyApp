import axios from "axios";
export default {
  //add patient
  addPatient: patient => {
    return axios
      .post("/api/addPatient", {
        name: patient.name,
        nationalNumber: patient.nationalNumber,
        address: patient.address,
        image: patient.image,
        phoneNumber: patient.phoneNumber,
        birthDate: patient.birthDate,
        disease: patient.disease,
        surgeriesHistory: patient.surgeriesHistory,
        futureSurgeries: patient.futureSurgeries,
        surgeryDate: patient.surgeryDate
      })
      .then(res => res)
      .catch(err => err);
  },
  //display patient
  showPatient: () => {
    return axios
      .get("/api/allPatient")
      .then(res => res)
      .catch(err => err);
  },
  //display one patient
  onePatient: id => {
    return axios
      .get("http://localhost:5000/api/onePatient/" + id)
      .then(res => res);
  },
  //update patient
  updatePatient: (id, patient) => {
    return axios
      .post("http://localhost:5000/api/updatePatient/" + id, {
        name: patient.name,
        nationalNumber: patient.nationalNumber,
        address: patient.address,
        image: patient.image,
        phoneNumber: patient.phoneNumber,
        birthDate: patient.birthDate,
        disease: patient.disease,
        surgeriesHistory: patient.surgeriesHistory,
        futureSurgeries: patient.futureSurgeries,
        surgeryDate: patient.surgeryDate
      })
      .then(res => res)
      .catch(err => err);
  },

  //delete
  deletePatient: id => {
    return axios
      .delete("http://localhost:5000/api/deletePatient/" + id)
      .then(res => res)
      .catch(err => err);
  }
};
