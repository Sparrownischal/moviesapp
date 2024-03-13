import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import LoginModal from './login';

function Header() {
  const [modalShow, setModalShow] = React.useState(false);
  return (

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">My Movies App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
            <Nav.Link as={Link} to="/shows">Shows</Nav.Link>
          </Nav>
          <LoginModal />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

