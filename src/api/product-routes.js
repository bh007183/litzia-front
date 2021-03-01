import axios from "axios";

export default {
  

  getAllProduct: function () {
    return axios.get("http://localhost:3005/api/product");
  },
  getAllProductByFeatured: function () {
    return axios.get("http://localhost:3005/api/product/featured");
  },
  getAllSubCategories: function () {
    return axios.get("http://localhost:3005/api/subcategory");
  },

  getAllProductCategory: function (category) {
    return axios.get("http://localhost:3005/api/product/" + category);
  },

//   getAllProductFeatured: function (featured) {
//     return axios.get("http://localhost:3005/api/product/" + featured);
//   },

  deleteOneProduct: function (title) {
    return axios.delete("http://localhost:3005/api/product/" + title);
  },
  getOneProduct: function (title) {
    return axios.get("http://localhost:3005/api/product/" + title);
  },
  getOneProductSearch: function (title) {
    return axios.get("http://localhost:3005/api/product/search/" + title);
  },
  updateOneProduct: function (title) {
    return axios.put("http://localhost:3005/api/product/" + title);
  },
};
///////////////////////////////////////
// const [product, setproduct] = useState ({
//     title: '',
//     image: '',
//     description: '',
//     category: '',
//     price: '',
//     quantity: '',
//     tier: '',
//     fetured: '',
//   })

//    const handleInputChange = event => {

//     const name = event.target.name;
//     const value = event.target.value;

//     setproduct({
//       ...product, [name]: value
//     })

//    }

// const submitHandler = event => {
//   event.preventDefault()
//   API.createProduct(product.title, product.image, product.description, product.category, product.price, product.quantity, product.tier, product.fetured).then(res => console.log(res))
// API.createProduct()

// }
