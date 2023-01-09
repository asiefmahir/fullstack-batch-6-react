

import './App.css'
import Form from './components/Form';
import StudentSection from './components/StudentSection';

// const reducer = (currentState, action) => { // 0 + 1 = 1 // 1 // action
//     switch (action.type) {
//         case 'increase' : {
//             return action.payload + currentState; // 1 + 0 = 1
//         }

//         case 'decrease' : {
//             return currentState - action.payload
//         }

//         default: {
//             return currentState
//         }
//     }
// }

const App = () => {    

    // const [counter, setCounter] = useState(0)

    // const [counter, dispatch] = useReducer(reducer, 0) // counter = 1

    return (
        <div>
            <Form />
            <StudentSection />
            {/* <p>The value of the counter is {counter}</p>
            <button onClick={() => dispatch({type: 'increase', payload: 1})}>Increase By 1</button>
            <button onClick={() => dispatch({type: 'increase', payload: 5})}>Increase By 5</button>

            <button onClick={() => dispatch({type: 'decrease', payload: 1})}>Decrease By 1</button>
            <button onClick={() => dispatch({type: 'decrease', payload: 2})}>Decrease By 2</button> */}


        </div>
    )
}

export default App