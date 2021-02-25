import React from "react";
import "./style.css";

function ProductDescription(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <div id="itemDescription">
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default ProductDescription;
