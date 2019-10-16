import React from 'react';
import List from './../../../reusable/list';

const CategoriesList = (props) => {
    return (
        <List
            classes={{
                list: 'categories-list d-flex',
                listItem: 'categories-list-item p-sm-4 p-3 ml-md-2 font-weight-md'
            }}
            items={props.categories} 
        />
    );
}

export default CategoriesList;