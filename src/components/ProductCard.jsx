import React from 'react';
import {useDispatch} from 'react-redux'
import { addToCart } from '../store/actions';


function ProductCard({product}) {
    const dispatch = useDispatch()
  return (
    <div class="ingredient">
        <div class="ingredient__image">
          <figure>
            <img src= {product.image}  alt= {product.title}/>
          </figure>
        </div>
        <div class="ingredient__title">
          <h3>
            {product.title}
          </h3>
        </div>
        <div class="ingredient__content">
          {/* <p>
            {product.category}
          </p> */}
          <p class="price">
            <span>
              ${product.price}
            </span>
          </p>
        </div>
        <div class = "ingredient__btn">
          <button onClick={() => dispatch(addToCart(product))} class="btn-white">
            ADD TO CART
          </button>
        </div>

    </div>
  )
}

export default ProductCard