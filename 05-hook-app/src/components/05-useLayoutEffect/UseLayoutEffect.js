import React, {useLayoutEffect, useRef, useState} from 'react';
import './layout.css'
import {useFetch} from "../../hooks/useFetch";
import useCounter from "../../hooks/useCounter";

export const UseLayoutEffect = () => {

    const {counter, increment} = useCounter(1);
    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    console.log(data);
    const {quote} = !!data && data[0];

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {

        setBoxSize(pTag.current.getBoundingClientRect())
    }, [quote]);


    return (
        <div>
            <div>
                <h1>Layout Effect !!!</h1>
                <hr/>

                <blockquote className="blockquote text-right mb-5">
                    <p className="mb-1 text-right" ref={pTag}>{quote}</p>
                </blockquote>

                <button className="btn btn-primary" onClick={increment}>
                    Next quote
               </button>

                <pre>
                  { JSON.stringify(boxSize, null, 3)}
                </pre>
            </div>
        </div>
);
};

