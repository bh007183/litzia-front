import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import LoginModal from "../LoginModal"

function Navbar1() {
  // document.querySelector("#litzia").onClick = function 


  return (
    <div>
      <nav className="nav-extended" id="topNav">
        <div className="nav-wrapper">
          <div className="row">
            <div className="col s2">
              <Link
                to="/"
                className={
                  window.location.pathname === "/"
                    ? "nav-link active"
                    : "nav-link"
                }
                id="litzia"


              >
                Litzia
              </Link>
            </div>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <div className="col s7">
              <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li>
                  <div className="nav-wrapper" id="search">
                    <form action="/action_page.php">
                      <div className="row">
                        <div className="col s9">
                          <input
                            type="text"
                            placeholder="Search..."
                            name="search"
                            id="searchInput"
                          />
                        </div>
                        <div className="col s3">
                          <button type="submit" id="searchButton">
                            <i className="material-icons">search</i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col s3" id="modal">
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <div className="row">

                  <div className="col s4">
                    <li>
                      <a href="badges.html" id="shoppingCart">
                        <i className="material-icons">shopping_cart</i>
                      </a>
                    </li>
                  </div>
                  <div className="col s8">
                    <li id="loginMod">
                      <LoginModal />
                    </li>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>

      </nav>
    </div >
  );
}

export default Navbar1;
