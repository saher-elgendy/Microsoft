import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Provider } from '../cart/cartContext';
import './index.css';
import Navigation from './navbar';
import UserPanel from './userPanel';



const Header = (props) => {

    const [cartOpen, toggleCartOpen] = useState(false);

    const handleToggleCartShow = () => {
        toggleCartOpen(!cartOpen);
    }

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


    return (
        <header className="header border-bottom bg-light">
            <Container className="flex-row align-items-center justify-content-between flex-wrap">
                <Navigation navItems={navItems} />
                <Provider  value={handleToggleCartShow}>
                    <UserPanel
                        cartOpen={cartOpen}
                        handleToggleCartShow={handleToggleCartShow}
                        cartProducts={props.cartProducts}
                    />
                </Provider>
            </Container>
        </header>
    );
}

const mapStateToProps = (state) => ({
    cartProducts: state.cartProducts
})

export default connect(mapStateToProps)(Header);