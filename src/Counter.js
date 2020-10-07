import React, { Component } from 'react';


class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    }

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })

    }

    reset = (count) => {
        this.setState({
            count: 0
        })
    }

    render() {
        const { count } = this.state;

        return (
            <div className='counter'>
                <div className='number'>{count}</div>
                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
                <button onClick={this.reset}>reset</button>
            </div>
        )
    }
}

export default Counter;