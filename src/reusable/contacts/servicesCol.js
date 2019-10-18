import React from 'react';
import { Col } from 'react-bootstrap';


const ServicesCol = (props) => {
    const { items } = props;
    
    return (
        <Col className="mt-4">
            <ul>
                {
                    items.map((i, index) => {
                        return (
                            <li key={index} >
                                <a href="#">{i}</a>
                            </li>
                        );
                    })
                }
            </ul>
        </Col>
    );
}

export default ServicesCol;