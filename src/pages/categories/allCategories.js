import React from 'react';
import { Container } from 'react-bootstrap';
import CategoryRow from './categoryRow';

const AllCategories = (props) => {
    const { categories } = props;

    return (
        <section className="section all-categories-section py-sm-0 py-3">
            <Container className="py-4">
                {
                    categories.map((c, index) => {
                        return (
                            <CategoryRow key={index} category={c} />
                        );
                    })
                }

            </Container>
        </section>
    );
}

export default AllCategories;