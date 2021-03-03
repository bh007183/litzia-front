import axios from "axios";

export default {
  addCart: function (title) {
    return axios.post("http://localhost:3005/api/cart", title, {
      headers: { authorization: "Bearer: " + localStorage.getItem("Auth") },
    });
  },

  updateQTY: function (id) {
    return axios.put("http://localhost:3005/api/cart/", {
      headers: { authorization: "Bearer: " + localStorage.getItem("Auth") },
    });
  },

  myCart: function () {
    return axios.post("http://localhost:3005/api/cart/items", {
      headers: { authorization: "Bearer: " + localStorage.getItem("Auth") },
    });
  },

  removeFromCart: function (id) {
    return axios.delete("http://localhost:3005/api/cart/items/" + id);
  },
};
