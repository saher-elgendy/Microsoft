import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import images from './../../../images';
import Ad from './ad';
import './index.css';



const Ads = () => {

    const ads = [
        {
            ProductName: 'Surface Laptop',
            image: images.laptop,
            newPrice: '$2500',
            originalPrice: '$3500',
            bg: 'blue'

        },
        {
            ProductName: 'Surface Mouse',
            image: images.mobile,
            newPrice: '$2500',
            originalPrice: '$3500',
            bg: 'red'
        }
    ];

    return (
        <section className="section ads-section">
            <Container className="py-4">
                <Row className="flex-md-row flex-column mt-4">
                    {
                        ads.map((ad, index) => {
                            return (
                                <Col key={index} lg={6} className="ad-col mt-lg-0 mt-4">
                                    <Ad  adDetails={ad} />
                                </Col>
                            );
                        })
                    }
                </Row>
            </Container>
        </section>
    );
}

export default Ads;