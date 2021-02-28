import axios from "axios";

export default {

    addCart: function (title) {
        return axios.post("http://localhost:3005/api/cart" ,title,{headers: { authorization: "Bearer: " + localStorage.getItem("Auth") }}
        )
      },

    myCart: function () {
        return axios.post("http://localhost:3005/api/cart/items" , {headers: { authorization: "Bearer: " + localStorage.getItem("Auth") }}
        )
      },

}