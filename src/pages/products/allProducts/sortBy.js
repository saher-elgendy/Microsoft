import React from 'react';
import { connect } from 'react-redux';
import { updateSortBy } from './../../../redux/sort/action';

const SortBy = (props) => {
    const { sortByItems, updateSortBy } = props;
    
    return (
        <div className="sort-by mt-md-0 mt-4">
            <p className="font-weight-bold">sort products by:</p>
            <select
                name="sort_by_select"
                id="sort-by-select"
                className="p-1"
                onChange={e => updateSortBy(e.target.value)}
            >
                {
                   sortByItems.map((s, index) => {
                        return (
                            <option key={index} value={s}>{s}</option>
                        );
                    })
                }
            </select>
        </div>
    );
}


export default connect(undefined, { updateSortBy })(SortBy);