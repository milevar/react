import React, {useState} from 'react';


export const useCounter = (initialState = 10) => {
   const [counter, setCounter] = useState(initialState);

   // const increment = (factor = 1) => {
   //     setState(state + factor)
   // }
   //
   //  const decrement = (factor = 1) => {
   //      setState(state - factor)
   //  }

    const reset = () => {
        setCounter(initialState)
    }

    const decrement = () => {
        setCounter(counter - 1)
    }

    const increment = () => {
        setCounter(counter + 1)
    }

    return {
       counter, increment, decrement, reset
    };


};

export default useCounter;
