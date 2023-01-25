import React from 'react'
import {useSelector, useDispatch} from 'react-redux'


const Counter = () => {

    const counter = useSelector((state) => state.counter);
    const theme = useSelector((state) => state.theme);

    const dispatch = useDispatch()
  return (
    <div style={{backgroundColor: theme.bgColor, color: theme.textColor}} >
        <p>The value of the counter is {counter}</p>
            <button onClick={() => dispatch({type: 'INCREASE', payload: 10})}>Increase By 10</button>
            <button onClick={() => dispatch({type: 'INCREASE', payload: 5})}>Increase By 5</button>
            <button onClick={() => dispatch({type: 'DECREASE', payload: 5})}>Decrease By 5</button>
    </div>
  )
}

export default Counter