import React, { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import M from "materialize-css";
import LoginModal from "../LoginModal";
import CreateItem from "../createProductModal";
import API from "../../api/product-routes";
import Sortby from "../../components/sortby";
import Product from "../../components/product";
import IndividualProduct from "../../pages/IndividualProduct";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import CartAPI from "../../api/cart-routes";
Modal.setAppElement("#root");
function Navbar1() {
  const [searchItem, setSearchItem] = useState({
    search: [],
    searchResults: "",
  });
  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setSearchItem({ ...searchItem, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    API.getOneProductSearch(searchItem.searchResults)
      .then((res) => setSearchItem({ search: res.data, searchResults: "" }))
      .then(openModal);
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const findProduct = (event) => {
    API.getOneProductPage(event.target.dataset.id).then((res) =>
      setSearchItem({ search: res.data })
    );
  };

  const addToCardProduct = (event) => {
    CartAPI.addCart({
      title: searchItem.search.title,
      image: searchItem.search.image,
      description: searchItem.search.description.substring(0, 40),
      price: searchItem.search.price,
    }).then((res) => window.location.reload());
  };

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        // onAfterOpen={afterOpenModal}
        contentLabel="Example Modal"
      >
        <div className="container">
          <div className="row">
            {searchItem.search.length ? (
              searchItem.search.map((item) => {
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
                  src={searchItem.search.image}
                  title={searchItem.search.title}
                  category={searchItem.search.category}
                  identifier={searchItem.search.title}
                  description={searchItem.search.description}
                  id={searchItem.search.id}
                  addToCardProduct={addToCardProduct}
                />
              )}
          </div>
        </div>
        <button onClick={closeModal}>Close</button>
      </Modal>

      <div>
        <nav className="nav-extended" id="topNav">
          <div className="nav-wrapper">
            <div className="row" id="navRow">
              <div className="col s1 m2" id="logoColumn">
                <Link
                  to="/"
                  className={
                    window.location.pathname === "/"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  id="litzia"
                >
                  <img
                    src="https://www.litzia.com/wp-content/uploads/2015/12/Litzia-Logo-Mark-SM.png"
                    id="litziaImage"
                  ></img>
                </Link>
              </div>

              <div className="col s7 m8 searchCol">
                <ul id="nav-mobile" >
                  <li>
                    <div className="nav-wrapper" id="search">
                      <form action="/action_page.php">
                        <div className="row">
                          <div className="col s9 m9">
                            <input
                              type="text"
                              placeholder="Search..."
                              name="searchResults"
                              value={searchItem.searchResults}
                              id="searchInput"
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="col s3 m3">
                            <button className="modal-trigger" href="#search" onClick={handleSubmit} type="submit" id="searchButton">
                              <i className="material-icons">search</i>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </li>
                </ul>
              </div>
              {/* <div className="col s8" id="modal">
              <ul id="nav-mobile" className="right ">
                <div className="row" id="modalRow"> */}

              {/* <div className="col s2" id="rightCol"> */}
              {/* <div className="row" id="leftRow"> */}
              <div className="col s1 m1" id="cartCol">

                <a href="/checkout" id="shoppingCart">
                  <i className="material-icons shoppingIcon">shopping_cart</i>
                </a>
                <Link
                  to="/checkout"
                  className={
                    window.location.pathname === "/checkout"
                      ? "nav-link active"
                      : "nav-link"
                  }
                ></Link>
              </div>
              <div className="col s1" id="loginCol">
                {/* <li id="loginMod"> */}
                <LoginModal />
                {localStorage.getItem("Auth2") === "true" ? (
                  <CreateItem />
                ) : (
                    <></>
                  )}
                {/* </li> */}
              </div>
              {/* </div> */}
              {/* </div> */}
              {/* </ul>
            </div> */}
              {/* </div> */}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar1;
