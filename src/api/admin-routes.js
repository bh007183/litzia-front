import React from 'react'
import axios from "axios"

export default {
    
createAdmin: function (a, b, c){
    return axios.post("http://localhost:8080/api/admin", {
        username: a,
        password: b,
        email: c,
    })
},

adminLogin: function (a, b){
    return axios.post("http://localhost:8080/api/admin/login", {
        username: a,
        password: b
    })
},


//////if session is active////////
adminUpdate: function (a, b, c) {
    return axios.update("http://localhost:8080/api/admin/:id",{
        username: a,
        password: b,
        email: c,


    })
}, 
   
}



const [admin, setadmin] = useState ({
    username: '',
    password: '',
    email: '',
    
  })


   const handleInputChange = event => {

    const name = event.target.name;
    const value = event.target.value;

    setproduct({
      ...product, [name]: value
    })
     
   }
   
const submitHandler = event => {
  event.preventDefault()
  API.createProduct(product.title, product.image, product.description, product.category, product.price, product.quantity, product.tier, product.fetured).then(res => console.log(res))
  // API.createProduct()
  

}