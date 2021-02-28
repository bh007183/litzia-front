import React, {useState, useEffect} from "react";
import "./style.css";


function Checkoutitems(props) {

  const [checkout, setCheckout] = useState({
    itemCost: "1"

  })

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setCheckout({ ...checkout, [name]: value });
  };



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
            <input onChange={handleInputChange} value={checkout.itemCost} name="itemCost" id="quantity" type="text" className="validate" />
          </div>
          <div className="col s3">
           <p>${props.price * checkout.itemCost}</p>
          </div>
          <div className="col s3">
            <a href="#"  id="delete-button" onClick={props.removeCartItem}>
              <i  data-id={props.id} className="material-icons left" id="clear-icon">
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
