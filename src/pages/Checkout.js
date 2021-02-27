import React, {useState, useEffect} from "react";
import Checkoutbar from "../components/Checkoutbar";
import Checkoutitems from "../components/checkoutitems";
import Checkoutrelated from "../components/checkoutrelated";

function Checkout() {

  const [checkout, setCheckout] = useState({
    isNotCustomer: ""
  })
  
  useEffect(() => {
    setCheckout({isNotCustomer: localStorage.getItem("Auth2")})
  }, [])

  return (
    <div>
      <div className="row" id="checkout-row">
        <div className="col s12 m9">
          <Checkoutitems />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Checkoutrelated />
        </div>
        <div className="col s12 m3">
          {checkout.isNotCustomer === null ? <Checkoutbar /> : <p>Please Login To Checkout</p>}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
