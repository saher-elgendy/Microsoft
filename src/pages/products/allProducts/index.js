import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../../../reusable/productCard';
import images from './../../../images';
import Filters from './filters';
import './index.css';
import SortBy from './sortBy';


const AllProducts = () => {
    const products = [
        {
            title: 'Surface Laptop',
            image: images.laptop,
            newPrice: '2500',
            originalPrice: '3500',
        },
        {
            title: 'Surface Laptop',
            image: images.laptop,
            newPrice: '2500',
            originalPrice: '3500',
        },
        {
            title: 'Surface Laptop',
            image: images.mobile,
            newPrice: '2500',
            originalPrice: '3500',
        },
        {
            title: 'Surface Laptop',
            image: images.laptop,
            newPrice: '2500',
            originalPrice: '3500',
        },
        {
            title: 'Surface Laptop',
            image: images.laptop,
            newPrice: '2500',
            originalPrice: '3500',
        },
        {
            title: 'Surface Laptop',
            image: images.laptop,
            newPrice: '2500',
            originalPrice: '3500',
        },
    ];

    const filters = ['Laptop', 'iPad', 'iPhone', 'Accessories'];
    const sortBy = ['none', 'low to high price', 'high to low price'];

    return (
        <section className="section all-products-section py-sm-0 py-3">
            <Container className="py-5">
                <div className="d-flex flex-md-row flex-column justify-content-md-between justify-content-center align-items-center">
                    <Filters filters={filters} />
                    <SortBy sortBy={sortBy}/>
                </div>
                <Row className="flex-wrap mt-5 justify-content-center">
                    {
                        products.map((p, index) => {
                            return (
                                <Col key={index} xl={3} lg={4} sm={6} className="mt-4">
                                    <ProductCard product={p}/>
                                </Col>
                            );
                        })
                    }

                </Row>
            </Container>
        </section>
    );
}

export default AllProducts;