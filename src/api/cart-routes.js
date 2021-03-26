import axios from "axios";

export default {
  addCart: function (title) {
    return axios.post("https://litzia-b.herokuapp.com/api/cart", title, {
      headers: { authorization: "Bearer: " + localStorage.getItem("Auth") },
    });
  },

  updateQTY: function (quantity) {
    return axios.put("https://litzia-b.herokuapp.com/api/cart/", quantity, {
      headers: { authorization: "Bearer: " + localStorage.getItem("Auth") },
    });
  },

  myCart: function () {
    return axios.post("https://litzia-b.herokuapp.com/api/cart/items", {
      headers: { authorization: "Bearer: " + localStorage.getItem("Auth") },
    });
  },

  removeFromCart: function (id) {
    return axios.delete("https://litzia-b.herokuapp.com/api/cart/items/" + id);
  },

  EmptyCart: function () {
    return axios.delete("https://litzia-b.herokuapp.com/api/emptycart",{
      headers: { authorization: "Bearer: " + localStorage.getItem("Auth") },
    });
  },


};
