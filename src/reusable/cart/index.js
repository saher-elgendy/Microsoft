import React, { useContext } from 'react';
import { connect } from 'react-redux';
import ReusableButton from './../button';
import CartContext from './cartContext';
import CartProduct from './cartProduct';
import './index.css';

const Cart = ({ classes, ...props }) => {
    const { cartProducts } = props;
    const handleCartIconClick = useContext(CartContext);

    const totalPay = cartProducts.reduce((acc, current) => {
        //converting price string into number
        current = Number(current.newPrice.slice(0, -1));
        return acc + current;
    }, 0);

    return (
        <div className={`off-canvas py-4 px-2 text-white bg-dark ${classes.cart}`}>
            <span
                className="cart-close-btn"
                onClick={handleCartIconClick}
            >X</span>
            <div className="cart-products overflow-auto h-100">
                {
                    cartProducts.length ?
                        <ul>
                            {
                                cartProducts.map((p, i) => {
                                    return (
                                        <CartProduct product={p} key={i} />
                                    );
                                })
                            }
                        </ul> : 'No products in your cart'
                }
            </div>
            {
                cartProducts.length ?
                    <div className="check-out text-center py-3">
                        <div className="total-pay text-white">
                            <p className="font-size-md">Total: {totalPay}$</p>
                        </div>
                        
                        <ReusableButton
                            classes={{
                                btn: 'check-out-btn bg-dark my-2 mr-3'
                            }}
                            type="submit"
                            text="Check Out"
                            label="check-out"
                        />
                    </div> : ''
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        cartProducts: state.cartProducts
    }
}

export default connect(mapStateToProps)(Cart); 