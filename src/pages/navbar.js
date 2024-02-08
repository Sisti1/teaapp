import { Link } from "react-router-dom";
import { Navbar as BootstrapNavbar, Nav, Button } from "react-bootstrap";
import "./navbar.css";
const Navbar = () => {
  return (
    <>
      <div>
        <BootstrapNavbar className="custom-navbar" expand="lg">
          <BootstrapNavbar.Brand as={Link} to="/">
            KailashTea
          </BootstrapNavbar.Brand>
          <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
          <BootstrapNavbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/about">
                <b>About</b>
              </Nav.Link>
              <Nav.Link as={Link} to="/cart">
                <b>Cart</b>
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                <b>Contact Us</b>
              </Nav.Link>
            </Nav>

            <div
              class=" navbar-collapse justify-content-end"
              id="navbar TogglerDemo01">
              <ul className="navbar-nav ml-auto">
               <li className="nav-item"> 
               <Button
                  variant="dark"
                  as={Link}
                  to="/signup"
                  className="justify-content-end"
                >
                  Sign Up
                </Button>
               </li>
              </ul>
            </div>
          </BootstrapNavbar.Collapse>
        </BootstrapNavbar>
      </div>
    </>
  );
};

export default Navbar;
