import React, { useState, useEffect } from "react";
import Product from "../components/product";
import Sortby from "../components/sortby";
import Sidebar from "../components/sidebar";
import "../App.css";
import API from "../api/product-routes";
import CartAPI from "../api/cart-routes";
import IndividualProduct from "../pages/IndividualProduct";

function Cloud() {
  const [items, setItems] = useState({
    category: "",
    item: [],
  });

  const [sub, setSub] = useState([]);

  const findProduct = (event) => {
    API.getOneProductPage(event.target.dataset.id).then((res) =>
      setItems({...items, item: res.data})
    );
  };

  const getSub = (data) => {
    let arr = [];
    for (let i = 0; i < data.length; i++) {
        arr.push(data[i].subCategory);
        console.log("this is ", data[i].subCategory);
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
      totalCost: items.item.price
    })
      .then((res) => console.log(res))
      .catch((err) => alert("Please Make Sure To LogIn to add to Cart."));
    window.location.reload();
  };

useEffect(() => {
  let test = window.location.pathname.split("")
   let slash = test.shift()
   let exact = test.join("")
   
    API.getAllProductCategory(exact).then((res) => {
      console.log(res.data);
      setItems({ ...items, category: exact, item: res.data });
      getSub(res.data);
    });
  
}, [])
  

  const subCatClick = (event) => {
    console.log(event.target.outerText);
    const subCatResult = items.item.filter(
      (obj) => obj.subCategory === event.target.outerText
    );
    setItems({ ...items, item: subCatResult });
    setSub([])
    console.log(items.other);
  };

  return (
    <div className="container page-container" id="computer-container">
      <div className="row" id="app-row">
        <div className="col s12">
          <div className="container" style={{background: "url(https://csis-website-prod.s3.amazonaws.com/s3fs-public/styles/csis_banner/public/publication/AdobeStock_85241324.jpeg?itok=l4UBraCP)", backgroundSize: "cover", backgroundPosition: "bottom", color:"white"}} id="header-container">
            <h2 className="product-header">{items.category}</h2>
          </div>
          <div className="row">
            {items.item.length > 0 ? (
              sub.map((item, index) => (
                <div className="subCatButton col s4 m2">
                  <button
                    style={{contain:"content", width: "100%", height: "40px" }}
                    onClick={subCatClick}
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
          {items.item.length > 0 ? (
            items.item.map((item) => {
              return (
                <Product
                  key={item.id}
                  src={item.image}
                  category={item.category}
                  identifier={item.title}
                  description={item.description.substring(0, 75) + "..."}
                  id={item.id}
                  findProduct={findProduct}
                />
              );
            })
          ) : (
            <IndividualProduct
              src={items.item.image}
              title={items.item.title}
              category={items.item.category}
              identifier={items.item.title}
              description={items.item.description}
              price={items.item.price}
              id={items.item.id}
              addToCardProduct={addToCardProduct}
              tax={items.item.tax}
              shipping={items.item.shipping}
            />
          )}
        </div>
      </div>
    </div>
  );
}


export default Cloud;
