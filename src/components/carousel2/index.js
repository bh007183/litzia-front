import React, { useEffect } from "react";
import "./style.css";
import M from "materialize-css";
import { Carousel } from 'react-responsive-carousel';


function Carousel2() {
    // document.addEventListener('DOMContentLoaded', function () {
    //     var elems = document.querySelectorAll('.carousel');
    //     var instances = M.Carousel.init(elems);
    // });
    return (
        <Carousel>
            <div className="slides">
                <div className="slideStyle">
                    <p className="slideReviews">"The Litzia staff is always great at communicating, they respond quickly, and
                    offer a plan to resolve an issue. Friendly, knowledgeable, and Fantastic at the service they
                    provide."<br></br><br></br>-Joni Brown</p>
                </div>

            </div>
            <div className="slides">
                <div className="slideStyle">
                    <p className="slideReviews">"Good staff and great response time to solve critical issues and help keep your
                    business runnig. They truly partner with you to help make your business successfull."<br></br><br></br>-Drew Donalson</p>
                </div>

            </div>
            <div className="slides">
                <div className="slideStyle">
                    <p className="slideReviews">"Matt and Michele have assembled a fantastic team! They are the go to shop for
                    your IT needs in the Pacific Northwest."<br></br><br></br>-Chuck Ryalls</p>
                </div>

            </div>
            <div className="slides">
                <div className="slideStyle">
                    <p className="slideReviews">"I have found Litzia to be a company that I can not only totally trust, but
                                very responsive and successful in accomplishing the tasks I ask for help with."<br></br><br></br>-Pickman One</p>
                </div>

            </div>
            <div className="slides">
                <div className="slideStyle">
                    <p className="slideReviews">"The Litzia crew is fantastic - super thorough, efficient, and friendly! They
                    do not disappoint."<br></br><br></br>-NWC Administration</p>
                </div>

            </div>
            {/* <div id="secondCarousel"> */}
            {/* <h4>Customer Testimonials</h4>
            <hr></hr> */}
            {/* <div className="carousel" id="carouselBottom">

                    <a className="carousel-item carousel2" href="#one!">
                        <div className="row">
                            <div className="row">
                                <div className="col s12">
                                    <p>"The Litzia staff is always great at communicating, they respond quickly, and
                                    offer a plan to resolve an issue. Friendly, knowledgeable, and Fantastic at the service they
                    provide."</p>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col s12">
                                    <p>-Joni Brown</p>
                                </div>
                            </div>
                        </div>
                    </a>

                    <a className="carousel-item carousel2" href="#two!">
                        <div className="row">
                            <div className="row">
                                <div className="col s12">
                                    <p>"Good staff and great response time to solve critical issues and help keep your
                    business runnig. They truly partner with you to help make your business successfull."</p>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col s12">
                                    <p>-Drew Donalson</p>
                                </div>
                            </div>
                        </div>
                    </a>

                    <a className="carousel-item carousel2" href="#three!">
                        <div className="row">
                            <div className="row">
                                <div className="col s12">
                                    <p>"Matt and Michele have assembled a fantastic team! They are the go to shop for
                    your IT needs in the Pacific Northwest."</p>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col s12">
                                    <p>-Chuck Ryalls</p>
                                </div>
                            </div>
                        </div>
                    </a>

                    <a className="carousel-item carousel2" href="#four!">
                        <div className="row">
                            <div className="row">
                                <div className="col s12">
                                    <p>"I have found Litzia to be a company that I can not only totally trust, but
                                very responsive and successful in accomplishing the tasks I ask for help with."</p>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col s12">
                                    <p>-Pickman One</p>
                                </div>
                            </div>
                        </div>
                    </a>

                    <a className="carousel-item carousel2" href="#five!">
                        <div className="row">
                            <div className="row">
                                <div className="col s12">
                                    <p>"The Litzia crew is fantastic - super thorough, efficient, and friendly! They
                    do not disappoint."</p>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col s12">
                                    <p>-NWC Administration</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div> */}
        </Carousel>

    );
}

export default Carousel2;
