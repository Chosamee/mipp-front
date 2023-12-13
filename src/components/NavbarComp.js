// NavbarComponent.js

import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const NavbarComponent = () => {
  const navigate = useNavigate();

  const handleNavLinkClick = (path) => {
    navigate(path);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">
        React Navbar
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" onClick={() => handleNavLinkClick("/")}>
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/about"
            onClick={() => handleNavLinkClick("/about")}>
            About
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/contact"
            onClick={() => handleNavLinkClick("/contact")}>
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
