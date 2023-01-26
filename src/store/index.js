import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension'
import { cartReducer } from './reducers/cart';



const rootReducer = combineReducers({
    cart: cartReducer 
})

const myLogger = (store) => (next) => (action) => {
    console.log(`Prev State: ${JSON.stringify(store.getState())}`);
    console.log(`ACTION: ${JSON.stringify(action)}`);
    next(action)
}

// useSelector((state) => state.cart)
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(myLogger, logger)))