import { ADD_FILTER, REMOVE_FILTER } from './actionTypes';


export default (state = [], action) => {
    switch (action.type) {
        case ADD_FILTER:
            return [...state, action.payload];

        case REMOVE_FILTER:
            return state.filter(f => f !== action.payload);
            
        default:
            return state;
    }
}
