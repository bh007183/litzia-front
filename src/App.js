import Navbar1 from "./components/navbar1";
import Navbar2 from "./components/navbar2";
import Sidebar from "./components/sidebar";
import Product from "./components/product";
import Header from "./components/header";
import Sortby from "./components/sortby";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar1 />
      <Navbar2 />
      <div className="container">
        <div className="row" id="app-row">
          <div className="col s3">
            <Sidebar />
          </div>
          <div className="col s9">
            <Header />
            <Sortby />
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
