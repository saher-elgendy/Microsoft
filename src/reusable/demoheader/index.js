import React from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import './index.css';
import Navigation from './navbar';
import UserPanel from './userPanel';





const Header = (props) => {

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
            to: '/sign_in'
        }

    ];

    const userPanelItems = [
        <i
            className="fas fa-shopping-cart position-relative" aria-hidden="true"
        >
            <span className="cart-products-num text-primary font-weight-md">{props.cartProducts.length}</span>
        </i>,
        <i className="fas fa-search" aria-hidden="true"></i>,
        <i className="fas fa-user" aria-hidden="true"></i>
    ];

    return (
        <header className="header border-bottom bg-light">
            <Container className="flex-row align-items-center justify-content-between flex-wrap ">
                <Navigation navItems={navItems} />
                <UserPanel userPanelItems={userPanelItems} />
            </Container>

        </header>
    );
}

const mapStateToProps  = (state) => ({
    cartProducts: state.cartProducts
});

export default connect (mapStateToProps) (Header);