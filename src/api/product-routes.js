import axios from "axios"

export default {
createProduct: function (a, b, c, d, e, f, g, h){
   return axios.post("/api/product", {
    title: a,
    image: b,
    description: c,
    category: d,
    price: e,
    quantity: f,
    tier: g,
    fetured: h,
})},

getAllProduct: function (){
    return axios.get("/api/product")
},

getAllProductCategory: function (category){
    return axios.get("/api/product/" + category)
},

getAllProductFetured: function (fetured){
    return axios.get("/api/product/" + fetured)
},

deleteOneProduct: function (title){
    return axios.delete("/api/product/" + title)
},
updateOneProduct: function (title){
    return axios.put("/api/product/" + title)
}


}