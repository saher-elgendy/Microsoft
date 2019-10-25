import { combineReducers } from 'redux';
import filtersReducer from './filters/reducer';
import productsReducer from './products/reducer';
import sortReducer from './sort/reducer';


export default combineReducers({
    products: productsReducer,
    filters: filtersReducer,
    sortBy: sortReducer
});