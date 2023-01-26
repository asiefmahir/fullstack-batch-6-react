/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
     <header class="header">
                <div class="container">
                    <nav class="header__navbar">
                        <ul>
                            <li>
                                <Link to = '/' >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <a href="#"> Checkout </a>
                            </li>
                            <li>
                                <Link to='/cart'>
                                    Cart
                                </Link>
                            </li>
                            <li>
                                <a href="#"> Blog </a>
                            </li>
                            <li>
                                <a href="#"> Categories </a>
                            </li>
                            <li>
                                <a href="#"> About Us </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
  )
}

export default Header