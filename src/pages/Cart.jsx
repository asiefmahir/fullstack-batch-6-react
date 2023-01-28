
import CartItem from "../components/CartItem";
import Header from "../components/Header";

import {useSelector, useDispatch} from 'react-redux'

import { clearCart } from "../store/reducers/cart";

const Cart = () => {
    const cart = useSelector(state => state.cart);

    const dispatch = useDispatch();

    let totalAmount = 0;

    cart.forEach(item => totalAmount += item.price * item.quantity)


    // const [totalAmount, setTotalAmount] = useState(0)

   
    return (
        <>
            <Header />
            <div class="account-setting__content">
                <div class="account-setting__content__title">
                    <h4>Product list in your cart</h4>
                </div>
                <div class="product-table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>PRODUCT NAME</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => (
                                <CartItem key = {item.id} item = {item} />
                                // <p key = {item.id}> {item.title}</p>
                            ))}
                        </tbody>
                    </table>
                </div>
                <h2 class="total-price">
                    You Total Price Will be $ {totalAmount}
                </h2>
                <div class="mt-50">
                    <button onClick={() => dispatch(clearCart())} type="button" class="btn-big">Clear Cart</button>
                </div>
            </div>
        </>
    )
}

export default Cart