import React from 'react';
import ReusableCard from './card';
import Price from './price';

const ProductCard = (props) => {
    const { image, title, oldPrice, newPrice } = props.product;

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
            onBtnClick=""
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

export default ProductCard;