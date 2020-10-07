import React, { Component } from 'react';


class Counter extends Component {

    render() {

        return (
            <div className='counter'>
                <div className='number'>0</div>
                <button>increment</button>
                <button>decrement</button>
                <button>reset</button>
            </div>
        )
    }
}

export default Counter;