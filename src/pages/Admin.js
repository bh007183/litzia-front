import React, { useEffect, useState } from "react";
import M, { Modal } from "materialize-css";

import axios from "axios";

export default function Admin() {
  const [product, setProduct] = useState({
    title: "",
    image: "",
    description: "",
    InventoryItem: "",
    category: "",
    subCategory: "",
    price: "",
    quantity: "",
    tier: "",
    featured: "",
    updatedBy: "",
    tax: "",
    shipping: "",
  });


  useEffect(() => {

    if(window.location.pathname === "/admin" && localStorage.getItem("Auth2")  !== "true"){
      window.location.replace("/");
      alert("Must Be logged in!")
    }
   
  },[])

  


  function createProduct(product) {
    return axios.post("https://localhost:3005/api/product", product, {
      headers: { authorization: "Bearer: " + localStorage.getItem("Auth") },
    }).catch(err => alert("You either entered an item title that already exists or you are not authorized to creat products"));
  }

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setProduct({ ...product, [name]: value });
  };
 

  const handleFormSubmit = (event) => {
    event.preventDefault();

    createProduct(product).then((res) => console.log(res));
  };

  let widget = window.cloudinary.createUploadWidget(
    {
      cloudName: "dc29vpvut",
      uploadPreset: "sm6o0is3",
    },
    (error, result) => {
      if (result.event === "success") {
        console.log(result.info.url);
        setProduct({ ...product, image: result.info.url });
      }
    }
  );

  return (
  
    <div className="">
      <div className="container" id="admin-container">
        <div className="row">
          <div className="col m4 s6">
            <input
              onChange={handleInputChange}
              placeholder=" title"
              name="title"
              value={product.title}
              className="admin-input admin-top-row"
            ></input>
          </div>
          <div className="col m4 s6">
            <input
              onChange={handleInputChange}
              placeholder="category"
              name="category"
              value={product.category}
              className="admin-input admin-top-row"
            ></input>
          </div>
          <div className="col m4 s6">
            <input
              onChange={handleInputChange}
              placeholder="subCategory"
              name="subCategory"
              value={product.subCategory}
              className="admin-input admin-top-row"
            ></input>
          </div>

          <br />
          <div className="row">
            <div className="col s12 m12">
              <textarea
                onChange={handleInputChange}
                placeholder="description"
                name="description"
                value={product.description}
                id="admin-description"
              ></textarea>
            </div>
          </div>
          <div className="row">
            <div className="col s6 m4">
              <input
                onChange={handleInputChange}
                placeholder="price"
                name="price"
                value={product.price}
                className="admin-input"
              ></input>
            </div>
            <div className="col s6 m4">
              <input
                onChange={handleInputChange}
                placeholder="tier"
                name="tier"
                value={product.tier}
                className="admin-input"
              ></input>
            </div>
            <div className="col s12 m4">
              <input
                onChange={handleInputChange}
                placeholder="featured"
                name="featured"
                value={product.featured}
                className="admin-input"
              ></input>
            </div>
            <div className="row">
              <div className="col s12 m4">
                <input
                  onChange={handleInputChange}
                  placeholder="tax"
                  name="tax"
                  value={product.tax}
                  className="admin-input"
                ></input>
              </div>
              <div className="col s12 m4">
                <input
                  onChange={handleInputChange}
                  placeholder="shipping"
                  name="shipping"
                  value={product.shipping}
                  className="admin-input"
                ></input>
              </div>
              <div className="col m3 s12">
                <button
                  id="upload_widget"
                  className="cloudinary-button"
                  onClick={() => widget.open()}
                >
                  Product Image
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col s12 m4">
                <input
                  onChange={handleInputChange}
                  placeholder="InventoryItem"
                  name="InventoryItem"
                  value={product.InventoryItem}
                  className="admin-input"
                ></input>
              </div>
              <div className="col s12 m4">
                <input
                  onChange={handleInputChange}
                  placeholder="updatedBy"
                  name="updatedBy"
                  value={product.updatedBy}
                ></input>
              </div>
              <div className="col s12 m4">
                <input
                  onChange={handleInputChange}
                  placeholder="quantity"
                  name="quantity"
                  value={product.quantity}
                ></input>
              </div>
            </div>
          </div>
        </div>
        <a
          className="waves-effect waves-light btn"
          onClick={handleFormSubmit}
          id="admin-additem"
        >
          <i className="material-icons right">add</i>Add Item
        </a>
        
      </div>
      
    </div>
  );
}
