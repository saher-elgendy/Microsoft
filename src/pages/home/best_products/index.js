import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from './../../../reusable/productCard';
import SectionTitle from './../../../reusable/sectionTitle';
import CategoriesList from './../categories/categoriesList';


const BestProducts = (props) => {
    const { productCategories, products } = props;

    return (
        <section className="section best-products-section border-bottom bg-light">
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
                                <Col key={index} className="mt-4" xl={3}>
                                    <ProductCard product={p} />
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