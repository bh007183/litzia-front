import React, { useEffect, useState } from "react";
import axios from "axios"
import M, { Modal } from "materialize-css";
import API from "../../api/admin-routes"

function CreateItem() {


    const [product, setProduct] = useState ({
    title: "", 
    image: "", 
    customerDescription: "", 
    InventoryItem: "", 
    category: "",
    price: "",
    cost: "",
    QuantityInStock: "",
    tier: "",
    fetured: "",
    updatedBy: "",

    })

     function createProduct (a){
        return axios.post("http://localhost:8080/api/product", a
     , {headers: {authorization: 'Bearer: ' + localStorage.getItem("Authorization")}})}
      
    const handleInputChange = event => {
        const name = event.target.name
        const value = event.target.value

       setProduct({...product, [name]: value})

    }

    const handleFormSubmit = event => {
        event.preventDefault()
        
       createProduct(product).then(res => console.log(res))
        

    }
    // product.title, product.image, product.customerDescription, product.inventoryItem, product.category, product.price, product.cost, product.quantityInStock, product.tier, product.fetured, product.updatedBy

    useEffect(() => {
        var elems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(elems);
    }, [])
    return (
        <div className="">
            <div className="container center" id='modalLog'>
                <a href="#modal1" className="btn btn-large transparent modal-trigger" id="loginBtn">AddItem</a>
            </div>

            <div id="modal1" className="modal ">
                <input onChange={handleInputChange} placeholder= " title" name="title" value={product.title}></input>
                <input onChange={handleInputChange} placeholder= "image" name="image" value={product.image}></input>
                <input onChange={handleInputChange} placeholder= "customerDescription" name="customerDescription" value={product.customerDescription}></input>
                <input onChange={handleInputChange} placeholder= "InventoryItem" name="InventoryItem" value={product.InventoryItem}></input>
                <input onChange={handleInputChange} placeholder= "category" name="category" value={product.category}></input>
                <input onChange={handleInputChange} placeholder= "price" name="price" value={product.price}></input>
                <input onChange={handleInputChange} placeholder= "cost" name="cost" value={product.cost}></input>
                <input onChange={handleInputChange} placeholder= "QuantityInStock" name="QuantityInStock" value={product.QuantityInStock}></input>
                <input onChange={handleInputChange} placeholder= "tier" name="tier" value={product.value}></input>
                <input onChange={handleInputChange} placeholder= "fetured" name="fetured" value={product.fetured}></input>
                <input onChange={handleInputChange} placeholder= "updatedBy" name="updatedBy" value={product.updatedBy}></input>
                <button onClick={handleFormSubmit}> Your Face </button>
            </div>
            
        </div>

    );
}

export default CreateItem;
