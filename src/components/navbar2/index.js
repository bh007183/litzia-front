import React, {useState, useEffect} from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Navbar2() {


  return (
    <div>
      <nav id="lowerNav">
        <div className="nav-content">
          <ul className="tabs tabs-transparent" id="lowerNav">
            <li className="tab">
              <Link
                to="/computer"
                className={
                  window.location.pathname === "/computer"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Computers
              </Link>
            </li>
            <li className="tab">
              <Link
                to="/xerox"
                className={
                  window.location.pathname === "/xerox"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Xerox
              </Link>
            </li>
            <li className="tab">
              <Link
                to="/cloud"
                className={
                  window.location.pathname === "/cloud"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Software
              </Link>
            </li>
            <li className="tab">
              <Link
                to="/security"
                className={
                  window.location.pathname === "/security"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Security
              </Link>
            </li>
            <li className="tab">
              <Link
                to="/services"
                className={
                  window.location.pathname === "/services"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Services
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar2;
