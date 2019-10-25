import { UPDATE_FILTERS } from './actionTypes';


export default (state = [], action) => {
    switch (action.type) {
        case UPDATE_FILTERS:
            return action.payload;
        default:
            return state;
    }
}
