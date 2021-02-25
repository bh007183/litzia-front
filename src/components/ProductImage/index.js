import React from "react";
import "./style.css";

function ProductImage(props) {
    return (
        <div>
            <img src={props.src} alt={props.imageDescription} className="itemImage"></img>
        </div >
    );
}

export default ProductImage;
