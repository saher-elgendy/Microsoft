import React from 'react';
import Cart from './../cart/index';


const UserPanel = (props) => {
    const { cartOpen, handleToggleCartShow, cartProducts } = props;

    return (
        <div className="user-panel">
            {cartOpen ? <Cart classes={{ cart: 'cart-open' }} /> : ''}

            <ul className="user-panel-icons d-flex">
                <li className="user-panel-icon" >
                    <i
                        onClick={handleToggleCartShow}
                        className="fas fa-shopping-cart"
                        aria-hidden="true">
                    </i>
                    <span className="cart-products-num text-primary">{cartProducts.length}</span>
                </li>
                <li className="user-panel-icon">
                    <i className="fas fa-search" aria-hidden="true"></i>
                </li>
                <li className="user-panel-icon">
                    <i className="fas fa-user" aria-hidden="true"></i>
                </li>
            </ul>
        </div>
    );
}

export default UserPanel;