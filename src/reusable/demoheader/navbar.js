import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import images from './../../images';

const Navigation = (props) => {
    const { navItems } = props;
    return (
        <Navbar className="flex-grow-1" expand="lg">
            <Navbar.Brand >
                <img src={images.logo} alt="microsoft_logo" className="header-logo" />
            </Navbar.Brand>
            <Navbar.Toggle className="navbar-nav-toggler" aria-controls="navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse id="navbar-nav">
                <Nav className="main-nav justify-content-between flex-grow-1 px-3">
                    {
                        navItems.map((item, index) => {
                            return (
                                <Nav.Link
                                    key={index}
                                    href={item.to}
                                    className="font-size-md"
                                >{item.title}</Nav.Link>
                            );
                        })
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;