import React from "react";
import CartButton from "../components/CartButton";
import Recommended from "../components/Recommended";
import "../App.css";
import "./style.css";

function IndividualProduct(props) {
  return (
    <div id="singleProduct">
      <div className="row" id="rowID">
        <div className="col s12 m3">
          <div>
            <img
              style={{ border: "none" }}
              src={props.src}
              className="itemImage"
            ></img>
          </div>
        </div>
        <div className="col s12 m6">
          <div>
            <h3>{props.title}</h3>
            <div id="itemDescription">
              <p>{props.description}</p>
            </div>
          </div>
        </div>
        <div className="col s12 m3">
          <p>{props.tax}</p>
          <p>{props.shipping}</p>
          <div id="priceDiv">${props.price}</div>
          <div className="cartDiv">
            <a onClick={props.addToCardProduct} className="addToCart">
              Add to Cart
            </a>
          </div>
          {/* <h5>You may also like...</h5>
                    <Recommended /> */}
        </div>
      </div>
    </div>
  );
}

export default IndividualProduct;
