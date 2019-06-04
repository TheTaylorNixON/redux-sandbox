import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux'; 

import reducer from './reducer';
import * as actions from './actions';


const { inc, dec, rnd } = actions;
const store = createStore(reducer);

store.dispatch(inc());
store.dispatch(rnd());
store.dispatch(dec());

store.subscribe(() => {
    console.log(store.getState());
})