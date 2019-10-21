import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Article from '../../../reusable/article';
import images from './../../../images';

const ProductDescriptionRow = (props) => {
    return (
        <Row className={`mt-5 flex-${props.direction}`}>
            <Col md={6} className="text-center">
                <img src={images.surfaceLaptop2} alt="surface_laptop" />
            </Col>
            <Col md={6}>
                <Article
                    classes={{
                        title: 'font-size-xl',
                    }}
                    title="Surface Pro 6"
                    text="HP ENVY. This heavy-duty workhorse brings desktop power with a 7th processor and 12GB of memory, 
                    while a 17.3-inch Full HD touchscreen provides a roomy canvas to get hands-on with work and play. Games
                     and videos come to vivid life with super-charged NVIDIA   GeForce 940MX graphics, and everything sounds 
                     as good as it looks with high-end Bang & Olufsen audio."
                />
            </Col>
        </Row>
    );
}

export default ProductDescriptionRow;