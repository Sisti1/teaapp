import React  from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

import Home from "./pages";
import About from "./pages/about";
import SignUp from "./pages/signup";
import Cart from "./pages/cart";
import PageStatus from "./pages/PageStatus"; 


function App() {
  
  
  return (

  
    <Router>
      <Navbar />
      <PageStatus />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart"  element={<Cart />} />
        <Route path="/sign-up" element={<SignUp />}/>
         
      </Routes>
      
    </Router>
  );
}

export default App;