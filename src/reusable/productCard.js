import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from './../redux/cart/action';
import ReusableCard from './card';
import Price from './price';

const ProductCard = (props) => {
    const { product, cartProducts, addToCart } = props;
    const { image, title, oldPrice, newPrice } = product;

    return (
        <ReusableCard
            classes={{
                card: 'product-card text-center shadow',
                image: 'card-image',
                cardBody: 'flex-grow-1',
                title: 'h5',
                btn: 'w-100',
                btnIcon: 'fas fa-shopping-cart mr-2'
            }}
            image={image}
            alt={`${title}_image`}
            title={title}
            btnLabel="add to Cart"
            btnText="Add To Cart"
            onBtnClick={() => addToCart(product, cartProducts)}
        >
            <Price
                classes={{
                    originalPrice: 'font-weight-bold',
                    newPrice: 'font-size-xl font-weight-md text-primary'
                }}
                originalPrice={oldPrice}
                newPrice={newPrice}
            />
        </ReusableCard>
    );
}

const mapStateToProps = (state) => {
    return {
        cartProducts: state.cartProducts
    }
}

export default connect(mapStateToProps, { addToCart })(ProductCard);