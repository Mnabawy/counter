import React, { useState, useEffect } from 'react';

// const getStateFromLocalStorage = () => {
//     const storage = localStorage.getItem('counterState')
//     console.log(storage);
//     if (storage) return JSON.parse(storage).count;
//     return { count: 0 };
// }

// const storeStateInLocalStorage = count => {
//     localStorage.setItem('counterState', JSON.stringify({ count }))
//     console.log(localStorage);
// }

// const useLocalStorage = (initialState, key) => {
//     const get = () => {
//         const storage = localStorage.getItem(key)
//         console.log(localStorage, storage);
//         if (storage) return (
//             JSON.parse(storage)[key]
//         )
//         return initialState;
//     }

//     const [value, setValue] = useState(get()) //decaration of the value variable 

//     useEffect(() => {
//         localStorage.setItem(key, JSON.stringify({ value }))
//     }, [value])

//     return [value, setValue];
// }

const Counter = ({ max, step }) => {

    const [count, setCount] = useState(0);
    const countRef = React.useRef();

    let message = '';
    if (countRef.current < count) message = 'Higher';
    if (countRef.current > count) message = 'Lower';

    countRef.current = count;

    const increment = () => {
        setCount(c => c + 1)
    }

    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    useEffect(() => {
        document.title = `Counter: ${count}`
    }, [count])

    useEffect(() => {
        setTimeout(() => {
            console.log(`Count: ${count}`);
        }, 3000)
    }, [count])

    return (
        <div className='counter'>
           <h1> {message}</h1>
            <div className='number'>{count}</div>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}


export default Counter;