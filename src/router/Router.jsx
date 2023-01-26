import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Cart from '../pages/Cart'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element = {<Home />}/>
            <Route path = '/cart' element = {<Cart />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router