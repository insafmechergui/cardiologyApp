import axios from "axios";
export default {
  //signup
  signup: user => {
    return axios
      .post("/api/signupDoctor", {
        name: user.name,
        matricule: user.matricule,
        password: user.password
      })
      .then(res => res)
      .catch(err => err);
  },
  //signin
  signin: user => {
    return axios
      .post("/api/signinDoctor", {
        // name: user.name,
        matricule: user.matricule,
        password: user.password
      })
      .then(res => res)
      .catch(err => err);
  }
};
