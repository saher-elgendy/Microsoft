import React from 'react';


const Price = ({ classes, ...props }) => {
    return (
        <p >
            <s className={classes.originalPrice}>
                {props.originalPrice}
            </s>&nbsp;
            <span className={classes.newPrice}>
                {props.newPrice}
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