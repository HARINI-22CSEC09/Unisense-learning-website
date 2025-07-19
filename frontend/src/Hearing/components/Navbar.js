import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function AppNavbar() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">DeafLearn</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/lessons">Lessons</Nav.Link>
          <Nav.Link as={Link} to="/accessibility">Accessibility</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
