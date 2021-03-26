import React from "react";
import axios from "axios";

export default {
  //////future development.///////

  // createAdmin: function (a, b, c){
  //     return axios.post("http://localhost:3005/api/admin", {
  //         username: a,
  //         password: b,
  //         email: c,
  //         admin: false
  //     })
  // },

  adminLogin: function (a, b) {
    return axios.post("https://litzia-b.herokuapp.com/admin/login", {
      username: a,
      password: b,
    });
  },

  //////if session is active////////
  adminUpdate: function (a, b, c) {
    return axios.update("https://litzia-b.herokuapp.com/admin/:id", {
      username: a,
      password: b,
      email: c,
    });
  },
};
