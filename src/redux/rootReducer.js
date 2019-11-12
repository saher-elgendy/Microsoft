import { combineReducers } from 'redux';
import cartReducer from './cart/reducer';
import filtersReducer from './filters/reducer';
import productsReducer from './products/reducer';
import sortReducer from './sort/reducer';


export default combineReducers({
    products: productsReducer,
    filters: filtersReducer,
    sortBy: sortReducer,
    cartProducts: cartReducer
});