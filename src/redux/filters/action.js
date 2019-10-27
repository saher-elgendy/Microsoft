import { ADD_FILTER, REMOVE_FILTER } from './actionTypes';

/**
 * addFilter action adds a filter to filters array each time a filter checkbox is checked
 * removeFilter action removes a filter when the corresponding checkbox is unchecked
 * @param {string} filter 
 */
export const addFilter = (filter) => {
    return {
        type: ADD_FILTER,
        payload: filter
    }
}

export const removeFilter = (filter) => {
    return {
        type: REMOVE_FILTER,
        payload: filter
    }
}

