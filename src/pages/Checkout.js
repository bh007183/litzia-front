import React, {useState, useEffect} from "react";
import Checkoutbar from "../components/Checkoutbar";
import Checkoutitems from "../components/checkoutitems";
import Checkoutrelated from "../components/checkoutrelated";
import API from "../api/cart-routes"

function Checkout() {

  const [checkout, setCheckout] = useState({
    isNotCustomer: ""
  })
  const [checkoutitems, setCheckoutItems] = useState({
    cartDisplay: []
  })
  
  useEffect(() => {
    setCheckout({isNotCustomer: localStorage.getItem("Auth2")})
    API.myCart()
    .then(res => setCheckoutItems({...checkoutitems , cartDisplay: res.data}))
    .catch(err => console.error(err))

    
  }, [])



  return (
    <div>
      <form>
        <div className="row" id="checkout-row">
          <div className="col s12 m9">
            {checkoutitems.cartDisplay.map(items => <Checkoutitems 
            key={items.id}
            id={items.id}
            title={items.title}
            description={items.description}
            price={items.price}
            /> )}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Checkoutrelated />
          </div>
          <div className="col s12 m3">
          {checkout.isNotCustomer === "false" ? <Checkoutbar /> : <p>Please Login To Checkout</p>}
        </div>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
