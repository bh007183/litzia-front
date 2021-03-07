import React, { useState, useEffect } from "react";
import Product from "../components/product";
import Sortby from "../components/sortby";
import Sidebar from "../components/sidebar";
import "../App.css";
import API from "../api/product-routes";
import CartAPI from "../api/cart-routes";
import IndividualProduct from "../pages/IndividualProduct";
import M from "materialize-css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

function Computers() {
  const [items, setItems] = useState({
    item: [],
  });

  const [sub, setSub] = useState([]);

  const findProduct = (event) => {
    API.getOneProductPage(event.target.dataset.id).then((res) =>
      setItems({ item: res.data, other: "" })
    );
  };

  const getSub = (data) => {
    let arr = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].category === "computer") {
        arr.push(data[i].subCategory);
        console.log("this is ", data[i].subCategory);
      }
    }
    let unique = [...new Set(arr)];
    setSub([...unique]);
    console.log(unique);
  };

  const addToCardProduct = (event) => {
    CartAPI.addCart({
      title: items.item.title,
      image: items.item.image,
      description: items.item.description.substring(0, 40),
      price: items.item.price,
    })
      .then((res) => console.log(res))
      .catch((err) => alert("Please Make Sure To LogIn to add to Cart."));
    window.location.reload();
  };

  useEffect(() => {
    API.getAllProduct().then((res) => {
      console.log(res.data);
      setItems({ ...items, item: res.data });

      getSub(res.data);
    });
  }, []);

  const subCatClick = (event) => {
    console.log(event.target.outerText);
    const subCatResult = items.item.filter(
      (obj) => obj.subCategory === event.target.outerText
    );
    setItems({ ...items, other: subCatResult });
    console.log(items.other);
  };

  return (
    <div className="container page-container" id="computer-container">
      <div className="row" id="app-row">
        {/* <div className="col s3 product-sidebar"></div> */}
        <div className="col s12">
          <div className="container" id="header-container">
            <h2 className="product-header">{props.category}</h2>
          </div>
          <div className="row">
            {props.items.item.length > 0 ? (
              props.sub.map((item, index) => (
                <div className="col s2">
                  <button
                    style={{ width: "100%", height: "40px" }}
                    onClick={props.subCatClick}
                    key={index}
                  >
                    {item}
                  </button>
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
          {props.items.item.length > 0 ? (
            props.items.item.map((item) => {
              return (
                <Product
                  key={item.id}
                  src={item.image}
                  category={item.category}
                  identifier={item.title}
                  description={item.description.substring(0, 75) + "..."}
                  id={item.id}
                  findProduct={props.findProduct}
                />
              );
            })
          ) : (
            <IndividualProduct
              src={props.items.item.image}
              title={props.items.item.title}
              category={props.items.item.category}
              identifier={props.items.item.title}
              description={props.items.item.description}
              price={props.items.item.price}
              id={props.items.item.id}
              addToCardProduct={props.addToCardProduct}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Computers;
