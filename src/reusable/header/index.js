import React from 'react';
import { Container } from 'react-bootstrap';
import './index.css';
import Navigation from './navbar';
import UserPanel from './userPanel';


const Header = () => {
    const navItems = ['Home', 'Categories', 'Products', 'Product', 'Sign in', 'Sign up'];
    
    return (
        <header className="header border-bottom bg-light">
            <Container className="flex-row justify-content-between flex-wrap">
                <Navigation navItems={navItems}/>
                <UserPanel />
            </Container>
        </header>
    );
}

export default Header;