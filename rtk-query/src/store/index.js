import {configureStore} from '@reduxjs/toolkit';
import { noteApi } from './api/notes';

export const store = configureStore({
    reducer: {
        [noteApi.reducerPath] : noteApi.reducer
    },

    middleware: (gDM) => gDM().concat(noteApi.middleware)
})