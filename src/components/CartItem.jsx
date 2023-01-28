/* eslint-disable jsx-a11y/alt-text */
import {useState} from 'react';
import {useDispatch} from 'react-redux'

import {removeFromCart, modifyQuantityOfAProduct} from '../store/reducers/cart'

import {icons} from '../assets'

function CartItem({item}) {

    const [quantity, setQuantity] = useState(item.quantity)

    const dispatch = useDispatch()
    return (
        <tr>
            <td>
                <div class="product">
                    <img
                        src = {item.image}
                        class="product-img"
                        alt=""
                    />
                    
                </div>
            </td>
            <td><p>{item.title}</p></td>
            <td>$ {item.price}</td>
            <td>
                <div class="qty_input">
                    <button
                        class="qty-count qty-count--minus"
                        data-action="minus"
                        type="button"
                    >
                        <figure onClick={() => {
                                if (quantity > 1) {
                                    setQuantity((prev) => prev - 1)
                                    dispatch(modifyQuantityOfAProduct({id: item.id, quantity: quantity - 1}))
                                    
                                }

                                
                            }}>
                            <img  src= {icons.minusIcon} />
                        </figure>
                    </button>
                    <input
                        class="product-qty"
                        type="number"
                        name="product-qty"
                       
                        value= {quantity}
                        min ='1'
                        onChange = {(e) => {
                            if (parseInt(e.target.value) >= 1) {
                                
                                    setQuantity(parseInt(e.target.value))
                                    dispatch(modifyQuantityOfAProduct({id: item.id, quantity: parseInt(e.target.value)}))
                                    
                                
                            }
                        }}
                        // onChange = {}
                    />
                    <button
                        class="qty-count qty-count--add"
                        data-action="add"
                        type="button"
                    >
                        <figure onClick={() => {
                               if (quantity >= 1) {
                                    setQuantity((prev) => prev + 1)
                                    dispatch(modifyQuantityOfAProduct({id: item.id, quantity: quantity + 1}))
                                     
                                } 
                                
                            }}>
                            <img  src={icons.plusIcon} />
                        </figure>
                    </button>
                </div>
            </td>
            <td>$  {item.quantity ? item.price * item.quantity : 0}</td>
            <td>
                <img onClick={() => dispatch(removeFromCart(item.id))} class="cross-icon" src = {icons.crossIcon} />
                
            </td>
        </tr>
    )
}

// 10 * 2 = 20

// dispatch({
//         type: 'REMOVE_ITEM',
//         payload : {id: item.id}
//     })

export default CartItem