import React, { useState, useEffect } from "react";
import Product from "../components/product";
import Sortby from "../components/sortby";
import Sidebar from "../components/sidebar";
import "../App.css";
import API from "../api/product-routes";
import CartAPI from "../api/cart-routes";
import IndividualProduct from "../pages/IndividualProduct";

function Computers() {
  const [items, setItems] = useState({
    item: [],
  });

  const [sub, setSub] = useState([]);


  const findProduct = (event) => {
    API.getOneProductPage(event.target.dataset.id)
    .then(res => setItems({ item: res.data, other: ""}))
}

const getSub = (data)=> {
  let arr = []
  for(let i = 0; i < data.length; i++){
    if(data[i].category === "computer"){
      arr.push(data[i].subCategory)
      console.log("this is ", data[i].subCategory)
    }
    
  }
  let unique = [...new Set(arr)]
  setSub([...unique])
  console.log(unique)
}


const addToCardProduct = (event) => {
  CartAPI.addCart({
    title: items.item.title,
    image: items.item.image,
    description: items.item.description.substring(0, 40),
    price: items.item.price,
  }).then((res) =>  console.log(res)).catch(err => alert("Please Make Sure To LogIn to add to Cart."));
  window.location.reload()
};

  useEffect(() => {
    API.getAllProduct().then((res) => {
      console.log(res.data)
      setItems({ ...items, item: res.data});
     
      getSub(res.data)
    })
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
    <div  className ="container page-container">
      <div className="row" id="app-row">
        <div className="col s3"><aside>
        {sub.map((item,index) => 
                <button style={{width:"100%", height:"40px"}} onClick={subCatClick} key={index}>
                  {item}
                </button>
                )}
            </aside></div>
        <div className="col s9">
          <div className="container" id="header-container">
            <h2 className="product-header">Computers</h2>
          </div>

          {items.item.length && !items.other ? (
            items.item.map((item) => {
              if (item.category === "computer" && items.item.length > 1) {
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
              }
            })
          ) : items.other ? (
            items.other.map((item) => {
              
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
              id={items.id}
              addToCardProduct={addToCardProduct}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Computers;
