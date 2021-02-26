import React, { useEffect } from "react";
import "./style.css";

function Product(props) {
  return (
    <div className="product">
      {/* <div className="row"> */}
      <div className="col s12 m4">
        <div className="card">
          <div className="card-image">
            <img src={props.src} height="200" width="200" />
          </div>
          <div className="card-content">
            <span className="card-title">{props.identifier}</span>
            <p>{props.description}</p>
          </div>
          <button>{props.id}</button>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Product;
