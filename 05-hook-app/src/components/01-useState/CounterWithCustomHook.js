import React from 'react';
import {useCounter} from '../../hooks/useCounter'
import './Counter.css'

const CounterWithCustomHook = () => {
    const {state, increment, decrement, reset} = useCounter();
    return (
        <>
         <h1>Counter with hook: {state}</h1>
            <hr/>
            <button className="btn btn-primary m-1" onClick={ () => increment(2)}>
                +1
            </button>

            <button className="btn btn-primary m-1" onClick={ reset }>
                Reset
            </button>

            <button className="btn btn-primary m-1" onClick={ () => decrement(2) }>
                -1
            </button>


        </>
    );
};

export default CounterWithCustomHook;
