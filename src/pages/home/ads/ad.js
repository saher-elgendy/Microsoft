import React from 'react';
import ReusableCard from '../../../reusable/card';
import Price from '../../../reusable/price';


const ad = (props) => {
    const { adDetails } = props;
    
    return (
        <div className="ad">
            <ReusableCard
                classes={{
                    card: `ad-card flex-row text-white bg-${adDetails.bg}`,
                    image: 'card-image',
                    cardBody: 'p-1 pb-5',
                    title: '',
                    btn: 'bg-white text-dark border-0 px-4 font-weight-md',
                    btnIcon: ''
                }}
                image={adDetails.image}
                alt={`${adDetails.productName}_image`}
                btnLabel="view product"
                btnText="View Product"
            >
                <p className="h3 font-weight-bg">Save up to 70% off</p>
                <Price 
                    classes={{
                        originalPrice: 'font-weight-md',
                        newPrice: 'font-size-xl font-size-bg'
                    }}
                    originalPrice={adDetails.originalPrice}
                    newPrice={adDetails.newPrice}
                />
            </ReusableCard>
        </div>
    );
}

export default ad;