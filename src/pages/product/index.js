import React from 'react';
import Contacts from './../../reusable/contacts/index';
import Header from './../../reusable/demoheader/index';
import Footer from './../../reusable/footer/index';
import Intro from './../../reusable/intro/index';
import ProductOfTheWeek from './week_product/index';



const Product = () => {
    return (
        <>
            <Header />
            <Intro />
            <ProductOfTheWeek />
            <Contacts />
            <Footer />
        </>
    );
}

export default Product;