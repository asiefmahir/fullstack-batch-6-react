
import { useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
// import { fetchPostSucceeded } from './store/actions';
// import {fetchPosts, fetchTodos} from './store/api'
import { fetchTodoWithRTK } from './store/reducers/todo';




const App = () => {  
    // const {posts, loading, error} = useSelector(state => state.posts);
    const {todos, loading, error} = useSelector(state => state.todos);
    console.log(todos);
    const dispatch = useDispatch()

    useEffect(() => {
        // dispatch(fetchPosts)
        dispatch(fetchTodoWithRTK())
    }, [])

    return (
        <div className="App">
            <h1>
                Hello World
            </h1>
            <ul>
                {todos.map(item => (
                    <li key= {item.id}>
                        {item.title}
                    </li>                    
                ))}
            </ul>
            {loading && <h1>Loading................</h1>}
            {error && <h1>{error}</h1>}
        </div>
    )
}

export default App