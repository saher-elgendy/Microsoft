import { UPDATE_SORTBY } from './actionTypes';


export const updateSortBy = (sortBy) => {
    return {
        type: UPDATE_SORTBY,
        payload: sortBy
    }
}

