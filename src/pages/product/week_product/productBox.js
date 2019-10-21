import React from 'react';
import ReusableButton from '../../../reusable/button';
import Input from './../../../reusable/input';


const ProductBox = () => {
    return (
        <div className="product-box p-4 border bg-primary shadow text-center d-flex flex-column">
            <Input
                classes={{
                    inputGroup: 'd-flex flex-column-reverse',
                    formControl: 'w-100',
                    label: 'font-size-md text-white text-left',
                    prepend: 'd-none',
                    append: 'd-none'
                }}
                controlId="qty-input"
                type="number"
                name="product_qty"
                label="Qty"
                labelFor="qty-input"
                placeholder="0"
            />

            <Input
                classes={{
                    inputGroup: 'd-flex flex-column-reverse mt-3 w-100',
                    formControl: 'w-100',
                    label: 'font-size-md text-white text-left',
                    prepend: 'd-none',
                    append: 'd-none'
                }}
                as="select"
                controlId="size-select"
                type="number"
                name="product_size_select"
                label="size"
                labelFor="size-select"
            >
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
            </Input>

            <ReusableButton
                classes={{
                    btn: 'product-box-btn bg-orange text-uppercase mt-3',
                    icon: 'fas fa-shopping-cart mr-2'
                }}
                label="add to cart"
                text="Add To Cart"
            />

            <ReusableButton 
                classes={{
                    btn: 'product-box-btn bg-dark text-uppercase mt-2',
                }}
                to="#"
                label="check availability"
                text="Check Availability"
            />
        </div>
    );
}

export default ProductBox;