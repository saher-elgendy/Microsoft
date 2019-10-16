import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReusableCard from './../../../reusable/card';
import Price from './../../../reusable/price';
import SectionTitle from './../../../reusable/sectionTitle';
import CategoriesList from './../categories/categoriesList';


const BestProducts = (props) => {
    const { productCategories, products } = props;

    return (
        <section className="section best-products-section mt-4 border-bottom">
            <Container className="px-5 py-4">
                <Row className="flex-lg-row flex-column">
                    <Col>
                        <SectionTitle
                            classes={{
                                container: 'text-lg-left text-center',
                                title: 'font-size-xl',
                                text: 'mb-0'
                            }}
                            title="Best Products"
                            text="Learn about all categories"
                        />
                    </Col>

                    <Col className="d-flex justify-content-lg-end justify-content-center">
                        <CategoriesList categories={productCategories} />
                    </Col>

                </Row>
                <Row className="justify-content-center mt-4">

                    {
                        products.map((p, index) => {
                            return (
                                <Col className="mt-4" xl={3}>
                                    <ReusableCard
                                        key={index}
                                        classes={{
                                            card: 'p-2 text-center shadow',
                                            image: 'card-image',
                                            cardBody: 'd-flex flex-column',
                                            title: 'h5',
                                            btn: 'py-2',
                                            btnIcon: 'fas fa-shopping-cart mr-2'
                                        }}
                                        image={p.image}
                                        alt={`${p.title}_image`}
                                        title={p.title}
                                        btnLabel="add to cart"
                                        btnText="Add To Card"
                                    >
                                        <Price
                                            classes={{
                                                originalPrice: 'font-weight-md',
                                                newPrice: 'font-size-xl font-weight-md text-primary'
                                            }}
                                            originalPrice={p.originalPrice}
                                            newPrice={p.newPrice}
                                        />
                                    </ReusableCard>
                                </Col>

                            );
                        })
                    }
                </Row>
            </Container>
        </section >
    );
}

export default BestProducts;