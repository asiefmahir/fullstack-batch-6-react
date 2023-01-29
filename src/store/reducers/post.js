const initState = {
    posts: [],
    loading: true,
    error: ''
}

export const postReducer = (state = initState, action) => {
    switch (action.type) {
        case 'post/fetchStart' : {
            return {
                ...state,
                loading: true
            }
        }

        case 'post/fetchSucceeded' : {
            return {
                ...state,
                posts: action.payload,
                error: '',
                loading: false
            }
        }

        case 'post/fetchFailed' : {
            return {
                ...state,
                posts: [],
                loading: false,
                error: action.payload
            }
        }

        default : {
            return state
        }


    }
}
/**
 * pending, fullfilled, reject
 */