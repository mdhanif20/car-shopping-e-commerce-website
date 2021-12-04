import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Navigation.css";
import useFirebase from './../../Firebase/useFirebase';
import img from "../../../images/banner/logo.png"


const Navigation = () => {
  const {users,logOut} = useFirebase();
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand>
      <img id="logo" src={img} alt="" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link as={Link} to="home">Home</Nav.Link>
        <Nav.Link as={Link} to="allProducts">All Products</Nav.Link>
        <Nav.Link as={Link} to="deshboard">DeshBoard</Nav.Link>
   
     {/*  {
        users?.email && <NavDropdown title="Deshboard" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">
                        <Nav.Link as={Link} to="orders/:id" >Orders</Nav.Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        <Nav.Link as={Link} to="myorders" >My Orders</Nav.Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        <Nav.Link as={Link} to="payment" >Payment</Nav.Link>
                      </NavDropdown.Item>
                    </NavDropdown>
      } */}
        
      {
            (users?.email === "admin@admin.com") && <NavDropdown title="Admin Panel" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              <Nav.Link as={Link} to="allOrders" >All Orders</Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              <Nav.Link as={Link} to="addproduct" >Add Product</Nav.Link>
            </NavDropdown.Item>
          </NavDropdown>
      }

        
        {
          users?.email? 
          <Button type="button" className="btn btn-light" onClick={logOut}>Logout</Button>
          : 
          <Nav.Link as={Link} to="login" >Login</Nav.Link>
          }
        <Nav.Link as={Link} to="register" >Register</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Navigation;