import axios from "axios";

export default {
  // logs in user
  login: function (loginInfo) {
    return axios.post("/users/login", loginInfo);
  },

  // signs up user, then logs them in
  signup: function (signupInfo) {
    return axios.post("/users/signup", signupInfo);
  },

  // checks to see if user is logged in, then returns the user
  isLoggedIn: function () {
    return axios.get("/users/profile");
  },

  // checks to see if the user is logged in and and admin, then returns the user
  isAdmin: function () {
    return axios.get("/users/logout")
  },

  // logs out the user
  logout: function () {
    return axios.get("/users/logout")
  },


};