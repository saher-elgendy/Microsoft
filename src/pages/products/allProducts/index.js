import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import ProductCard from '../../../reusable/productCard';
import { addFilter, removeFilter } from './../../../redux/filters/action';
import Filters from './filters';
import './index.css';
import SortBy from './sortBy';


const AllProducts = (props) => {
    const { products, filters, addFilter, removeFilter } = props;

    const allFilters = ['Mac', 'iPhone', 'iPad', 'Accessories', 'Laptops'];
    const sortByItems = ['none', 'low to high price', 'high to low price'];

    /**
     * if corresponding checkbox is checked and filters array does not contain that filter, it should be added
     * unchecking a checkbox remove the corresponding filter from filters array
     * 
     * @param {string} filter 
     */
    const handleCheckboxToggle = (e, filter) => {
        if (e.target.checked && !filters.includes(filter)) {
            addFilter(filter);
        }
        else {
            removeFilter(filter);
        }
    }

    return (
        <section className="section all-products-section py-sm-0 py-3">
            <Container className="py-5">
                <div className="d-flex flex-md-row flex-column justify-content-md-between justify-content-center align-items-center">
                    <Filters filters={allFilters} handleCheckboxToggle={handleCheckboxToggle} />
                    <SortBy sortByItems={sortByItems} />
                </div>
                <Row className="flex-wrap mt-5 justify-content-center">
                    {
                        products.map((p, index) => {
                            return (
                                <Col key={index} xl={3} lg={4} sm={6} className="mt-4">
                                    <ProductCard product={p} />
                                </Col>
                            );
                        })
                    }

                </Row>
            </Container>
        </section>
    );
}

const mapStateToProps = (state) => ({
    filters: state.filters,
});

export default connect(mapStateToProps, {addFilter, removeFilter})(AllProducts);