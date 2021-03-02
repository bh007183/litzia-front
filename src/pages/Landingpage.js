import React, { useState, useEffect } from "react";
import API from "../api/product-routes";
import LoginModal from "../components/LoginModal"
import Carousel1 from "../components/carousel1"
import Carousel2 from "../components/carousel2"
import Categories from "../components/categories"
import { Carousel } from 'react-responsive-carousel';

function Landingpage() {
    const [items, setItems] = useState({
        item: [],
    });

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
        <div>

            {/* {items.item.map((item) => {
                if (item.featured === true) {
                    return (<Carousel1
                        src={item.image}
                        identifier={item.title}
                        description={item.description.substring(0, 75) + "..."}
                        id={item.id}
                        findProduct={findProduct}
                    />)
                } else {
                    console.log(items.item)
                }
            })} */}
            <Carousel1 />
            <Categories />
            {/* <Carousel2 /> */}
        </div>
    );
}

export default Landingpage;