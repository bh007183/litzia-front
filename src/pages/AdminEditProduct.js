import React, { useEffect, useState } from "react";
import M, { Modal } from "materialize-css";
import API from "../api/product-routes";
import Product from "../components/product";

import axios from "axios";

export default function AdminEditProduct() {
  const [product, setProduct] = useState({
    results: [],
    id: "",
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
  /////////////////////Edit Item Search//////////////////////////////////
  const [editItem, setEditItem] = useState({
    searchToEdit: "",
  });
  //////////////////////////Admin Edit Protected Route////////////////////////
  function editProduct(product) {
    return axios.put(
      "http://localhost:3005/api/product/update",
      product,
      {
        headers: { authorization: "Bearer: " + localStorage.getItem("Auth") },
      }
    );
  }
  /////////////////////////////////////////////////////////////////////////////
  const findProduct = (event) => {
    API.getOneProductPage(event.target.dataset.id).then((res) =>
      setProduct({
        ...product,
        id: res.data.id,
        title: res.data.title,
        image: res.data.image,
        description: res.data.description,
        InventoryItem: res.data.InventoryItem,
        category: res.data.category,
        subCategory: res.data.subCategory,
        price: res.data.price,
        quantity: res.data.quantity,
        tier: res.data.tier,
        featured: res.data.featured,
        updatedBy: res.data.updatedBy,
        tax: res.data.tax,
        shipping: res.data.shipping,
      })
      
    );
    window.scrollTo(0, 0)
  };
  ///////////////////////Handle Edit Submit/////////////////////////////////
  const handleFormSubmit = (event) => {
    event.preventDefault();
    editProduct(product).then((res) => console.log(res));
  };
  /////////////////////////Input Handle for Edit Form//////////////////////////
  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setProduct({ ...product, [name]: value });
  };

  /////////////////////////////////////////////////////////////////////////////
  const deleteProduct = (event) => {
    API.deleteOneProduct(event.target.dataset.id).then((res) =>
      res.status !== 200
        ? alert("There has been an error")
        : (window.location.location = "/fourohone")
    );
  };
  ////////////////////////Input Hnadle for Edit Search/////////////////////////
  const handleInputChangeEditSearch = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setEditItem({ ...editItem, [name]: value });
  };
  //////////////////////////////////////////////////////////////////////////
  ///////////////////////Handle Edit Search/////////////////////////////////

  const handleFormSearch = (event) => {
    event.preventDefault();
    API.getOneProductSearch(editItem.searchToEdit).then((res) =>
      setProduct({ ...product, results: res.data })
    );
  };

  ///////////Relocates if not logged in//////////////////
  useEffect(() => {
    if (
      window.location.pathname === "/edit" &&
      localStorage.getItem("Auth2") !== "true"
    ) {
      window.location.replace("/");
      alert("Must Be logged in!");
    }
  }, []);
  //////////////////////////////////////////////////////////////////////////
  ////////////////////Cloudinary//////////////////////////
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
  ///////////////////////////////////////////////////////////////
  return (
    <div className="">
      <div className="container" id="admin-container">
        <div className="row">
          <div className="col m4 s6">
            <input
              onChange={handleInputChangeEditSearch}
              placeholder="Search Item To Edit"
              name="searchToEdit"
              value={editItem.searchToEdit}
              className="admin-input admin-top-row"
            ></input>
            <button
              className="waves-effect waves-light btn"
              id="admin-additem"
              onClick={handleFormSearch}
            >
              Search Item By Name
            </button>
          </div>
        </div>
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
          <i className="material-icons right">add</i>Edit Item
        </a>

        {product.results.map((item) => (
          <Product
            key={item.id}
            src={item.image}
            category={item.category}
            identifier={item.title}
            description={item.description.substring(0, 75) + "..."}
            id={item.id}
            findProduct={findProduct}
            deleteProduct={deleteProduct}
          />
        ))}
      </div>
    </div>
  );
}
