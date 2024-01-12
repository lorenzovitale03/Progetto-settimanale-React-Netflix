import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import immagine from '../assets/logo.png'
import newImage from '../assets/avatar.png'
const NavBar = () => {
      return (
        <Navbar bg="dark" expand="lg" variant="dark">
          <Navbar.Brand href="#">
          <img src={immagine} width={"100px"}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#" className="font-weight-bold">Home</Nav.Link>
              <Nav.Link href="#" className="font-weight-bold">TV Shows</Nav.Link>
              <Nav.Link href="#" className="font-weight-bold">Movies</Nav.Link>
              <Nav.Link href="#" className="font-weight-bold">Recently Added</Nav.Link>
              <Nav.Link href="#" className="font-weight-bold">My List</Nav.Link>
            </Nav>
        <div className="d-flex align-items-end">
            <Form inline className='d-flex'>
              <FormControl type="text" placeholder="Search" className="d-flex align-items-center" />
              <Button variant="outline-success" className="ms-3">Search</Button>
            </Form>
            <img src={newImage} width={"40px"} className="mx-3"/>
            <NavDropdown title="KIDS" id="basic-nav-dropdown" className='text-white m-1'>
              {/* Add kids-related menu items if needed */}
            </NavDropdown>
        </div>
          </Navbar.Collapse>
        </Navbar>
      );
    }

export default NavBar