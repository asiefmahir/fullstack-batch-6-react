import {useEffect, useState} from "react";
import {Link} from 'react-router-dom'
import AbouSection from "../components/AbouSection";

const Home = () => {

    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/`)
            .then(res => res.json())
            .then(data => {
                setTodos(data)
                setIsLoading(false)
            })
    }, [])

	return (
		<div>
			<h1>Hello World</h1>
            <AbouSection />
			<Link to={"/about"}>Go to about page</Link>
            <h2>All Todos</h2>
            {isLoading && (
                <div>Loading................</div>
            )}
            {todos.map(todo => (
                <li key = {todo.id}>
                    <Link to = {`/todo-details/${todo.id}`}>
                        {todo.title}
                    </Link>
                </li>
            ))}
		</div>
	);
};

export default Home;
