import React, { useEffect } from "react";
import "./style.css";
import API from "../../api/product-routes"

function Product(props) {

  
  return (
    <div className="product">
      {/* <div className="row"> */}
      <div className="col s12 m4">
        <div className="card">
          <div className="card-image">
            <img src={props.src} height="200" width="400" />
          </div>
          <div className="card-content">
            <span className="card-title">{props.identifier}</span>
            <p>{props.description}</p>
          </div>
          <button onClick={props.findProduct} data-id={props.id}>{props.id}</button>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Product;
