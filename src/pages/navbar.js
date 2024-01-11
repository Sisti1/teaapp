// components/Navbar/index.js

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <b>KailashTea</b>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                 <strong> HOME</strong>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
				<strong> ABOUT</strong>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/cart">
				<strong>CART</strong>
                </a>
              </li>
            </ul>
            <Link to="/signin">
              <button type="button" className="btn btn-dark">
                Sign-up
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
