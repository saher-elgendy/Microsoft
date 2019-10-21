import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import images from './../../../images';
import './index.css';
import ProductBox from './productBox';
import ProductDetails from './productDetails';
import ProductDescription from './productDescription';

const ProductOfTheWeek = () => {
    return (
        <section className="section week-product-section py-sm-0 py-5">
            <Container className="py-5">
                <Row className="justify-content-lg-between justify-content-center">
                    <Col md={6} lg={4} className="d-flex align-items-">
                        <img src={images.surfaceLaptop2} alt="surface_laptop" className="mx-auto" />
                    </Col>
                    <Col md={6} lg={4} className="mt-md-0 mt-3">
                        <ProductDetails />
                    </Col>
                    <Col md={6} lg={4} xl={3} className="ml-lg-auto mt-lg-0 mt-5">
                        <ProductBox />
                    </Col>
                </Row>
                <ProductDescription />
            </Container>
        </section>
    );
}

export default ProductOfTheWeek;