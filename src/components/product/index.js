import React, { useEffect } from "react";
import "./style.css";

function Product(props) {
  return (
    <div className="product">
      {/* <div className="row"> */}
      <div className="col s12 m6 l4 product-margin">
        <div className="card product-card hoverable" id="buttonContain">
          <div className="card-image">
            <img className="product-image" src={props.src} />
          </div>
          <div className="card-content">
            <span className="card-title">{props.identifier}</span>
            <p>{props.description}</p>
          </div>
          <div className="row">
            <div className="col s12">
              <button
                className="btn btn-large viewBtn primaryView"
                onClick={props.findProduct}
                style={{textAlign:"center"}}
                data-id={props.id}
              >
                {/* {" "} */}
                View
              </button>
              {localStorage.getItem("Auth2") === "true" &&
              window.location.pathname === "/edit" ? (
                <button
                  className="btn btn-large  primaryDelette"
                  onClick={props.deleteProduct}
                  data-id={props.id}
                  style={{textAlign:"center"}}
                >
                  Delete
                </button>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Product;
