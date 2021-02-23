import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

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
            <div className="col s8">
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
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li></li>
              <li>
                <a href="Login.html">Login</a>
              </li>
              <li>
                <a href="badges.html">
                  <i className="material-icons">shopping_cart</i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar1;
