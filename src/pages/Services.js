import React, { useState, useEffect } from "react";
import Product from "../components/product";
import Sortby from "../components/sortby";
import Sidebar from "../components/sidebar";
import API from "../api/product-routes";
function Services() {
  const [items, setItems] = useState({
    item: [],
    other: [],
  });

  const [subCat, setSubCat] = useState({
    subcat: [],
  });

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
    API.getAllSubCategories().then((res) => setSubCat({ subcat: res.data }));

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

          {!items.other
            ? items.item.map((item) => {
                if (item.category.id === 18) {
                  return (
                    <Product
                      key={item.id}
                      id={item.id}
                      identifier={item.description}
                      description={item.customerDescription}
                    />
                  );
                }
              })
            : items.other.map((item) => {
                return (
                  <Product
                    key={item.id}
                    id={item.id}
                    identifier={item.description}
                    description={item.customerDescription}
                  />
                );
              })}
        </div>
      </div>
    </div>
  );
}

export default Services;
