import axios from "axios";

export default {
  addCart: function (title) {
    return axios.post("https://l-z-mount-bjh.herokuapp.com/api/cart", title, {
      headers: { authorization: "Bearer: " + localStorage.getItem("Auth") },
    });
  },

  updateQTY: function (quantity) {
    return axios.put("https://l-z-mount-bjh.herokuapp.com/api/cart/", quantity, {
      headers: { authorization: "Bearer: " + localStorage.getItem("Auth") },
    });
  },

  myCart: function () {
    return axios.post("https://l-z-mount-bjh.herokuapp.com/api/cart/items", {
      headers: { authorization: "Bearer: " + localStorage.getItem("Auth") },
    });
  },

  removeFromCart: function (id) {
    return axios.delete("https://l-z-mount-bjh.herokuapp.com/api/cart/items/" + id);
  },
};
