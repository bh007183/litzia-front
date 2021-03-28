import React, {useState, useMemo} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar1 from "./components/navbar1";
import Navbar2 from "./components/navbar2";
import Landingpage from "./pages/Landingpage";
// import Productpage from "./pages/Productpage";
import Computers from "./pages/Computer";
import Xerox from "./pages/Xerox";
import Cloud from "./pages/Cloud";
import Security from "./pages/Security";
import Services from "./pages/Services";
import Checkout from "./pages/Checkout";
import Admin from "./pages/Admin";
import Shipping from "./pages/Shipping";
import AdminEditProduct from "./pages/AdminEditProduct";
import IndividualProduct from "./pages/IndividualProduct";
import Confirmation from "./pages/Confirmation";
import "./App.css";
import { ContextSearch } from "./pages/ContextSearch";
import SearchPage from "./pages/SearchPage";

function App() {

  const [searchItem, setSearchItem] = useState({
    search: [],
    searchResults: "",
  });


  const memo = useMemo(() => ({searchItem, setSearchItem}), [searchItem, setSearchItem])
  

  return (
    <Router>
      <div className="App">
        <ContextSearch.Provider value={memo} >
        <Navbar1 />
        
        

        
        {/* <Navbar1 /> */}
        <Navbar2 />
        <Route exact path="/searchresults" component={SearchPage} />
        </ContextSearch.Provider>
        
        <Route exact path="/" component={Landingpage} />
        {/* <Route exact path="/product" component={Productpage} /> */}
        <Route exact path="/computer" component={Computers} />
        <Route exact path="/xerox" component={Xerox} />
        <Route exact path="/software" component={Cloud} />
        <Route exact path="/security" component={Security} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/item" component={IndividualProduct} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/shipping" component={Shipping} />
        <Route exact path="/edit" component={AdminEditProduct} />
        <Route exact path="/confirmation" component={Confirmation} />
      </div>
    </Router>
  );
}

export default App;
