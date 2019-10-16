import React from 'react';
import { Col } from 'react-bootstrap';
import List from '../list';


const ServicesCol = (props) => {
    const { items } = props;
    return (
        <Col className="mt-4">
            <List
                classes={{
                    list: 'd-flex flex-column',
                    listItem: ''
                }}
                items={items}
            />
        </Col>
    );
}

export default ServicesCol;