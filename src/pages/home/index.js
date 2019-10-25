import React, { useState } from 'react';
import { connect } from 'react-redux';
import Contacts from '../../reusable/contacts';
import images from './../../images';
// import Header from '../../reusable/Header';
import Header from './../../reusable/demoheader/index';
import Footer from './../../reusable/footer/index';
import Intro from './../../reusable/intro/index';
import { createSlides, setItemsNum } from './../../util/util';
import Ads from './ads';
import BestDeals from './best_deals/index';
import BestProducts from './best_products/index';
import BestSale from './best_sale/index';
import Categories from './categories/index';
import './index.css';
import Panorama from './panorama/index';


const Home = (props) => {
    const { products } = props;
    const productCategories = ['Mac', 'iPhone', 'iPad', 'Accessories', 'Laptops', 'All'];

    // const products = [
    //     {
    //         title: 'Surface Laptop',
    //         image: images.laptop,
    //         newPrice: '$2500',
    //         originalPrice: '$3500',
    //     },
    //     {
    //         title: 'Surface Laptop',
    //         image: images.laptop,
    //         newPrice: '$2500',
    //         originalPrice: '$3500',
    //     },
    //     {
    //         title: 'Surface Laptop',
    //         image: images.mobile,
    //         newPrice: '$2500',
    //         originalPrice: '$3500',
    //     },
    //     {
    //         title: 'Surface Laptop',
    //         image: images.laptop,
    //         newPrice: '$2500',
    //         originalPrice: '$3500',
    //     },
    //     {
    //         title: 'Surface Laptop',
    //         image: images.laptop,
    //         newPrice: '$2500',
    //         originalPrice: '$3500',
    //     },
    //     {
    //         title: 'Surface Laptop',
    //         image: images.laptop,
    //         newPrice: '$2500',
    //         originalPrice: '$3500',
    //     },
    // ];

    const categories = [
        {
            title: 'Laptops',
            bg: 'red',
            image: images.laptop,
            xl: 3,
            lg: 4,
            md: 6,
            direction: 'column-reverse'
        },
        {
            title: 'Mobiles',
            bg: 'green',
            image: images.mobile,
            xl: 4,
            lg: 4,
            md: 6,
            direction: 'row-reverse'
        },
        {
            title: 'Mouses',
            bg: 'orange',
            image: images.mouse,
            xl: 4,
            lg: 4,
            md: 6,
            direction: 'row'
        },
        {
            title: 'Tablets',
            bg: 'blue',
            image: images.tablet1,
            xl: 5,
            lg: 4,
            md: 6,
            direction: 'column-reverse'
        },
        {
            title: 'Laptops',
            bg: 'red',
            image: images.laptop,
            xl: 3,
            lg: 4,
            md: 6,
            direction: 'column-reverse'
        },
        {
            title: 'Mobiles',
            bg: 'green',
            image: images.mobile,
            xl: 4,
            lg: 4,
            md: 6,
            direction: 'row-reverse'
        },
        {
            title: 'Mouses',
            bg: 'orange',
            image: images.mouse,
            xl: 4,
            lg: 4,
            md: 6,
            direction: 'row'
        },
        {
            title: 'Tablets',
            bg: 'blue',
            image: images.tablet1,
            xl: 5,
            lg: 4,
            md: 6,
            direction: 'column-reverse'
        },
    ];



    const [itemsNum, changeItemsNum] = useState(1);

    ['load', 'resize'].forEach(e => {
        window.addEventListener(e, () => setItemsNum(changeItemsNum));
    })

    const productsSlides = createSlides(products, itemsNum);
    const categoriesSlides = createSlides(categories, itemsNum);

    return (
        <>
            <Header />
            <Intro />
            <BestSale />
            <Categories categoriesSlides={categoriesSlides} />
            <Panorama />
            <BestProducts productCategories={productCategories} products={products} />
            <Ads />
            <BestDeals productCategories={productCategories} productsSlides={productsSlides} />
            <Contacts />
            <Footer />
        </>
    );
}


const mapStateToProps = (state) => ({
    products: state.products
})

export default connect (mapStateToProps, undefined)(Home);