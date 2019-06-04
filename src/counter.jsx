import React from 'react';

const Counter = ({ counter, inc, dec, rnd }) => {
    return (
        <div id="root" className="jumbotron">
            <h2>{counter}</h2>
            <button onClick={inc}>INC</button>
            <button onClick={dec}>DEC</button>
            <button onClick={rnd}>RND</button>
        </div>
    );
};

export default Counter;