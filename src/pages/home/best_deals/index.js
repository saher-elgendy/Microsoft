import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import List from '../../../reusable/list';
import SectionTitle from '../../../reusable/sectionTitle';
import { updateCart } from './../../../redux/cart/action';
import ReusableCarousel from './../../../reusable/carousel/carousel';
import CarouselItem from './../../../reusable/carousel/carouselItem';



const BestDeals = (props) => {
    const { productCategories, productsSlides, updateCart, cartProducts } = props;

    console.log(cartProducts)

    return (
        <section className="section best-deals-section border-bottom">
            <Container className="py-4">
                <Row className="flex-md-row flex-column">
                    <Col className="d-flex justify-content-md-start justify-content-center" >
                        <SectionTitle
                            classes={{
                                container: 'text-md-left text-center',
                                title: 'font-size-xl',
                                text: 'mb-0'
                            }}
                            title="Best Deals"
                            text="Learn about all categories"
                        />
                    </Col>
                    <Col className="d-flex justify-content-md-end justify-content-center">
                        <List
                            classes={{
                                list: 'categories-list d-flex justify-content-between',
                                listItem: 'categories-list-item p-md-4 p-3 ml-md-2 ml-0 font-weight-md'
                            }}
                            items={productCategories}
                        />
                    </Col>
                </Row>

                <Row>
                    <ReusableCarousel
                        classes={{
                            carousel: 'w-100 mt-4',
                            carouselItem: 'best-deals-carousel-item',
                            carouselItemRow: 'justify-content-center px-5'
                        }}
                        items={productsSlides}
                    >
                        <CarouselItem
                            classes={{
                                cardClasses: "best-deals-card text-center shadow",
                                titleClasses: "h5 font-weight-md mb-4",
                                btnClasses: " font-weight-md px-3 text-nowrap w-100",
                                btnIconClasses: "fas fa-shopping-cart mr-2"
                            }}
                            btnText="Add To Cart"
                            btnLabel="add to cart"
                            onBtnClick={() => updateCart(cartProducts, {quantity: 1, id: 2})}
                        />
                    </ReusableCarousel>
                </Row>
            </Container>
        </section >
    );
}

const mapStateToProps = (state) => ({
    cartproducts: state.cartProducts
});


export default connect(mapStateToProps, { updateCart })(BestDeals);