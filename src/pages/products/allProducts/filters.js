import React from 'react';
import List from '../../../reusable/list';


const Filters = (props) => {
    const { filters } = props;

    return (
        <div className="filters d-flex flex-column align-items-md-start align-items-center">
            <p className="font-weight-bold">filter proucts by:</p>
            <List
                classes={{
                    list: 'd-flex',
                    listItem: 'text-white filter-item mr-4 bg-primary font-weight-md px-3'
                }}
                items={filters}
            />
        </div>
    );
}

export default Filters;