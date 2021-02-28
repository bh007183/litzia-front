import React from "react";
import "./style.css";

function Checkoutitems(props) {
  return (
    <div>
      <div className="container" id="checkout-container">
        <h3 id="your-cart">Your Cart</h3>
        <div className="row">
          <div className="col s3 underline">Product</div>
          <div className="col s3 underline">Quantity</div>
          <div className="col s3 underline">Price</div>
          <div className="col s3"></div>
        </div>
        <div className="row">
          <div className="col s3">
            <p>{props.title}</p>
          </div>
          <div className="col s3 input-field">
            <input defaultValue="0"id="quantity" type="text" className="validate" />
          </div>
          <div className="col s3">
            <p>${props.price}</p>
          </div>
          <div className="col s3">
            <a href="#" id="delete-button">
              <i className="material-icons left" id="clear-icon">
                clear
              </i>
            </a>
          </div>
        </div>
        <hr></hr>
      </div>
    </div>
  );
}

export default Checkoutitems;
