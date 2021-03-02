import React, { useState, useEffect } from "react";
import Product from "../components/product";
import Sortby from "../components/sortby";
import Sidebar from "../components/sidebar";
import API from "../api/product-routes";
import CartAPI from "../api/cart-routes";
import IndividualProduct from "../pages/IndividualProduct";
function Xerox() {
  const [items, setItems] = useState({
    item: [],
  });

  const findProduct = (event) => {
    API.getOneProductPage(event.target.dataset.id).then((res) =>
      setItems({ item: res.data })
    );
  };

  const addToCardProduct = (event) => {
    console.log(items.item);
    CartAPI.addCart({
      title: items.item.title,
      image: items.item.image,
      description: items.item.description.substring(0, 40),
      price: items.item.price,
    }).then((res) => window.location.reload());
  };

  useEffect(() => {
    // setItems([1, 2, 3]);
    API.getAllProduct().then((res) => {
      console.log(res);
      setItems({ item: res.data });
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
    <div className="container page-container">
      <div className="row" id="app-row">
        <div className="col s3">
          <aside>
            {items.item.length ? (
              items.item.map((item) => {
                if (item.category === "xerox") {
                  return (
                    <div>
                      <button
                        onClick={subCatClick}
                        key={item.id}
                        data-id={item.id}
                      >
                        {item.subCategory}
                      </button>
                      <br></br>
                    </div>
                  );
                }
              })
            ) : (
              <></>
            )}
          </aside>
        </div>
        <div className="col s9">
          <div className="container" id="header-container">
            <h2 className="product-header">Xerox</h2>
          </div>

          {items.item.length && !items.other ? (
            items.item.map((item) => {
              if (item.category === "xerox" && items.item.length > 1) {
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
              if (items.other.length > 1) {
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

export default Xerox;
