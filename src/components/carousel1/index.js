import React, { useEffect, useState, Component } from "react";
import "./style.css";
import M from "materialize-css";
import API from "../../api/product-routes";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Modal from "react-modal";
import CartAPI from "../../api/cart-routes";
import IndividualProduct from "../../pages/IndividualProduct";

function Carousel1() {
  const [items, setItems] = useState({
    item: [],
  });

  const [modalState, setModalState] = useState({});

  useEffect(() => {
    API.getAllProduct().then((res) => {
      console.log(res);
      setItems({ ...items, item: res.data });
    });
    console.log(items);
  }, []);

  const findProduct = (event) => {
    API.getOneProductPage(event.target.dataset.id)
      .then((res) => setModalState(res.data))
      .then(() => {
        openModal();
        console.log(modalState);
      });
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const addToCardProduct = (event) => {
    console.log(items.item);
    CartAPI.addCart({
      title: modalState.title,
      image: modalState.image,
      description: modalState.description.substring(0, 40),
      price: modalState.price,
    }).then((res) => window.location.reload());
  };

  function trial() {
    return (
      <div>
        {/* want to return the modal for the specific item*/}
        {console.log("you did it")}
      </div>
    );
  }

  return (
    <div className="parentDiv">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <IndividualProduct
          src={modalState.image}
          title={modalState.title}
          category={modalState.category}
          identifier={modalState.title}
          description={modalState.description}
          id={modalState.id}
          addToCardProduct={addToCardProduct}
        />
      </Modal>
      {/* <h4 id="carouselHeading">Featured Items</h4> */}
      <Carousel>
        {/* <div className="product">
        <div className="col s12 m6 l4"> */}
        {/* <div className="row"> */}

        {items.item.map((item) => {
          if (item.featured === true) {
            // console.log(item.title)
            return (
              <div className="mainDiv">
                <div className="row rowCarousel">

                  <div className="col s0 m4">
                    <div className="row">
                      <img src={item.image} className="product-image" id="topImage" />
                    </div>
                  </div>

                  <div className="col s12 m4" id="mobileColumn">
                    <div className="col s12" id="smallImgRow">
                      <img src={item.image} className="product-image" id="smallImage" />
                    </div>
                    <div id="bottomThree">
                      <div className="col s12">
                        <h5 className="itemTitle">{item.title}</h5>
                      </div>
                      <div className="col s12">
                        <p className="itemDescription">{item.description.substring(0, 150) + "..."}</p>
                      </div>
                      <div className="col s12">
                        <div className="buttonView">
                          <button className="btn btn-large viewBtn" style={{ marginTop: "auto" }} onClick={findProduct} data-id={item.id} id="smallViewBtn">View</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col s0 m4 buttonView">
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
            );
          } else {
            console.log(item.title);
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
    </div>
  );
}
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
