import React from "react";

import "./style.css"


function CarouselModal(props) {
    return (
        <div>
            <a onClick={props.closeModal}><h5 id="close">X</h5></a>
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


            </div>
        </div>
    );
}

export default CarouselModal;