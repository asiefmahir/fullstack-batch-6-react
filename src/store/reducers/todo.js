import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initData = {
    todos: [],
    loading: true,
    error: ''
}

export const fetchTodoWithRTK = createAsyncThunk('fetchTodo', async () => {
    const response = await fetch(`http://jsonplaceholder.typicode.com/todos`);
    const data = await response.json();
    return data
})

const todoSlice = createSlice({
    name: 'todo',
    initialState: initData,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodoWithRTK.pending, (state, action) => {
                state.loading = true
            })
            .addCase(fetchTodoWithRTK.fulfilled, (state, action) => {
                state.loading = false;
                state.todos = action.payload;
                state.error = ''
            } )
            .addCase(fetchTodoWithRTK.rejected , (state, action) => {
                state.loading = false;
                state.todos = [];
                state.error = action.error.message
            })
    }
})

export const todoReducer = todoSlice.reducer


// export const todoReducer = (state = initData, action) => {
//     switch (action.type) {
//         case 'todo/fetchStart' : {
//             return {
//                 ...state,
//                 loading: true
//             }
//         }

//         case 'todo/fetchSucceeded' : {
//             console.log(action.payload);
//             return {
//                 ...state,
//                 todos: action.payload,
//                 error: '',
//                 loading: false
//             }
//         }

//         case 'todo/fetchFailed' : {
//             return {
//                 ...state,
//                 todos: [],
//                 loading: false,
//                 error: action.payload
//             }
//         }

//         default : {
//             return state
//         }


//     }
// }