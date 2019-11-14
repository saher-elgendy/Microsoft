import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/cart/action';
import Price from '../price';


const CartProduct = (props) => {
    const { product, removeFromCart } = props;

    return (
        <li className="cart-product d-flex p-3 d-flex align-items-center mb-3">
            <img src={product.image} alt={product.title} className="cart-product-img" />
            <div className="cart-product-details px-2">
                <p>{product.title}</p>
                <Price
                    classes={{
                        originalPrice: 'font-size-sm',
                        newPrice: 'font-size-bg'
                    }}
                    originalPrice={product.oldPrice}
                    newPrice={product.newPrice}
                />
                <p className="mt-auto">Quantity: {product.quantity}</p>
            </div>
            <span
                className="cart-product-remove-btn ml-auto font-size-md"
                onClick={() => removeFromCart(product)}
            >x</span>

        </li>
    );
}

export default connect (undefined, { removeFromCart })(CartProduct);