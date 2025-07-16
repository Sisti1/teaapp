import React  from "react";
import "./App.css";
import Navbar from "./pages/navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

import Home from "./pages";
import About from "./pages/about";
import SignUp from "./pages/signup";
import Cart from "./pages/cart";
import Teashop from "./pages/teashop";
import PageStatus from "./pages/PageStatus";
import Footer from "./pages/footer"; 
import Login from "./pages/login";
import Contact from "./pages/contact";
// import ProductPage from "./pages/ProductPage";


function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content-wrapper">
        <PageStatus />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/teashop" element={<Teashop />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}


export default App;