import React from 'react';
import ReusableCard from './card';
import Price from './price';

const ProductCard = (props) => {
    const { product } = props;

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
            image={product.image}
            alt={`${product.title}_image`}
            title={product.title}
            btnLabel="add to Cart"
            btnText="Add To Cart"
            onBtnClick=""
        >
            <Price
                classes={{
                    originalPrice: 'font-weight-md',
                    newPrice: 'font-size-xl font-weight-md text-primary'
                }}
                originalPrice={product.originalPrice}
                newPrice={product.newPrice}
            />
        </ReusableCard>
    );
}

export default ProductCard;

