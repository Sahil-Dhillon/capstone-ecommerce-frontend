// src/components/Navbar.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const VendorNavbar = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="#">Vendor Dashboard</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="#dashboard">Dashboard</Nav.Link>
        <Nav.Link href="#products">Products</Nav.Link>
        <Nav.Link href="#inventory">Inventory</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default VendorNavbar;
