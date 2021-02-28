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

  const laptopSort = () => {
    const sortResult = items.item.filter((obj) => obj.subCategory === "laptop");
    setItems({ ...items, item: sortResult });
  };
  const desktopSort = () => {
    const sortResult = items.item.filter(
      (obj) => obj.subCategory === "desktop"
    );
    setItems({ ...items, item: sortResult });
  };

  const serverSort = () => {
    const sortResult = items.item.filter((obj) => obj.subCategory === "server");
    setItems({ ...items, item: sortResult });
  };

  const goodSort = () => {
    const sortResult = items.item.filter((obj) => obj.tier === "one");
    setItems({ ...items, item: sortResult });
  };

  const betterSort = () => {
    const sortResult = items.item.filter((obj) => obj.tier === "two");
    setItems({ ...items, item: sortResult });
  };

  const bestSort = () => {
    const sortResult = items.item.filter((obj) => obj.tier === "three");
    setItems({ ...items, item: sortResult });
  };

  const findProduct = (event) => {
    API.getOneProduct(event.target.dataset.id).then((res) =>
      setItems({ item: res.data })
    );
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
          {/* <p onClick={}> Clear Filters </p> */}
          <p onClick={laptopSort}> laptops </p>
          <p onClick={desktopSort}> desktops </p>
          <p onClick={serverSort}> servers </p>
          <br></br>
          <p onClick={goodSort}> Good </p>
          <p onClick={betterSort}> Better </p>
          <p onClick={bestSort}> Best </p>
        </div>
        <div className="col s9">
          <div className="container" id="header-container">
            <h2 className="product-header">Computers</h2>
          </div>
          <Sortby />

          {items.item.length ? (
            items.item.map((item) => {
              if (item.category === "computer" && items.item.length > 1) {
                return (
                  <Product
                    src={item.image}
                    category={item.category}
                    identifier={item.title}
                    description={item.description}
                    id={item.id}
                    findProduct={findProduct}
                  />
                );
              }
            })
          ) : (
            <Product
              src={items.item.image}
              category={items.item.category}
              identifier={items.item.title}
              description={items.item.description}
              id={items.id}
              findProduct={findProduct}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Computers;
