import React from "react";
import "./style.css";
import M from "materialize-css";

function Sortby() {
  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".dropdown-trigger");
    var instances = M.Dropdown.init(elems);
  });
  return (
    <div className="button-wrapper">
      {/* <a
        id="sort-btn"
        class="dropdown-trigger btn"
        href="#"
        data-target="dropdown1"
      >
        Sort By
      </a>

      <ul id="dropdown1" class="dropdown-content">
        <li>
          <a href="#!">one</a>
        </li>
        <li>
          <a href="#!">two</a>
        </li>
        <li class="divider" tabindex="-1"></li>
        <li>
          <a href="#!">three</a>
        </li>
        <li>
          <a href="#!">
            <i class="material-icons">view_module</i>four
          </a>
        </li>
        <li>
          <a href="#!">
            <i class="material-icons">cloud</i>five
          </a>
        </li>
      </ul> */}
      <form>
        <label>
          Pick your favorite flavor:
          <select>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Sortby;
