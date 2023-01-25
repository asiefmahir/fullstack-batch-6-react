import React from 'react'
import {useDispatch} from 'react-redux'


const Theme = () => {
    const dispatch = useDispatch()
  return (
    <div>
        <div className="bg-color">
            <p>Change Background Color to- </p>
            <button onClick={() => dispatch({type: 'CHANGE_BG_COLOR', payload: 'green'})}>Green</button>
            <button onClick={() => dispatch({type: 'CHANGE_BG_COLOR', payload: 'blue'})}>Blue</button>
            <button onClick={() => dispatch({type: 'CHANGE_BG_COLOR', payload: 'white'})}>Reset</button>
        </div>
        <div className="text-color">
            <p>Change text Color to- </p>
            <button onClick={() => dispatch({type: 'CHANGE_TEXT_COLOR', payload: 'red'})}>Red</button>
            <button onClick={() => dispatch({type: 'CHANGE_TEXT_COLOR', payload: 'aqua'})}>Aqua</button>
            <button onClick={() => dispatch({type: 'CHANGE_TEXT_COLOR', payload: 'purple'})}>Purple</button>
            <button onClick={() => dispatch({type: 'CHANGE_TEXT_COLOR', payload: 'yellow'})}>Yellow</button>
        </div>
    </div>
  )
}

export default Theme