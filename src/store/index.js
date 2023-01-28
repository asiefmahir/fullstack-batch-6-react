
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { cartReducer } from './reducers/cart';



const rootReducer = {
    cart: cartReducer 
}

const myLogger = (store) => (next) => (action) => {
    console.log(`Prev State: ${JSON.stringify(store.getState())}`);
    console.log(`ACTION: ${JSON.stringify(action)}`);
    next(action)
}

// useSelector((state) => state.cart)
export const store = configureStore({
    reducer: rootReducer,
    // composeWithDevTools(applyMiddleware(myLogger, logger))
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger, myLogger])

})