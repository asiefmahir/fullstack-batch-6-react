import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Todos from '../pages/Todos'
import Posts from '../pages/Posts'
import PostDetails from '../pages/PostDetails'
import Home from '../pages/Home'

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path = '/' element = {<Home />} />
            <Route path= '/todos' element = {<Todos />} />
            <Route path = '/posts' element = {<Posts />}/>
            <Route path= '/posts/:postId' element = {<PostDetails />}/> 
        </Routes>
    </BrowserRouter>
  )
}

export default Router