import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar1 from "./components/navbar1";
import Navbar2 from "./components/navbar2";
import Productpage from "./pages/Productpage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar1 />
        <Navbar2 />
        <Route exact path="/product" component={Productpage} />
      </div>
    </Router>
  );
}

export default App;
