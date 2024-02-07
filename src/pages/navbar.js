import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar as BootstrapNavbar, Nav, Button } from 'react-bootstrap';
import "./navbar.css"; 
const Navbar = () => {
  

  return (
    <>
    <div>
      <BootstrapNavbar className="custom-navbar" expand="lg">
      <BootstrapNavbar.Brand as={Link} to="/">KailashTea</BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
        </Nav>
        <Button variant="dark" as={Link} to="/signup" className="ml-auto">Sign Up</Button>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
     </ div>
    </>
  );
};

export default Navbar;
