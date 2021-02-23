import React from "react";
import Header from "../components/header";
import Product from "../components/product";
import Sortby from "../components/sortby";
import Sidebar from "../components/sidebar";

function Productpage() {
  return (
    <div className="container">
      <div className="row" id="app-row">
        <div className="col s3">
          <Sidebar />
        </div>
        <div className="col s9">
          <Header />
          <Sortby />
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Productpage;
