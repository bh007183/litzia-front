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

  const [editItem, setEditItem] = useState({
    searchToEdit: "",
  });

  function createProduct(product) {
    return axios.post("http://localhost:3005/api/product", product, {
      headers: { authorization: "Bearer: " + localStorage.getItem("Auth") },
    });
  }

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setProduct({ ...product, [name]: value });
  };
  const handleInputChangeEdit = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setEditItem({ ...editItem, [name]: value });
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
      <div className="container">
        <div className="row">
          <div className="col m4 s6">
            <input
              onChange={handleInputChange}
              placeholder=" title"
              name="title"
              value={product.title}
            ></input>
          </div>
          <div className="col m4 s6">
            <input
              onChange={handleInputChange}
              placeholder="category"
              name="category"
              value={product.category}
            ></input>
          </div>
          <div className="col m4 s6">
            <input
              onChange={handleInputChange}
              placeholder="subCategory"
              name="subCategory"
              value={product.subCategory}
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
              ></input>
            </div>
            <div className="col s6 m4">
              <input
                onChange={handleInputChange}
                placeholder="tier"
                name="tier"
                value={product.tier}
              ></input>
            </div>
            <div className="col s12 m4">
              <input
                onChange={handleInputChange}
                placeholder="featured"
                name="featured"
                value={product.featured}
              ></input>
            </div>
            <div className="row">
              <div className="col s6 m4">
                <input
                  onChange={handleInputChange}
                  placeholder="tax"
                  name="tax"
                  value={product.tax}
                ></input>
              </div>
              <div className="col s6 m4">
                <input
                  onChange={handleInputChange}
                  placeholder="shipping"
                  name="shipping"
                  value={product.shipping}
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
              <div className="col s6 m4">
                <input
                  onChange={handleInputChange}
                  placeholder="InventoryItem"
                  name="InventoryItem"
                  value={product.InventoryItem}
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
      </div>
      <button onClick={handleFormSubmit}> Add Item</button>
      <hr></hr>
      <hr></hr>
      /////////
      <div className="">
        <h5>Edit Item</h5>
        <div className="row">
          
        <button> Submit Edit</button>
      </div>
      </div>
    </div>
  );
}
