import React, { useState, useEffect } from 'react';

const getStateFromLocalStorage = () => {
    const storage = localStorage.getItem('counterState')
    console.log(storage);
    if (storage) return JSON.parse(storage).count;
    return { count: 0 };
}

const storeStateInLocalStorage = count => {
    localStorage.setItem('counterState', JSON.stringify({ count }))
    console.log(localStorage);
}

const useLocalStorage = (initialState, key) => {
    const get = () => {
        const storage = localStorage.getItem(key)
        console.log(localStorage, storage);
        if (storage) return JSON.parse(storage)[value];
        return initialState;
    }

    const [value, setValue] = useState(get())

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify({ value }))
    }, [value])
    return [value, setValue];
}


const Counter = ({ max, step }) => {

    const [count, setCount] = useLocalStorage(0, 'count')

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
    }, [count])

    useEffect(() => {
        storeStateInLocalStorage(count);
    })
    
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