export const addToCart = (product) => {
    return {
        type: 'ADD_TO_CART',
        payload: product
    }
}

export const fetchPostStart = () => {
    return {
        type: 'post/fetchStart'
    }
}

export const fetchPostSucceeded = (posts) => {
    return {
        type: 'post/fetchSucceeded',
        payload: posts
    }
}

export const fetchPostFailed = (errorMessage) => {
    return {
        type: 'post/fetchFailed',
        payload: errorMessage
    }
}


export const fetchTodoStart = () => {
    return {
        type: 'todo/fetchStart'
    }
}

export const fetchTodoSucceeded = (todos) => {
    return {
        type: 'todo/fetchSucceeded',
        payload: todos
    }
}

export const fetchtodoFailed = (errorMessage) => {
    return {
        type: 'todo/fetchFailed',
        payload: errorMessage
    }
}