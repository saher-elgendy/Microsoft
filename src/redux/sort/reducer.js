import { UPDATE_SORTBY } from './actionTypes';


export default (state = '', action) => {
    switch (action.type) {
        case UPDATE_SORTBY:
            return action.payload;
        default:
            return state;
    }
}
