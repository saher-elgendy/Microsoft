import React from 'react';
import { Container } from 'react-bootstrap';
import './index.css';
import Navigation from './navbar';
import UserPanel from './userPanel';




const Header = () => {
    const navItems = [
        {
            title: 'Home',
            to: '/'
        },
        {
            title: 'Categories',
            to: '/categories'
        },
        {
            title: 'Products',
            to: '/products'
        },
        {
            title: 'Product',
            to: '/product'
        },
        {
            title: 'Sign up',
            to: '/sign_up'
        },
        {
            title: 'Sign in',
            to: '/Sign_in'
        }

    ];

    const userPanelItems = [
        <i className="fas fa-shopping-cart"></i>,
        <i className="fas fa-search"></i>,
        <i className="fas fa-user"></i>
    ]

    return (
        <header className="header border-bottom bg-light">
            <Container className="flex-row align-items-center justify-content-between flex-wrap ">
                <Navigation navItems={navItems} />
                <UserPanel userPanelItems={userPanelItems} />
            </Container>

        </header>
    );
}

export default Header;