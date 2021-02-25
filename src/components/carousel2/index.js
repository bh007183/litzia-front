import React, { useEffect } from "react";
import "./style.css";
import M from "materialize-css";

function Carousel2() {
    useEffect(() => {
        var elems = document.querySelectorAll('.carousel');
        var instances = M.Carousel.init(elems);
    }, [])
    return (
        <div id="secondCarousel">
            <h4>Customer Testimonials</h4>
            <hr></hr>
            <div className="carousel" id="carouselBottom">
                <a className="carousel-item carousel2" href="#one!">
                    <p>"The Litzia staff is always great at communicating, they respond quickly, and
                    offer a plan to resolve an issue. Friendly, knowledgeable, and Fantastic at the service they
                    provide."</p>
                    <p>-Joni Brown</p>
                </a>
                <a className="carousel-item carousel2" href="#two!">
                    <p className="carouselQuote">"Good staff and great response time to solve critical issues and help keep your
                    business runnig. They truly partner with you to help make your business successfull."</p>
                    <p>-Drew Donalson</p>
                </a>
                <a className="carousel-item carousel2" href="#three!">
                    <p className="carouselQuote">"Matt and Michele have assembled a fantastic team! They are the go to shop for
                    your IT needs in the Pacific Northwest."</p>
                    <p>-Chuck Ryalls</p>
                </a>
                <a className="carousel-item carousel2" href="#four!">
                    <p className="carouselQuote">"I have found Litzia to be a company that I can not only totally trust, but
                    very
                    responsive and successful in accomplishing the tasks I ask for help with."</p>
                    <p>-Pickman One</p>
                </a>
                <a className="carousel-item carousel2" href="#five!">
                    <p className="carouselQuote">"The Litzia crew is fantastic - super thorough, efficient, and friendly! They
                    do not disappoint."</p>
                    <p>-NWC Administration</p>
                </a>
            </div>
        </div>

    );
}

export default Carousel2;
