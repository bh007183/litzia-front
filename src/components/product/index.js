import React, { useEffect } from "react";
import "./style.css";

function Product(props) {
  return (
    <div className="product">
      {/* <div className="row"> */}
      <div className="col s12 m6 l4 product-margin">
        <div className="card product-card hoverable">
          <div className="card-image">
            <img className="product-image" src={props.src} />
          </div>
          <div className="card-content">
            <span className="card-title">{props.identifier}</span>
            <p>{props.description}</p>
          </div>
          <div id="buttonContain">
            <hr/>
            <button
              className="btn btn-large viewBtn"
              // style={{ marginTop: "auto" }}
              onClick={props.findProduct}
              data-id={props.id}
            > View
            </button>
            {localStorage.getItem("Auth2") === "true" ?

              <button
                className="btn btn-large"
                style={{ marginTop: "auto" }}
                onClick={props.deleteProduct}
                data-id={props.id}
                style={{ marginLeft: "1vw" }}
              >
                Delete
            </button>
              : <></>}

          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Product;
