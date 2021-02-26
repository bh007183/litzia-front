import axios from "axios";

export default {
  createProduct: function (a, b, c, d, e, f, g, h, i, j) {
    return axios.post("http://localhost:8080/api/product", {
      title: a,
      image: b,
      description: c,
      category: d,
      price: e,
      quantity: f,
      tier: g,
      featured: h,
      tax: i,
      shipping: j,
    });
  },

  getAllProduct: function () {
    return axios.get("http://localhost:3005/api/product");
  },
  getAllSubCategories: function () {
    return axios.get("http://localhost:3005/api/subcategory");
  },

  getAllProductCategory: function (category) {
    return axios.get("http://localhost:3005/api/product/" + category);
  },

  getAllProductFeatured: function (fetured) {
    return axios.get("http://localhost:3005/api/product/" + fetured);
  },

  deleteOneProduct: function (title) {
    return axios.delete("http://localhost:3005/api/product/" + title);
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
