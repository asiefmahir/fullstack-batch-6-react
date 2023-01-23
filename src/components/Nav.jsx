import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <Link to = '/'>
            Home
        </Link>
         <Link to = '/posts'>
            Posts
        </Link>
         <Link to = '/todos'>
            Todos
        </Link>
    </nav>
  )
}

export default Nav