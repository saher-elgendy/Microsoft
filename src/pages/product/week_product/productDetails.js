import React from 'react';
import List from '../../../reusable/list';
import Price from './../../../reusable/price';


const ProductDetails = () => {
    const specs = ['Intel i7 Octa core processer ', '8Gb Ram', '1TB HDD/250Gb SSD']
    return (
        <div className="product-details">
            <h4>Surface Pro 6 | Easy High Definition (HD) Streaming Media Player</h4>
            <Price
                classes={{
                    originalPrice: 'font-size-md font-weight-md',
                    newPrice: 'font-size-xl font-weight-bg text-primary'
                }}
                originalPrice="$3500"
                newPrice="$2500"
            />
            <p>
                Save $29 on PerformanceGaurd when you add office 365 and PerformanceGaurd yo your order.
                 PerformanceGaurd provides up to two years of accidental coverage and technical support.
            </p>
            <List 
                classes={{
                    list: 'specs-list',
                    listItem: 'font-weight-bold'
                }}
                items={specs}
            />
        </div>
    );
}

export default ProductDetails;