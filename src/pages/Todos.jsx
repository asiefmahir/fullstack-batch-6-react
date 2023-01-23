import {useEffect, useState} from 'react'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

const Todos = () => {
    
    const {data:todos, isLoading, error} = useFetch('https://jsonplaceholder.typicode.com/todos', [])

  return (
    <div>
        <Nav />
        {isLoading && <div>Loading...............</div>}
        {error && <h2>{error}</h2>}
        {todos.map(todo => (
            <li key = {todo.id}>
                {todo?.title}
            </li>
        ))}
    </div>
  )
}

export default Todos