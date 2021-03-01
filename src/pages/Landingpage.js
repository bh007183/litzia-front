import React from "react";
import LoginModal from "../components/LoginModal"
import Carousel1 from "../components/carousel1"
import Carousel2 from "../components/carousel2"
import Categories from "../components/categories"

function Landingpage() {
    return (
        <div>
            <Carousel1 />
            <Categories/>
            {/* <Carousel2 /> */}
        </div>
    );
}

export default Landingpage;