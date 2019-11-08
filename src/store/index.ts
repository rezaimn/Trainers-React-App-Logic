import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'
import logger from 'redux-logger'

const configureStore = () => {
    return createStore(
        rootReducer,
        {},
        compose(applyMiddleware(thunk, logger))
    );
}

const store = configureStore()

export default store;