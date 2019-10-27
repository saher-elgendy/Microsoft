import React from 'react';
import Input from '../../../reusable/input';


const Filters = (props) => {
    const { filters, handleCheckboxToggle } = props;

    return (
        <div className="filters d-flex flex-column align-items-md-start align-items-center">
            <p className="font-weight-bold">filter proucts by:</p>
            <ul className="filters-list d-flex">
                {
                    filters.map((filter, index) => {
                        return (
                            <li
                                key={index}
                                className="filter-item"
                            >
                                <Input
                                    classes={{
                                        formControl: 'filter-checkbox d-none',
                                        label: 'filter-label px-md-4 px-3 font-weight-md',
                                    }}
                                    controlId={`${filter}-filter-checkbox`}
                                    type="checkbox"
                                    name="filter_checkbox"
                                    label={filter}
                                    labelFor={`${filter}-filter-checkbox`}
                                    onChange={e => handleCheckboxToggle(e, filter)}
                                />
                            </li>
                        );
                    })
                }
            </ul>

        </div>
    );
}

export default Filters;