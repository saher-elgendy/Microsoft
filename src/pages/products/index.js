import React from 'react';
import Contacts from '../../reusable/contacts';
import Intro from '../../reusable/intro';
import Header from './../../reusable/demoheader/index';
import Footer from './../../reusable/footer/index';
import AllProducts from './allProducts/index';


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