import React from "react";
import Checkoutbar from "../components/Checkoutbar";
import Checkoutitems from "../components/checkoutitems";
import Checkoutrelated from "../components/checkoutrelated";

function Checkout() {
  return (
    <div>
      <form>
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
            <Checkoutbar />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
