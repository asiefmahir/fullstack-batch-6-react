import {useEffect, useState} from 'react';

import {useParams, useLoaderData, useNavigation} from 'react-router-dom'


const TodoDetails = () => {
    // const [todoDetails, setTodoDetails] = useState(null);
    const todoDetails = useLoaderData();
    const navigation = useNavigation()

    // const {todoId} = useParams();
    

    console.log('I am repeated');

    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
    //         .then(res => res.json())
    //         .then(data => setTodoDetails(data))
    // }, [todoId])
  return (
    <div>
        <p>ID - {todoDetails?.id}</p>
        <p>Title = {todoDetails?.title}</p>
        <p>UserId - {todoDetails?.userId}</p>
    </div>
  )
}

export default TodoDetails