import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const noteApi = createApi({
    reducerPath: 'noteApi',
    baseQuery: fetchBaseQuery({baseUrl: `http://localhost:4000/`}),
    tagTypes: ['Notes'],
    endpoints: (builder) => ({
        getAllNotes : builder.query({
            query: () => ({url: `notes`}),
            providesTags: [{type: 'Notes', id: 'NoteList'}]
        }),

        createNote : builder.mutation({
            query: (note) => ({
                url: 'notes',
                body: note,
                method: "POST"
            }),
            invalidatesTags: [{type: 'Notes', id: 'NoteList'}]
        }),

        updateNote: builder.mutation({
            query: (id, note) => ({
                url: `notes/${id}`,
                body: note,
                method: "PUT"
            }),
            invalidatesTags: [{type: 'Notes', id: 'NoteList'}]
        }),

        removeNote : builder.mutation({
            query: (id) => ({
                url: `notes/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: [{type: 'Notes', id: 'NoteList'}]
        })
    })
})

export const {useGetAllNotesQuery, useCreateNoteMutation, useUpdateNoteMutation, useRemoveNoteMutation} = noteApi