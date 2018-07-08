import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const middlewares = applyMiddleware(thunk, createLogger());

const store = createStore(rootReducer, middlewares);

export default store;
