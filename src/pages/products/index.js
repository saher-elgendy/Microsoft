import React from 'react';
import Contacts from '../../reusable/contacts';
import Intro from '../../reusable/intro';
import Footer from './../../reusable/footer/index';
import AllProducts from './allProducts/index';
import Header from './../../reusable/demoheader/index';


const Products = () => {
    return (
        <>
            <Header />
            <Intro />
            <AllProducts />
            <Contacts />
            <Footer />
        </>
    );
}

export default Products;