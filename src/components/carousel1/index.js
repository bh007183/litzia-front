import React from "react";
import "./style.css";

function Carousel1() {
    return (
        <div className="carousel" id="carousel1">
            <a className="carousel-item image" href="#one!"><img
                src="https://www.saviantconsulting.com/images/blog/10-reasons-why-choose-azure-for-your-enterprise.png"></img></a>
            <a className=" carousel-item image" href="#two!"><img
                src="https://www.xerox.com/api/utils/optimise?url=https%3A%2F%2Fimg.youtube.com%2Fvi%2FKNjgrQbD0Ng%2Fmaxresdefault.jpg&webp=true"></img></a>
            <a className="carousel-item image" href="#three!"><img
                src="https://static.wixstatic.com/media/5870e3_37cc44ca6273416fae66bd5ba210eb7f~mv2.png/v1/fit/w_2500,h_1330,al_c/5870e3_37cc44ca6273416fae66bd5ba210eb7f~mv2.png"></img></a>
            <a className="carousel-item image" href="#four!"><img
                src="https://www.liveside.net/wp-content/images/2013/03/office365U.png"></img></a>
            <a className="carousel-item image" href="#five!"><img
                src="https://my-ecoach.com/online/resources/12617/GhabenK_representative.png"></img></a>
        </div>
    );
}

export default Carousel1;
