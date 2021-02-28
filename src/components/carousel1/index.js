import React, { useEffect } from "react";
import "./style.css";
import M from "materialize-css";

function Carousel1() {
  useEffect(() => {
    var elems = document.querySelectorAll(".carousel");
    var instances = M.Carousel.init(elems);
  }, []);

  return (
    <div className="carousel" id="carousel1">
      <a className="carousel-item image" href="#one!">
        <div className="row">
          <div className="col s12">
            <div className="card cardStyle">
              <div className="card-image">
                <img src="images/sample-1.jpg"></img>
                <span className="card-title">Card Title</span>
              </div>
              <div className="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div className="card-action">
                {/* <a href="#">This is a link</a> */}
              </div>
            </div>
          </div>
        </div>
      </a>
      <a className="carousel-item image" href="#one!">
        <div className="row">
          <div className="col s12">
            <div className="card cardStyle">
              <div className="card-image">
                <img src="images/sample-1.jpg"></img>
                <span className="card-title">Card Title</span>
              </div>
              <div className="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div className="card-action">
                {/* <a href="#">This is a link</a> */}
              </div>
            </div>
          </div>
        </div>
      </a>
      <a className="carousel-item image" href="#one!">
        <div className="row">
          <div className="col s12">
            <div className="card cardStyle">
              <div className="card-image">
                <img src="images/sample-1.jpg"></img>
                <span className="card-title">Card Title</span>
              </div>
              <div className="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div className="card-action">
                {/* <a href="#">This is a link</a> */}
              </div>
            </div>
          </div>
        </div>
      </a>
      <a className="carousel-item image" href="#one!">
        <div className="row">
          <div className="col s12">
            <div className="card cardStyle">
              <div className="card-image">
                <img src="images/sample-1.jpg"></img>
                <span className="card-title">Card Title</span>
              </div>
              <div className="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div className="card-action">
                {/* <a href="#">This is a link</a> */}
              </div>
            </div>
          </div>
        </div>
      </a>
      <a className="carousel-item image" href="#one!">
        <div className="row">
          <div className="col s12">
            <div className="card cardStyle">
              <div className="card-image">
                <img src="images/sample-1.jpg"></img>
                <span className="card-title">Card Title</span>
              </div>
              <div className="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div className="card-action">
                {/* <a href="#">This is a link</a> */}
              </div>
            </div>
          </div>
        </div>
      </a>

      {/* <a className=" carousel-item image" href="#two!"><img
                src="https://www.xerox.com/api/utils/optimise?url=https%3A%2F%2Fimg.youtube.com%2Fvi%2FKNjgrQbD0Ng%2Fmaxresdefault.jpg&webp=true"></img></a>
            <a className="carousel-item image" href="#three!"><img
                src="https://static.wixstatic.com/media/5870e3_37cc44ca6273416fae66bd5ba210eb7f~mv2.png/v1/fit/w_2500,h_1330,al_c/5870e3_37cc44ca6273416fae66bd5ba210eb7f~mv2.png"></img></a>
            <a className="carousel-item image" href="#four!"><img
                src="https://www.liveside.net/wp-content/images/2013/03/office365U.png"></img></a>
            <a className="carousel-item image" href="#five!"><img
                src="https://my-ecoach.com/online/resources/12617/GhabenK_representative.png"></img></a> */}
    </div>
  );
}

export default Carousel1;
