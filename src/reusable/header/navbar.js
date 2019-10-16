import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import images from '../../images';

const Navigation = (props) => {
    return (
        <Navbar expand="xl" className="flex-grow-1">
            <Navbar.Brand href="/">
                <img src={images.logo} alt="microsoft_logo" className="header-logo" />
            </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse id="navbar-nav" className="mt-xl-0 mt-4">
                <Nav className="ml-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/products">Products</Nav.Link>
                    <Nav.Link href="categories">Catgeories</Nav.Link>
                    <Nav.Link href="week_product">Product</Nav.Link>
                    <Nav.Link href="sign_in">Sign In</Nav.Link>
                    <Nav.Link href="sign_up">Sign Up</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;