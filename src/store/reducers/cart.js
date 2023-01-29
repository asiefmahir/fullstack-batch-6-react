// export const cartReducer = (state = [], action) => {
//     switch (action.type) {
//         case 'ADD_TO_CART': {
//             const product = state.find(item => item.id === action.payload.id);

//             return product ? state.map(item => {
//                 if (item.id === product.id) {
//                     item.quantity += 1;
//                 }

//                 return item
//             }) : [...state, {...action.payload, quantity: 1}]
//         }

//         case 'REMOVE_FROM_CART' : {
//             return state.filter(product => product.id !== action.payload)
//         }

//         case 'MODIFY_QUANTITY_OF_AN_ITEM' : {
//             return state.map(item => {
//                 if (item.id === action.payload.id) {
//                     item.quantity = action.payload.quantity
//                 }
//                 return item
//             })
//         }

//         case 'CLEAR_CART' : {
//             return []
//         }

//         default: {
//             return state;
//         }
            
//     }
// }

// // import {createSlice, createReducer, createAction} from '@reduxjs/toolkit'

// // export const addToCart = createAction('cart/ADD_TO_CART')
// // export const removeFromCart = createAction('cart/REMOVE_FROM_CART');
// // export const modifyQuantityOfAProduct = createAction('cart/MODIFY_QUANTITY_OF_AN_ITEM')
// // export const clearCart  = createAction('cart/CLEAR_CART')

// // const initState = []

// // export const cartReducer = createReducer(initState, (builder) => {
// //     builder
// //         .addCase(addToCart, (state, action) => {
// //             const product = state.find(item => item.id === action.payload.id);

// //             product ? product.quantity++ : state.push({...action.payload, quantity: 1})
// //         })
// //         .addCase(removeFromCart , (state, action) => {
// //             return state.filter(product => product.id !== action.payload)
// //         })
// //         .addCase(modifyQuantityOfAProduct, (state, action) => {
// //             const product = state.find(item => item.id === action.payload.id);

// //             product.quantity = action.payload.quantity
// //         })
// //         .addCase(clearCart, (state) => {
// //             return []
// //         })
// //         .addDefaultCase((state) => {
// //             return state
// //         })
// // })

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState: [],
//     reducers: {
//         addToCart (state, action) {
//             const product = state.find(item => item.id === action.payload.id);

//             product ? product.quantity++ : state.push({...action.payload, quantity: 1})
//         },

//         removeFromCart (state, action) {
//             return state.filter(product => product.id !== action.payload)
//         },

//         modifyQuantityOfAProduct (state, action) {
//             const product = state.find(item => item.id === action.payload.id);

//             product.quantity = action.payload.quantity
//         },

//         clearCart (state, action) {
//             return []
//         }
//     }
// })

// export const {addToCart, clearCart, modifyQuantityOfAProduct, removeFromCart} = cartSlice.actions;

// export const cartReducer = cartSlice.reducer


// // []