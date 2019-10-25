import React from 'react';
import { connect } from 'react-redux';
import Contacts from '../../reusable/contacts';
import Intro from '../../reusable/intro';
import Header from './../../reusable/demoheader/index';
import Footer from './../../reusable/footer/index';
import AllProducts from './allProducts/index';


const Products = (props) => {
    return (
        <>
            <Header />
            <Intro />
            <AllProducts products={props.products}/>
            <Contacts />
            <Footer />
        </>
    );
}

const mapStateToProps = (state) => ({
    products: state.products
});

export default connect(mapStateToProps)(Products);