import { Link } from "react-router-dom";
import { Navbar as BootstrapNavbar, Nav, Button } from "react-bootstrap";
import Cookies from "js-cookie"; // Make sure to install js-cookie
import "./navbar.css";

const Navbar = () => {
  // Check if the token exists in cookies to determine if the user is logged in
  const isAuthenticated = !!Cookies.get("token");

  return (
    <div>
      <BootstrapNavbar className="custom-navbar" expand="lg">
        <BootstrapNavbar.Brand as={Link} to="/">
          <strong>KailashTea</strong>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/about">
              <b>About</b>
            </Nav.Link>
            <Nav.Link as={Link} to="/teashop">
              <b>TeaShop</b>
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              <b>Contact Us</b>
            </Nav.Link>
          </Nav>

          <div className="navbar-collapse justify-content-end" id="navbarTogglerDemo01">
            <ul className="navbar-nav ml-auto">
              {/* Only show Sign Up and Login buttons if the user is not authenticated */}
              {!isAuthenticated ? (
                <>
                  <li className="nav-item">
                    <Button
                      variant="dark"
                      as={Link}
                      to="/signup"
                      className="btn-primary-spacing"
                    >
                      Sign Up
                    </Button>
                  </li>
                  <li className="nav-item">
                    <Button
                      variant="dark"
                      as={Link}
                      to="/login"
                      className="btn-primary-spacing"
                    >
                      Login
                    </Button>
                  </li>
                </>
              ) : null}
              {/* Always show Cart button */}
              <li className="nav-item">
                <Button
                  variant="dark"
                  as={Link}
                  to="/cart"
                  className="btn btn-spacing"
                >
                  Cart
                </Button>
              </li>
            </ul>
          </div>
        </BootstrapNavbar.Collapse>
      </BootstrapNavbar>
    </div>
  );
};

export default Navbar;
