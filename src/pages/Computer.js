import React, { useState, useEffect } from "react";
import Product from "../components/product";
import Sortby from "../components/sortby";
import Sidebar from "../components/sidebar";
import API from "../api/product-routes";

function Computers() {
  const [items, setItems] = useState({
    item: [],
  });

  useEffect(() => {
    // setItems([1, 2, 3]);
    API.getAllProduct().then((res) => {
      console.log(res);
      setItems({ item: res.data });
    });
  }, []);

  return (
    <div className="container page-container">
      <div className="row" id="app-row">
        <div className="col s3">{/* <Sidebar /> */}</div>
        <div className="col s9">
          <div className="container" id="header-container">
            <h2 className="product-header">Computers</h2>
          </div>
          <Sortby />
          {items.item.map((item) => {
            if (item.category === "computer") {
              return (
                <Product
                  src={item.image}
                  category={item.category}
                  identifier={item.title}
                  description={item.description}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Computers;
