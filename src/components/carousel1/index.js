import React, { useEffect, useState, Component } from "react";
import "./style.css";
import M from "materialize-css";
import API from "../../api/product-routes";
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function Carousel1() {
  // const [items, setItems] = useState({
  //   item: [],
  // });

  const findProduct = (event) => {
    API.getOneProductPage(event.target.dataset.id)
      .then(res => setItems({ item: res.data }))
  }


  useEffect(() => {
    // setItems([1, 2, 3]);
    API.getAllProduct().then((res) => {
      console.log(res);
      setItems({ item: res.data });
    });
  }, []);


  return (
    <div className="parentDiv">
      {/* <h4 id="carouselHeading">Featured Items</h4> */}
      <Carousel >

        {/* <div className="product">
        <div className="col s12 m6 l4"> */}
        {/* <div className="row"> */}

        {items.item.map((item) => {
          if (item.featured === true) {
            console.log(item.title)
            return (
              <div className="mainDiv">
                <div className="row rowCarousel">

                  <div className="col s4">
                    <img src={item.image} className="product-image" />
                  </div>

                  <div className="col s4">
                    <div className="row">
                      <h5 className="itemTitle">{item.title}</h5>
                    </div>
                    <div className="row">
                      <p className="itemDescription">{item.description}</p>
                    </div>
                  </div>

                  <div className="col s4 buttonView">
                    <button className="btn btn-large viewBtn" style={{ marginTop: "auto" }} onClick={findProduct} data-id={item.id}>View</button>
                  </div>


                </div>
              </div>

              /* <div className="row">
        <div className="mainDiv">

          <div className="col s4">
            <h5 className="itemTitle">{item.title}</h5>
            <p className="itemDescription">{item.description.substring(0, 75) + "..."}</p>
          </div>

          <div className="col s4">
            <img src={item.image} className="product-image" />
          </div>

          <div className="col s4">
            <button className="btn btn-large" style={{ marginTop: "auto" }} onClick={findProduct} data-id={item.id}>View</button>
          </div>
        </div>
      </div> */


              // <div className="card product-card hoverable">
              //   <div className="card-image">
              //     <img className="product-image" src={item.image} />
              //   </div>
              //   <div className="card-content">
              //     <span className="card-title">{item.title}</span>
              //     <p>{item.description.substring(0, 75) + "..."}</p>
              //   </div>
              //   <div className="card-action">
              //     <button className="btn btn-large" style={{ marginTop: "auto" }} onClick={findProduct} data-id={item.id}>View</button>
              //   </div>
              // </div>

            )
          } else {
            console.log(item.title)
          }
        })}
        {/* <div className="col s12 m6 l4">
          <div className="card product-card hoverable">
            <div className="card-image">
              <img className="product-image" src={props.src} />
            </div>
            <div className="card-content">
              <span className="card-title">{props.identifier}</span>
              <p>{props.description}</p>
            </div>
            <div className="card-action">
              <button className="btn btn-large" style={{ marginTop: "auto" }} onClick={props.findProduct} data-id={props.id}>View</button>
            </div>
          </div>
        </div> */}
        {/* </div> */}
        {/* </div>
      </div> */}
      </Carousel>
    </div >
  );
}
;


// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>

//   return (
//     <div className="slideshow-container">
//       {items.item.map((obj) => (
//         <div key={obj.id} className="mySlides fade">
//           <div className="numbertext">{slideIndex}</div>
//           <div className="parent">
//             <img src={obj.image} className="carouselImg" />
//             <a className="prev" onClick="plusSlides(-1)">
//               &#10094;
//             </a>
//             <a className="next" onClick="plusSlides(1)">
//               &#10095;
//              </a>
//           </div>
//           <div className="text">{obj.title}</div>
//         </div>
//       ))
//       }

//       {/* <a className="prev" onClick="plusSlides(-1)">
//         &#10094;
//       </a>
//       <a className="next" onClick="plusSlides(1)">
//         &#10095;
//       </a> */}
//     </div >
//   );
// }

// export default Carousel1;



export default Carousel1;
