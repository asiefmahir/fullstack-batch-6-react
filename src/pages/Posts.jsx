import {useState, useEffect} from 'react'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

const Posts = () => {

 const {data: posts, isLoading, error} = useFetch(`https://jsonplaceholder.typicode.com/posts`, [])
  return (
    <div>
        <Nav />
         {isLoading && <div>Loading...............</div>}
        {error && <h2>{error}</h2>}
        {posts.map(post => (
            <Link to ={`/posts/${post.id}`} key = {post.id}>
              <li>
                  {post?.title}
              </li>
            </Link>
        ))}
    </div>
  )
}

export default Posts