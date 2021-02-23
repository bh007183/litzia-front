import React, { useEffect } from "react";
import "./style.css";
import M from "materialize-css";

function Sortby() {
  useEffect(() => {
    var elems = document.querySelectorAll(".dropdown-trigger");
    var instances = M.Dropdown.init(elems);
  }, []);

  return (
    <div className="button-wrapper">
      <a
        id="sort-btn"
        className="dropdown-trigger btn"
        href="#"
        data-target="dropdown1"
      >
        Sort By
        <i className="material-icons">arrow_drop_down</i>
      </a>

      <ul id="dropdown1" className="dropdown-content">
        <li>
          <a href="#!">Price: Lowest to Highest</a>
        </li>
        <li>
          <a href="#!">Price: Highest to Lowest</a>
        </li>

        <li>
          <a href="#!">Alphabetical A-Z</a>
        </li>
        <li>
          <a href="#!">Alphabetical Z-A</a>
        </li>
      </ul>
    </div>
  );
}

export default Sortby;
