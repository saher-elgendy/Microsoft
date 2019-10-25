import { applyMiddleWare, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const middleware =[thunk];

export default createStore(rootReducer, applyMiddleWare(...middleware));