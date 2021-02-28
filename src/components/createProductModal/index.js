import React, { useEffect, useState } from "react";
import axios from "axios";
import M, { Modal } from "materialize-css";
import API from "../../api/admin-routes";
import dotenv from "dotenv";
import "./style.css"
dotenv.config();

function CreateItem() {
  const [product, setProduct] = useState({
    title: "",
    image: "",
    description: "",
    category: "",
    price: "",
    quantity: "",
    tier: "",
    featured: "",
    tax: "",
    shipping: "",
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

  const handleFormSubmit = (event) => {
    event.preventDefault();

    createProduct(product).then((res) => console.log(res));
  };
  //////

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

  ///////

  useEffect(() => {
    var elems = document.querySelectorAll(".dropdown-trigger");
    M.Dropdown.init(elems);
    var elems = document.querySelectorAll(".modal");
    M.Modal.init(elems);
  }, []);
  return (

<div className=" center">

    <a className='dropdown-trigger btn-large adminHamberger' href='#' data-target='dropdown2'><i className="material-icons">menu</i></a>

   
    <ul id='dropdown2' className='dropdown-content'>
      <li><a href="#!"onClick={()=> {localStorage.clear(); window.location.reload()}}>LOGOUT</a></li>
      <li><a style={{marginRight: "0px"}}href="#modal1"
          className="btn btn-large white modal-trigger"
          id="loginBtn">AddItem</a></li>
    </ul>
    <div className="">
     

      <div id="modal1" className="modal " style={{width: "100vw"}}>
        <input
          onChange={handleInputChange}
          placeholder=" title"
          name="title"
          value={product.title}
        ></input>
        <button
          id="upload_widget"
          className="cloudinary-button"
          onClick={() => widget.open()}
        >
          Upload files
        </button>
        <input
          onChange={handleInputChange}
          placeholder="description"
          name="description"
          value={product.description}
        ></input>
        <input
          onChange={handleInputChange}
          placeholder="category"
          name="category"
          value={product.category}
        ></input>
        <input
          onChange={handleInputChange}
          placeholder="price"
          name="price"
          value={product.price}
        ></input>
        <input
          onChange={handleInputChange}
          placeholder="quantity"
          name="quantity"
          value={product.quantity}
        ></input>
        <input
          onChange={handleInputChange}
          placeholder="tier"
          name="tier"
          value={product.tier}
        ></input>
        <input
          onChange={handleInputChange}
          placeholder="featured"
          name="featured"
          value={product.featured}
        ></input>
        <input
          onChange={handleInputChange}
          placeholder="tax"
          name="tax"
          value={product.tax}
        ></input>
        <input
          onChange={handleInputChange}
          placeholder="shipping"
          name="shipping"
          value={product.shipping}
        ></input>
        <button onClick={handleFormSubmit}> Your Face </button>
      </div>
    </div>
    </div>
  );
}

export default CreateItem;
