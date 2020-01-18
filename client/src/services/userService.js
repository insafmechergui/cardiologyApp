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
      .then(res => console.log("Registered!"))
      .catch(err => err);
  },
  //signin
  signin: user => {
    return axios
      .post("/api/signin", {
        matricule: user.matricule,
        password: user.password
      })
      .then(res =>
        //  res
        {
          localStorage.setItem("token", res.data);
          return res.data;
        }
      )
      .catch(err => console.log(err));
  },
  //signout
  signout: user => {
    return axios
      .post("/api/signout", { user })
      .then(res => res)
      .catch(err => err);
  }
};
