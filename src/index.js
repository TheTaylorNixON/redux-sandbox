import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, bindActionCreators } from 'redux';

import reducer from './reducer';
import * as actions from './actions';

import Counter from './counter';


const store = createStore(reducer);
const { dispatch } = store;

// нативный dispatch
// const { inc, dec, rnd } = actions;
// dispatch(inc());
// dispatch(rnd());
// dispatch(dec());
// store.subscribe(() => {
//     console.log(store.getState());
// })


// самописный bindActionCreator
// const bindActionCreator = (creator, dispatch) => ( ...args) => {
//     dispatch(creator( ...args));
// }
// bindActionCreator(inc, dispatch);
// bindActionCreator(dec, dispatch);
// bindActionCreator(rnd, dispatch);


// оригинальная bindActionCreators от redux
// const { incDispatch, decDispatch, rndDispatch } = bindActionCreators({
//     incDispatch: inc,
//     decDispatch: dec,
//     rndDispatch: rnd
// }, dispatch)


// рефакторинг оригинальной bindActionCreators
const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

const update = () => {
    ReactDOM.render(
        <Counter
            counter={store.getState()}
            inc={inc}
            dec={dec}
            rnd={() => {
                const value = Math.ceil(Math.random() * 10);
                console.log(value);
                rnd(value);
            }}
        />,
        document.getElementById('root'));
}

update();
store.subscribe(update);