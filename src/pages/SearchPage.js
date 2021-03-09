import React, {useContext, useEffect} from 'react'
import API from "../api/product-routes"
import CartAPI from "../api/cart-routes"
import Product from "../components/product"
import IndividualProduct from "../pages/IndividualProduct"
import { ContextSearch } from './ContextSearch'

export default function SearchPage() {
    const {searchItem,  setSearchItem} = useContext(ContextSearch)

    useEffect(() => {
        API.getOneProductSearch(searchItem.searchResults)
        .then((res) => setSearchItem({ search: res.data, searchResults: "" }))
    }, [])

    const findProduct = (event) => {
        API.getOneProductPage(event.target.dataset.id).then((res) =>
          setSearchItem({ search: res.data })
        );
      };
    
      const addToCardProduct = (event) => {
        CartAPI.addCart({
          title: searchItem.search.title,
          image: searchItem.search.image,
          description: searchItem.search.description.substring(0, 40),
          price: searchItem.search.price,
        }).then((res) => window.location.reload());
      };
    return (
        <div>
            <div className="container">
          <div className="row">
            {!searchItem.search ? <p>"No Items Found"</p> : searchItem.search.length ? (
              searchItem.search.map((item) => {
                return (
                  <Product
                    key={item.id}
                    src={item.image}
                    category={item.category}
                    identifier={item.title}
                    description={item.description.substring(0, 75) + "..."}
                    id={item.id}
                    findProduct={findProduct}
                  />
                );
              })
            ) : (
                <IndividualProduct
                  src={searchItem.search.image}
                  title={searchItem.search.title}
                  category={searchItem.search.category}
                  identifier={searchItem.search.title}
                  description={searchItem.search.description}
                  id={searchItem.search.id}
                  addToCardProduct={addToCardProduct}
                />
              )}
          </div>
        </div>
            
        </div>
    )
}
