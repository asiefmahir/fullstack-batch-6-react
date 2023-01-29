export const fetchData = (store) => (next) => async (action) => {
    
    if (typeof action === 'function') {
        action(store.dispatch);
        return
    }
    next(action)
}


/**
 * action -> 'add', 'decrease', {type: '', payload: } function
 */
