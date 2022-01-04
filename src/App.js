import "./App.css";
import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Pages/Shared/Footer/Footer";
import Navigation from "./Pages/Shared/Navigation/Navigation";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import DetailsProduct from "./Pages/DetailsProduct/DetailsProduct";
import Carts from "./Pages/Carts/Carts/Carts";
import Blogs from "./Pages/Blogs/Blogs/Blogs";
import BrandProducts from "./Pages/BrandProducts/BrandProducts/BrandProducts";
import Checkout from "./Pages/Checkout/Checkout";
import AddNewBlog from "./Pages/Dashboard/AddNewBlog/AddNewBlog";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import Shop from "./Pages/Shop/Shop/Shop";
import AddNewProduct from "./Pages/Dashboard/AddNewProduct/AddNewProduct";
import MyAccount from "./Pages/MyAccount/MyAccount";
import About from "./Pages/About/About";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/home/:productInfo" element={<Home />} />
            <Route path="/brands-product/:brand" element={<BrandProducts />} />
            <Route path="/detailsProduct" element={<DetailsProduct />} />
            <Route path="/cart" element={<Carts />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/blog" element={<Blogs />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/account" element={<MyAccount />} />
            <Route path="/addBlog" element={<AddNewBlog />} />
            <Route path="/addProduct" element={<AddNewProduct />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
