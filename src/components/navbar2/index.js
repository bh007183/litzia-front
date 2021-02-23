import React from "react";
import "./style.css";

function Navbar2() {
  return (
    <div>
      <nav id="lowerNav">
        <div className="nav-content">
          <ul className="tabs tabs-transparent" id="lowerNav">
            <li className="tab">
              <a href="#test1" className="tabs">
                Computers
              </a>
            </li>
            <li className="tab">
              <a href="#test2" className="tabs">
                Xerox
              </a>
            </li>
            <li className="tab">
              <a href="#test3" className="tabs">
                Cloud
              </a>
            </li>
            <li className="tab">
              <a href="#test4" className="tabs">
                Security
              </a>
            </li>
            <li className="tab">
              <a href="#test5" className="tabs">
                Services
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar2;
