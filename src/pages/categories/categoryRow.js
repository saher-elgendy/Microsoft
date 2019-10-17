import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Article from './../../reusable/article';



const CategoryRow = (props) => {
    const { category } = props;
    
    return (
        <Row className="category-row flex-md-row flex-column mt-3">
            <Col md={7} className="d-flex align-items-center justify-content-center">
                <Article
                    classes={{
                        article: 'category-article',
                        title: 'font-size-xl mb-3',
                        text: ''
                    }}
                    title={category.articleTitle}
                    text={category.articleText}
                />
            </Col>
            <Col md={5} className="d-flex align-items-center justify-content-center">
                <img src={category.image} alt={`${category.title}_image`} className="category-image" />
            </Col>
        </Row>
    );
}

export default CategoryRow;