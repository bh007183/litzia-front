import React, { useState, useEffect } from "react";
import Product from "../components/product";
import Sortby from "../components/sortby";
import Sidebar from "../components/sidebar";
import "../App.css";

import API from "../api/product-routes";

function Computers() {
  const [items, setItems] = useState({
    item: [],
    sort2: [],
  });

  // const [sort, setSort] = useState({
  //   sorted: [],
  // });

  const laptopSort = (event) => {
    const sortResult = items.item.filter((obj) => obj.subCategory === "laptop");
    setItems({ ...items, sorted: sortResult });
    console.log(items.sorted);
  };

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
        <div className="col s3">
          <p onClick={laptopSort}> laptops </p>
          <p> desktops </p>
          <p> servers </p>
          <p> components </p>
          <br></br>
          <p> Good </p>
          <p> Better </p>
          <p> Best </p>
        </div>
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
