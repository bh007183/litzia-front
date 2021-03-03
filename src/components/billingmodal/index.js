import React, { useEffect, useState } from "react";
import "./style.css";
import M, { Modal } from "materialize-css";

function Billingmodal() {
  useEffect(() => {
    var elems = document.querySelectorAll(".modal");
    var instances = M.Modal.init(elems);
  }, []);
  return (
    <div>
      <a className="waves-effect waves-light modal-trigger" href="#modal1">
        Modal
      </a>

      <div id="modal1" className="modal">
        <div className="modal-content">
          <h4>Modal Header</h4>
          <p>A bunch of text</p>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-close waves-effect waves-green">
            Agree
          </a>
        </div>
      </div>
    </div>
  );
}

export default Billingmodal;
