import React, { useState, useEffect } from "react";

import Checkoutrelated from "../components/checkoutrelated";
import API from "../api/cart-routes";
import CartAPI from "../api/cart-routes";

function Checkout() {
  const [checkout, setCheckout] = useState({
    isNotCustomer: "",
  });
  const [checkoutitems, setCheckoutItems] = useState({
    cartDisplay: [],
    cartTotal: [],
    arrayOfPrice: [],
  });


  const removeCartItem = (event) => {
    document
      .getElementById(event.target.attributes[0].value)
      .classList.add("hide");
    console.log(event.target.attributes[0].value);
    CartAPI.removeFromCart(event.target.attributes[0].value).then((res) =>
      console.log(res)
    );
  };

  useEffect(() => {
    setCheckout({ isNotCustomer: localStorage.getItem("Auth2") });
    API.myCart()
      .then((res) => {
        const arr = [];
        let pricesarray = [];
        console.log(res);
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].totalCost !== null) {
            pricesarray = res.data[i].totalCost;
          } else {
            pricesarray = res.data[i].price;
          }
          arr.push(pricesarray);
          console.log(arr);
        }

      let counter = 0;
      for(let i = 0; i < arr.length; i++){
        counter += parseInt(arr[i])
      }
      setCheckoutItems({...checkoutitems, cartTotal: counter})
        setCheckoutItems({
          ...checkoutitems,
          cartTotal: counter,
          cartDisplay: res.data,
          arrayOfPrice: arr,
        });
      })
      .catch((err) => alert("Please Login To View Your Cart" + err));
  }, []);


  const dummyFunction = (event) => {
    API.updateQTY(checkoutitems.cartDisplay).then((res) => {
      console.log(res);
      let counter = 0;
      for(let i = 0; i < res.data.length; i++){
        counter += parseInt(res.data[i])
      }
      setCheckoutItems({...checkoutitems, cartTotal: counter})
    });
  };


  const handleInputChangeItems = (event) => {
    dummyFunction();
    const name = event.target.name;
    const value = event.target.value;
    const cartCopy = checkoutitems.cartDisplay.slice();
    cartCopy.map((item) => {
      if (item.title === name) {
        item.quantity = parseInt(value);
        item.totalCost = item.quantity * item.price;

      }
      return item;
    });
  };

  return (
    <div>
      <form>
        <div className="row" id="checkout-row">
          <div className="col s12 m9">
            <div className="container" id="checkout-container">
              <h3 id="your-cart">Your Cart</h3>
              <div className="row">
                <div className="col s3 underline">Product</div>
                <div className="col s3 underline">Quantity</div>
                <div className="col s3 underline">Price</div>
                <div className="col s3"></div>
                <div>
                  <p>Cart Total = $ {checkoutitems.cartTotal}</p>
                </div>
              </div>
              {checkoutitems.cartDisplay.length ? (
                checkoutitems.cartDisplay.map(
                  (items, idx) =>
                    console.log(checkoutitems[items.title]) || (
                      <div className="row" id={items.id} key={items.id}>
                        <div className="col s3">
                          <p>{items.title}</p>
                        </div>
                        <div className="col s3 input-field">
                          <input
                            onChange={handleInputChangeItems}
                            defaultValue="1"
                            value={checkoutitems.cartDisplay[idx].quantity}
                            name={items.title}
                            id="quantity"
                            type="text"
                            className="validate"
                          />
                        </div>

                        <div className="col s3">
                          <p>
                            ${items.price * items.quantity || items.price * 1}
                          </p>
                        </div>
                        <div className="col s3">
                          <a
                            href="#"
                            id="delete-button"
                            onClick={removeCartItem}
                          >
                            <i
                              data-id={items.id}
                              className="material-icons left"
                              id="clear-icon"
                            >
                              clear
                            </i>
                          </a>
                        </div>
                      </div>
                    )
                )
              ) : (
                <h1>No Items In Cart</h1>
              )}
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {/* <Checkoutrelated /> */}
          </div>
          <div className="col s12 m3">
            {checkout.isNotCustomer === "false" ? (
              <div>
                <h4 id="summary">Order Summary</h4>
                <a
                  onClick={() => (window.location.href = "/shipping")}
                  className="waves-effect waves-light btn"
                >
                  Checkout
                </a>
              </div>
            ) : (
              <p>Please Login To Checkout</p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
