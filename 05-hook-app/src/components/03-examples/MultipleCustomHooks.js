import React from 'react';
import '../02-useEffect/effect.css'
import {useFetch} from "../../hooks/useFetch";
import useCounter from "../../hooks/useCounter";

export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1);
    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter}`);
    console.log(data);
    const {author, quote} = !!data && data[0];

    return (
        <div>
             <div>
                 <h1>Breaking Bad Quotes !!!</h1>
                 <hr/>

                 {
                     loading
                     ?
                         (
                             <div className="alert alert-info text-center">
                                 loading ...
                             </div>
                         )
                     :
                         (
                             <blockquote className="blockquote text-right mb-5">
                                 <p className="mb-1 text-right">{quote}</p>
                                 <footer className="blockquote-footer text-right">{author}</footer>
                             </blockquote>
                         )
                 }

                 <button className="btn btn-primary" onClick={increment}>
                     Next quote
                 </button>

             </div>
        </div>
    );
};

