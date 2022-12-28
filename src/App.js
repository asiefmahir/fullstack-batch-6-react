import {useState, useEffect} from 'react'
import './App.css';

function App() {

  const [todos, setTodos] = useState([]); // [{}, {}]
  const [counter, setCounter] = useState(0); // counter = 1 // counter = 2
  const [counter2, setCounter2] = useState(10)
  // let counter = 0;

  // const upDateCounter = () => {
  //   ++counter;
  //   console.log(counter);
  // }



  // fetch(`https://jsonplaceholder.typicode.com/todos/`)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data, 'data');
  //     setTodos(data)
  //   })

  useEffect(() => {
    console.log('hello useEffect');
    fetch(`https://jsonplaceholder.typicode.com/todos/`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data, 'data');
      setTodos(data)
    })
  }, []);


  console.log(`I am outside return`);

  return (
    <div className="App">
        <h2>
          All Todos
        </h2>
        <ul>
          {todos?.map((item) => (
            <li key = {item.id}>
              {item.title}
            </li>
          ))}
        </ul>
        <h2>The value of the counter is {counter}</h2>
        <button onClick={() => setCounter(counter + 1)}>Increase Counter</button>
        <hr />

        <h2>The value of the counter is {counter2}</h2>
        <button onClick={() => setCounter2(counter2 + 1)}>Increase Counter</button>
        {/* <button onClick={upDateCounter}>Increase Counter</button> */}
    </div>
  );
}

/**
 * 1) state ba props change -> Component Rerun -> ReRender
 */
export default App;
