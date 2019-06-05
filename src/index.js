import React from 'react';
import ReactDOM from 'react-dom';

// import { createStore, bindActionCreators } from 'redux';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducer';
// import * as actions from './actions';

import App from './components/app';
// import Counter from './components/counter';


const store = createStore(reducer);

// const { dispatch } = store;

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
// const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

// const update = () => {
//     ReactDOM.render(
//         <Provider store={store} >
//             <Ap/p>
//         </Provider>
//         <Counter
//             counter={store.getState()}
//             inc={inc}
//             dec={dec}
//             rnd={() => {
//                 const value = Math.ceil(Math.random() * 10);
//                 console.log(value);
//                 rnd(value);
//             }}
//         />,
//         document.getElementById('root'));
// }

// update();
// store.subscribe(update);



ReactDOM.render(
    // как работает контекст в реакт
    <Provider store={store} >
        <App/>
    </Provider>,
    document.getElementById('root')
);