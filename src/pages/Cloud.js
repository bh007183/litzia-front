import React from "react";
import Product from "../components/product";
import Sortby from "../components/sortby";
import Sidebar from "../components/sidebar";

function Cloud() {
  return (
    <div className="container">
      <div className="row" id="app-row">
        <div className="col s3">
          <Sidebar />
        </div>
        <div className="col s9">
          <div className="container" id="header-container">
            <h2 className="product-header">Cloud</h2>
          </div>
          <Sortby />
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Cloud;
