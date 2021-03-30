import React, { useEffect, useState, useContext } from "react";
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
import { ContextSearch } from "../../pages/ContextSearch";
Modal.setAppElement("#root");
function Navbar1() {
  const { searchItem, setSearchItem } = useContext(ContextSearch)

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setSearchItem({ ...searchItem, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    API.getOneProductSearch(searchItem.searchResults)
      .then((res) => setSearchItem({ search: res.data, searchResults: "" }))
  };



  return (
    <>
      <div>
        <nav className="nav-extended" id="topNav">
          <div className="nav-wrapper">
            <div className="tow" id="navRow">
              <div className="" id="logoColumn">
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

              <div className="searchCol">
                <ul id="nav-mobile" >
                  <li>
                    <div className="nav-wrapper" id="search">
                      <form action="/action_page.php">
                        <div className="tow" id="searchRow">
                          <div className="col s11 m10">
                            <input
                              type="text"
                              placeholder="Search..."
                              name="searchResults"
                              value={searchItem.searchResults}
                              id="searchInput"
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="">
                            {window.location.pathname !== "/searchresults" ?
                              <Link to="/searchresults" id="searchButton">
                                <i className="material-icons">search</i>
                              </Link> :
                              <Link onClick={handleSubmit} onKeyPress={handleSubmit} id="searchButton">
                                <i className="material-icons">search</i>
                              </Link>}
                          </div>
                        </div>
                      </form>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="" id="cartCol">

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
              <div className="" id="loginCol">
                {/* <li id="loginMod"> */}
                {localStorage.getItem("Auth2") !== "true" ? <LoginModal /> :
                  localStorage.getItem("Auth2") === "true" ? (
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
