import React from "react";
import CartButton from "../CartButton"
import ProductDescription from "../ProductDescription"
import ProductImage from "../ProductImage"
import Recommended from "../Recommended"
import "./style.css"

function CarouselModal(props) {
    return (
        <div id="cSingleProduct">


            <div id="cImage">
                <img src={props.src} className="cItemImage"></img>
            </div >

            <div id="cItem">
                <div>
                    <h3>{props.title}</h3>
                    <div id="itemDescription">
                        <p>{props.description}</p>
                    </div>
                </div>
                <div id="priceDiv">
                    ${props.price}
                </div>

            </div>
            <div className="cCartDiv">
                <a onClick={props.addToCardProduct} className="addToCart" >Add to Cart</a>
            </div>
            <div className="col s12 m3">
                {/* <h5>You may also like...</h5>
                    <Recommended /> */}
            </div>

        </div>
    );
}

export default CarouselModal;