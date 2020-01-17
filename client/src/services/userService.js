import axios from "axios";
export default {
  //signup
  signup: user => {
    return axios
      .post("/api/signup", {
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
      .post("/api/signin", {
        // name: user.name,
        matricule: user.matricule,
        password: user.password
      })
      .then(res => res)
      .catch(err => err);
  },
  //signout
  signout: user => {
    return axios
      .post("/api/signout", { user })
      .then(res => res)
      .catch(err => err);
  }
};
