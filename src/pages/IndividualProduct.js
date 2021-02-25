import React from "react";
import CartButton from "../components/CartButton"
import ProductDescription from "../components/ProductDescription"
import ProductImage from "../components/ProductImage"
import Recommended from "../components/Recommended"
import "../App.css"

function IndividualProduct() {
    return (
        <div id="singleProduct">
            <div className="row" id="rowID">
                <div className="col s12 m3">
                    <ProductImage
                        src="https://images.idgesg.net/images/article/2017/06/microsoft-office-365-logo-2016-100727915-large.jpg"
                        imageDescription="Office 365" />
                </div>
                <div className="col s12 m6">
                    <ProductDescription
                        title="Office 365"
                        description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt possimus amet sed itaque maxime illum, aperiam fugit sequi ipsam quidem soluta nostrum doloribus facilis, molestias nobis cumque veritatis omnis et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequuntur omnis itaque, expedita architecto laboriosam voluptatum nam incidunt illum, deleniti, recusandae quo quaerat quidem rerum sapiente fugit nobis corrupti cumque." />
                    <CartButton />
                </div>
                <div className="col s12 m3">
                    <h5>You may also like...</h5>
                    <Recommended />
                </div>
            </div>
        </div>
    );
}

export default IndividualProduct;