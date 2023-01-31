import './App.css';
import {useGetAllNotesQuery, useRemoveNoteMutation} from './store/api/notes'

function App() {
  const  {data, isLoading, isError, error} = useGetAllNotesQuery();
  const [removeNoteMutation] = useRemoveNoteMutation()
  return (
    <div className= 'App'>
        <h2>
            Note Taking App
        </h2>
        {isLoading && <p>Loading........</p>}
        {isError && <h1>{error?.message}</h1>}
        <ul>
            {data?.map(item => (
              <li key = {item.id}>
                  <span>{item.title}</span>
                  <button onClick={() => removeNoteMutation(item.id)}>Delete</button>
              </li>
            ))}
        </ul>
    </div>
  );
}

export default App;
