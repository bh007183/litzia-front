import React, { useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Navbar2() {


  return (
    <div>
      <nav id="mainLowerNav">
        <div className="nav-content">
          <ul className="tabs tabs-transparent" id="lowerNav">
            <li className="tab">
              <Link
                to="/Computer"

                onClick={() => { if (window.location.pathname === "/Computer") { window.location.href = "/Computer" } }}
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
                to="/Xerox"
                onClick={() => { if (window.location.pathname === "/Xerox") { window.location.href = "/Xerox" } }}
                className={
                  window.location.pathname === "/Xerox"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Xerox
              </Link>
            </li>
            <li className="tab">
              <Link
                to="/Software"
                onClick={() => { if (window.location.pathname === "/Software") { window.location.href = "/Software" } }}
                className={
                  window.location.pathname === "/Software"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Software
              </Link>
            </li>
            <li className="tab">
              <Link
                to="/Security"
                onClick={() => { if (window.location.pathname === "/Security") { window.location.href = "/Security" } }}
                className={
                  window.location.pathname === "/Security"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Security
              </Link>
            </li>
            <li className="tab">
              <Link
                to="/Service"
                onClick={() => { if (window.location.pathname === "/Service") { window.location.href = "/Service" } }}
                className={
                  window.location.pathname === "/service"
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
