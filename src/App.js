import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar1 from "./components/navbar1";
import Navbar2 from "./components/navbar2";
import Landingpage from "./pages/Landingpage";
import Productpage from "./pages/Productpage";
import Computers from "./pages/Computer";
import Xerox from "./pages/Xerox";
import Cloud from "./pages/Cloud";
import Security from "./pages/Security";
import Services from "./pages/Services";
import Checkout from "./pages/Checkout";
import Admin from "./pages/Admin";
import Shipping from "./pages/Shipping";
import IndividualProduct from "./pages/IndividualProduct";
import AdminEditProduct from "./pages/AdminEditProduct";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar1 />
        <Navbar2 />
        <Route exact path="/" component={Landingpage} />
        <Route exact path="/product" component={Productpage} />
        <Route exact path="/computer" component={Computers} />
        <Route exact path="/xerox" component={Xerox} />
        <Route exact path="/cloud" component={Cloud} />
        <Route exact path="/security" component={Security} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/item" component={IndividualProduct} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/shipping" component={Shipping} />
        <Route exact path="/edit" component={AdminEditProduct} />
      </div>
    </Router>
  );
}

export default App;
