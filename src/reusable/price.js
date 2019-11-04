import React from 'react';


const Price = ({ classes, ...props }) => {
    const { originalPrice, newPrice } = props;
    return (
        <p >
            <s className={classes.originalPrice}>
                {originalPrice}
            </s>&nbsp;
            <span className={classes.newPrice}>
                {newPrice}
            </span>
        </p>
    );
}


export default Price;



/*
component implementation in parent
    <Price
        classes={{
            originalPrice: '';
            newPrice: ''
        }}
        originalPrice=""
        newPrice=""
    />
*/