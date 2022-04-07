import React, {useEffect, useState} from 'react';

export const Message = () => {

    const [coords, setCords] = useState({x:0, y:0});
    const {x, y} = coords;

    useEffect( () => {

        const mousemove = (e) => {
            const coords = { x: e.x, y: e.y};
            setCords(coords);
        }

        window.addEventListener('mousemove', mousemove);
        return () => {
           window.removeEventListener('mousemove', mousemove)
        }
    }, []);

    return (
        <div>
            <h3>Eres genial !!</h3>
            <p>
                x: {x} y:{y}
            </p>
        </div>
    );
};

export default Message;
