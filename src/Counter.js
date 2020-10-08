import React, { useState, useEffect } from 'react';


const storeStateInLocalStorage = count => {
    localStorage.setItem('counterState', JSON.stringify({ count }))
    console.log(localStorage);
}

const getStateFromLocalStorage = () => {
    localStorage.getItem('counterState')
}

const Counter = ({ max, step }) => {

    const [count, setCount] = useState(getStateFromLocalStorage());

    const increment = () => {

        setCount(c => {
            if (c >= max) return c;
            return c + step;
        });
    }
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);


    useEffect(() => {
        document.title = `Counter: ${count}`
        storeStateInLocalStorage(count);
    }, [count])
    return (
        <div className='counter'>
            <div className='number'>{count}</div>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}


export default Counter;