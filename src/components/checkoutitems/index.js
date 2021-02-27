import React from "react";
import "./style.css";

function Checkoutitems() {
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
            <p>Product</p>
          </div>
          <div className="col s3 input-field">
            <input id="quantity" type="text" className="validate" />
            <label for="quantity"></label>
          </div>
          <div className="col s3">
            <p>$15.99</p>
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
        <div className="row">
          <div className="col s3">
            <p>Product</p>
          </div>
          <div className="col s3 input-field">
            <input id="quantity" type="text" className="validate" />
            <label for="quantity"></label>
          </div>
          <div className="col s3">
            <p>$15.99</p>
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
