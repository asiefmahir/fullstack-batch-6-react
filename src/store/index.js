// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import logger from 'redux-logger';

// import { cartReducer } from './reducers/cart';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { postReducer } from './reducers/post';
// import thunk from 'redux-thunk'
// // import { fetchData } from './middlewares';
// import { todoReducer } from './reducers/todo';




// const rootReducer = combineReducers({
//     cart: cartReducer,
//     posts: postReducer,
//     todos: todoReducer
// })

// const myLogger = (store) => (next) => (action) => {
//     console.log(`Prev State: ${JSON.stringify(store.getState())}`);
//     console.log(`ACTION: ${JSON.stringify(action)}`);
//     next(action)
// }

// // useSelector((state) => state.cart)
// export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)))


/// ToolKit

import { configureStore } from "@reduxjs/toolkit";
import {todoReducer} from './reducers/todo'
import logger from "redux-logger";

const rootReducer = {
    todos: todoReducer
}
export const store = configureStore({
    reducer: rootReducer,
    // composeWithDevTools(applyMiddleware(myLogger, logger))
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])

})