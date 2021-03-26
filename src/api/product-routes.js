import axios from "axios";

export default {
  getAllProduct: function () {
    return axios.get("https://litzia-b.herokuapp.com/api/product");
  },
  getAllProductByFeatured: function () {
    return axios.get("https://litzia-b.herokuapp.com/api/product/featured");
  },
  getAllSubCategories: function () {
    return axios.get("https://litzia-b.herokuapp.com/api/subcategory");
  },

  getAllProductCategory: function (category) {
    return axios.get("https://litzia-b.herokuapp.com/api/product/category/" + category);
  },

  //   getAllProductFeatured: function (featured) {
  //     return axios.get("https://litzia-b.herokuapp.com/api/product/" + featured);
  //   },

  deleteOneProduct: function (id) {
    return axios.delete("https://litzia-b.herokuapp.com/api/product/delete/" + id, {
      headers: {authorization: "Bearer: " + localStorage.getItem("Auth")}
    });
  },

  getOneProduct: function (title) {
    return axios.get("https://litzia-b.herokuapp.com/api/product/" + title);
  },

  getOneProductPage: function (id) {
    return axios.get("https://litzia-b.herokuapp.com/api/product/singleItemPage/" + id);
  },
  getOneProductSearch: function (title) {
    return axios.get("https://litzia-b.herokuapp.com/api/product/search/" + title);
  },
  updateOneProduct: function (title) {
    return axios.put("https://litzia-b.herokuapp.com/api/product/" + title);
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
