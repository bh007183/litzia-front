import React, {useState, useEffect} from "react";
import Product from "../components/product";
import Sortby from "../components/sortby";
import Sidebar from "../components/sidebar";
import API from "../api/product-routes"
import CartAPI from "../api/cart-routes"
import IndividualProduct from "../pages/IndividualProduct"
function Xerox() {
  const [items, setItems] = useState ({
    item: []
  })
  

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
          {/* <Sidebar /> */}
        </div>
        <div className="col s9">
          <div className="container" id="header-container">
            <h2 className="product-header">Xerox</h2>
          </div>
          <Sortby />
          {items.item.length ? items.item.map((item) => {
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

export default Xerox;
