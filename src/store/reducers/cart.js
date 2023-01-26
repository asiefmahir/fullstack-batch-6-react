export const cartReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const product = state.find(item => item.id === action.payload.id);

            return product ? state.map(item => {
                if (item.id === product.id) {
                    item.quantity += 1;
                }

                return item
            }) : [...state, {...action.payload, quantity: 1}]
        }

        case 'REMOVE_FROM_CART' : {
            return state.filter(product => product.id !== action.payload)
        }

        case 'MODIFY_QUANTITY_OF_AN_ITEM' : {
            return state.map(item => {
                if (item.id === action.payload.id) {
                    item.quantity = action.payload.quantity
                }
                return item
            })
        }

        case 'CLEAR_CART' : {
            return []
        }

        default: {
            return state;
        }
            
    }
}

// []