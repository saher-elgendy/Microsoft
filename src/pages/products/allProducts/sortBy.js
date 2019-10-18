import React from 'react';


const SortBy = (props) => {
    const { sortBy } = props;

    return (
        <div className="sort-by mt-md-0 mt-4">
            <p className="font-weight-bold">sort products by:</p>
            <select name="sort_by_select" id="sort-by-select" className="p-1">
                {
                    sortBy.map((s, index) => {
                        return (
                            <option key={index} value={s}>{s}</option>
                        );
                    })
                }
            </select>
        </div>
    );
}

export default SortBy;