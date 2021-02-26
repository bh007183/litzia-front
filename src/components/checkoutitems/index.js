import React from "react";
import "./style.css";

function Checkoutitems() {
  return (
    <div>
      <div className="container" id="checkout-container">
        <h3 id="your-cart">Your Cart</h3>
        <div className="row">
          <div className="col s4">
            <p>Product</p>
          </div>
          <div className="col s4">
            <p>1</p>
          </div>
          <div className="col s4">
            <p>$15.99</p>
          </div>
        </div>
        <hr></hr>
        <div className="row">
          <div className="col s4">
            <p>Product</p>
          </div>
          <div className="col s4">
            <p>1</p>
          </div>
          <div className="col s4">
            <p>$15.99</p>
          </div>
        </div>
        <hr></hr>
        <div className="row">
          <div className="col s4">
            <p>Product</p>
          </div>
          <div className="col s4">
            <p>1</p>
          </div>
          <div className="col s4">
            <p>$15.99</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkoutitems;
