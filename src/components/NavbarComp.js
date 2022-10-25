import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

import { GiBookshelf } from "react-icons/gi";


function NavbarComp() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/books">{<GiBookshelf />}</Navbar.Brand>
        <Nav className="me-auto">
          
          <Link to="/books">Books</Link>
          <Link to="/about">About</Link>
          <Link to="/cart">Cart</Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
