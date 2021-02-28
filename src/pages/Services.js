import React, { useState, useEffect } from "react";
import Product from "../components/product";
import Sortby from "../components/sortby";
import Sidebar from "../components/sidebar";
import API from "../api/product-routes";
import CartAPI from "../api/cart-routes"
import IndividualProduct from "../pages/IndividualProduct"
function Services() {
  const [items, setItems] = useState({
    item: [],
    other: [],
  });

  const [subCat, setSubCat] = useState({
    subcat: [],
  });

  const findProduct = (event) => {
    API.getOneProduct(event.target.dataset.id)
    .then(res => setItems({ item: res.data }))
}


  const addToCardProduct = (event) => {
    console.log(items.item)
    CartAPI.addCart(
      {title: items.item.title,
        image: items.item.image,
        description: items.item.description.substring(0, 40),
        price: items.item.price,
    })
    .then(res => window.location.reload())
}

  const subCatClick = (event) => {
    const subCatResult = items.item.filter(
      (obj) => obj.subcategory.id === parseInt(event.target.attributes[0].value)
    );
    setItems({ ...items, other: subCatResult });
    console.log(items.other);
  };

  useEffect(() => {
    let mounted = true; ///////this needs stuff
    API.getAllProduct().then((res) => setItems({ item: res.data }));
    // API.getAllSubCategories().then((res) => setSubCat({ subcat: res.data }));

    let test = subCat.subcat.filter((thing) =>
      items.item.some((obj2) => thing.value == obj2.value)
    );
    console.log(test);
  }, []);

  return (
    <div className="container page-container">
      <div className="row" id="app-row">
        <div className="col s3">
          <div className="sidebar">
            <aside>
              {subCat.subcat.map((item) => (
                <button onClick={subCatClick} key={item.id} data-id={item.id}>
                  {item.name}
                </button>
              ))}
            </aside>
          </div>
        </div>
        <div className="col s9">
          <div className="container" id="header-container">
            <h2 className="product-header">Services</h2>
          </div>
          <Sortby />

          {items.item.length ? items.item.map((item) => {
            if (item.category === "computer" && items.item.length > 1) {
              return (
                <Product
                key={item.id}
                  src={item.image}
                  category={item.category}
                  identifier={item.title}
                  description={item.description}
                  id={item.id}
                  findProduct={findProduct}
                />
              );
            }
          }):<IndividualProduct
                  src={items.item.image}
                  title={items.item.title}
                  category={items.item.category}
                  identifier={items.item.title}
                  description={items.item.description}
                  id={items.id}
                  addToCardProduct={addToCardProduct}
                />}
        </div>
      </div>
    </div>
  );
}

export default Services;
