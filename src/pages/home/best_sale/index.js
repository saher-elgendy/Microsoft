import React from 'react';
import { Badge, Col, Container, Row } from 'react-bootstrap';
import ReusableButton from '../../../reusable/button';
import images from './../../../images';
import './index.css';

const BestSale = () => {
    return (
        <section className="section best-sale-section border-bottom bg-light">
            <Container className="py-5">
                <Row className="mx-0 flex-md-row flex-column">
                    <Col className="d-flex flex-column align-items-start pl-0">
                        <Badge className="best-sale-badge bg-danger px-2 py-2 text-uppercase text-white mb-3">Best Sale</Badge>
                        <h2>Surface Pro 6 - HD high quality</h2>
                        <span className="best-sale-price text-primary font-weight-md mb-4">$5620.99</span>
                        <p>
                            Ultra-light and versatile. Get productive your way with new Surface Pro 6--now faster than ever with the latest 8th
                            Generation Intel®™ processor and the full Windows 10 Home experience.
                        </p>
                        <div className="best-sale-btns d-flex align-items-center mt-3">
                            <ReusableButton
                                classes={{
                                    btn: 'mr-5',
                                    icon: 'fas fa-shopping-cart mr-2'
                                }}
                                text="Add To Cart"
                                label="add to cart"
                            />

                            <a href="#" className="read-more-btn">read more</a>
                        </div>
                    </Col>
                    <Col>
                        <img src={images.bestSale} alt="laptop_image" />
                    </Col>

                </Row>
            </Container>
        </section>
    );
}

export default BestSale;