import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { createStore, applyMiddleware } from redux;

const middleware = [thunk];

export default createStore(rootReducer, applyMiddleware(...middleware));



