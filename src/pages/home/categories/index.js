import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReusableButton from './../../../reusable/button';
import ReusableCarousel from './../../../reusable/carousel/carousel';
import CarouselItem from './../../../reusable/carousel/carouselItem';
import SectionTitle from './../../../reusable/sectionTitle';
import FeatureItem from './featureItem';



const Categories = (props) => {

    const { categoriesSlides } = props;

    const features = [
        {
            icon: 'fas fa-shipping-fast',
            iconBg: 'red',
            featureTitle: 'Free Shipping',
            featureText: 'Where everyday shipping free'
        },
        {
            icon: 'fas fa-dollar-sign',
            iconBg: 'primary',
            featureTitle: 'Sale Sale!',
            featureText: 'Where everyday shipping free'
        },
        {
            icon: 'fas fa-gift',
            iconBg: 'success',
            featureTitle: 'New Offers%',
            featureText: 'Where everyday shipping free'
        }
    ]


    return (
        <section className="section categories-section py-4 border-bottom">
            <h2 className="sr-only">Categories section</h2>
            <Container>
                <Row className="flex-md-row flex-column">
                    <Col className="d-flex align-items-md-center justify-content-md-start justify-content-center">
                        <SectionTitle
                            classes={{
                                title: 'font-size-xl',
                                text: 'mb-0'
                            }}
                            title='Microsoft Categories'
                            text='Learn more about all categories'
                        />
                    </Col>

                    <Col className="d-flex justify-content-md-end justify-content-center mt-md-0 mt-5 align-items-md-center">
                        <ReusableButton
                            classes={{
                                btn: 'bg-white text-dark font-size-xs px-4 font-weight-bold',
                            }}
                            to="#"
                            label="view all"
                            text="View all"
                        />
                    </Col>

                </Row>

                <Row className="px-5 mt-4">
                    <ReusableCarousel
                        classes={{
                            carousel: 'w-100 mt-4',
                            carouselItem: 'categories-carousel-item',
                            carouselItemRow: 'flex-xl-column flex-row flex-wrap h-100 justify-content-xl-between justify-content-center'
                        }}
                        items={categoriesSlides}
                    >
                        <CarouselItem
                            classes={{
                                colClasses: "category-carousel-item-col",
                                cardClasses: "category-card",
                                titleClasses: "font-size-xl font-weight-xl mb-4 text-white",
                                btnClasses: "text-dark bg-white border-0 font-weight-md px-3 text-nowrap"
                            }}
                            btnText="View Products"
                            btnLabel="view products"
                        />
                    </ReusableCarousel>
                </Row>

                <Row className="features justify-content-xl-between justify-content-center mt-4 mb-4 px-5">
                    {
                        features.map((f, index) => {
                            return (
                                <Col md={6} xl={4} className="mt-4">
                                    <FeatureItem
                                        key={index}
                                        icon={f.icon}
                                        iconBg={f.iconBg}
                                        featureTitle={f.featureTitle}
                                        featureText={f.featureText}
                                    />
                                </Col>
                            );
                        })
                    }
                </Row>
            </Container>
        </section>
    );
}

export default Categories;