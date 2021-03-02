import React, { useEffect, useState } from "react";
import "./style.css";
import M from "materialize-css";
import API from "../../api/product-routes";

function Carousel1() {
  // const [items, setItems] = useState({
  //   item: [],
  // });

  // useEffect(() => {
  //   API.getAllProductByFeatured().then((res) => {
  //     console.log(res.data);
  //     setItems({ item: res.data });
  //   }).then(res =>  showSlides());
    
   
  // }, []);

 
  // var slideIndex = 0;
  // function showSlides() {
  //   var i;
  //   var slides = document.getElementsByClassName("mySlides");
  //   for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";
  //   }
  //   slideIndex++;
  //   if (slideIndex > slides.length) {slideIndex = 1}
  //   slides[slideIndex-1].style.display = "block";
  //   setTimeout(showSlides, 10000); // Change image every 2 seconds
  // }

  return (
    <div className="slideshow-container">
     
   

      <a className="prev" onClick="plusSlides(-1)">
        &#10094;
      </a>
      <a className="next" onClick="plusSlides(1)">
        &#10095;
      </a>
    </div>
  );
}

export default Carousel1;
