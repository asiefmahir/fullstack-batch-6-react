import { useState, useCallback, useMemo } from 'react'
import './App.css'
import Title from './components/Title'
import Button from './components/Button';
import Counter from './components/Counter';


const App = () => {    

    const [counter1, setCounter1] = useState(10);
    const [counter2, setCounter2] = useState(5);

    const increaseHandler1 = useCallback(() => {
        setCounter1((prev) => prev + 1) // 10 + 1 = 11
    }, [])

    // 000044sdsd -> asasasFFsfs


    const increaseHandler2 = useCallback(() => {
        setCounter2((prev => prev + 5)) // 5 + 5 = 10
    }, [])

    const isEven = useMemo(() => {
        console.log('i am called');
        let i = 0;
        while (i < 1000000000) {
            i++
        }
        return counter1 % 2 === 0 ? 'Counter one is even' : 'Counter1 is Odd'
    }, [counter1])

    console.log('App being rendered');

    return (
        <div className='App'>   
            <Title />
            <hr />
            <div className="counter-1">
                <Counter content={counter1}/>
                <Button handler={increaseHandler1}/>
                <p>{isEven}</p>
            </div>
            <div className="counter-2">
                <Counter content={counter2}/>
                <Button handler={increaseHandler2}/>
            </div>

        </div>
    )
}

export default App