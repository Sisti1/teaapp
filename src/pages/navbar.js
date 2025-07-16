import { Link, useNavigate } from "react-router-dom";
import { Navbar as BootstrapNavbar, Nav, Button, Container } from "react-bootstrap";
import Cookies from "js-cookie";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = !!Cookies.get("token");

  const handleLogout = () => {
    Cookies.remove("token");
    navigate("/login");
  };

  return (
    <BootstrapNavbar expand="lg" className="custom-navbar" variant="dark" sticky="top">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/">
          <strong>KailashTea</strong>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/about"><b>About</b></Nav.Link>
            <Nav.Link as={Link} to="/teashop"><b>TeaShop</b></Nav.Link>
            <Nav.Link as={Link} to="/contact"><b>Contact Us</b></Nav.Link>
          </Nav>

          <Nav className="ms-auto d-flex align-items-center gap-2">
            {!isAuthenticated ? (
              <>
                <Button as={Link} to="/signup" variant="outline-light" className="btn-spacing">
                  Sign Up
                </Button>
                <Button as={Link} to="/login" variant="outline-light" className="btn-spacing">
                  Login
                </Button>
              </>
            ) : (
              <Button onClick={handleLogout} variant="outline-light" className="btn-spacing">
                Logout
              </Button>
            )}
            <Button as={Link} to="/cart" variant="light" className="btn-spacing">
              Cart
            </Button>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
