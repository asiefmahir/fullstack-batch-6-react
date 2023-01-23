import {useState, useEffect} from 'react'
import Nav from '../components/Nav'
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

const PostDetails = () => {

  const {postId} = useParams();

  const {data: post, isLoading, error} = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, null)

  return (
    <div>
        <Nav />
         {isLoading && <div>Loading...............</div>}
        {error && <h2>{error}</h2>}
        <p>
          {post?.title}
        </p>
        <p>
          {post?.id}
        </p>
    </div>
  )
}

export default PostDetails