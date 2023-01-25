import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension'


/**
 * 
 * @param {number} state 
 * @param {{type: string, payload: number}} action 
 * @returns 
 */

export const counterReducer = (state = 1000, action) => {
    switch (action.type) {
        case 'INCREASE' : {
            return state + action.payload
        }

        case 'DECREASE' : {
            return state - action.payload
        }

        default : {
            return state
        }
    }
}

const initState = {
    bgColor: 'white',
    textColor: '#000000'
}

export const themeReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CHANGE_BG_COLOR' : {
            return {
                ...state,
                bgColor: action.payload
            }

            // state.bgColor = '11111'
        }

        case 'CHANGE_TEXT_COLOR': {
            return {
                ...state,
                textColor: action.payload
            }
        }

        default : {
            return state
        }
    }
}

const rootReducer = combineReducers({
    counter : counterReducer,
    theme : themeReducer,
    // cart: 
})

const myLogger = (store) => (next) => (action) => {
    console.log(`Prev State: ${JSON.stringify(store.getState())}`);
    console.log(`ACTION: ${JSON.stringify(action)}`);
    next(action)
}

// useSelector((state) => state.cart)
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(myLogger, logger)))