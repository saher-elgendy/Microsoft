import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';


export default (state = [], action) => {
    switch(action.type) {
        case ADD_TO_CART:
            return action.payload;
        case REMOVE_FROM_CART:
            return state.filter(product => product.id !== action.payload.id);
        default:
            return state;
    }
}
