import React, {useMemo, useState} from 'react';
import '../02-useEffect/effect.css';
import useCounter from "../../hooks/useCounter";
import {procesoPesado} from "../../helpers/ProcesoPesado";

const MemoHook = () => {

    const {counter, increment} = useCounter(5000);
    const [show, setShow] = useState(true);

    const memoProcesado = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{ counter }</small></h3>
            <hr/>

            <p>{memoProcesado}</p>

            <button className="btn btn-primary" onClick={increment}>
                + 1
            </button>

            <button className="btn btn-outline-primary  ml-5" onClick={() => { setShow(!show)}}>
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    );
};

export default MemoHook;
