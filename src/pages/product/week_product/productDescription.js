import React from 'react';
import ProductDescriptionRow from './productDescriptionRow';


const ProductDescription = () => {
    return (
       <div className="product-description mt-5">
           <ProductDescriptionRow  direction="row-reverse"/>
           <ProductDescriptionRow direction="row" />
       </div>
    );
}

export default ProductDescription;