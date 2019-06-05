import React from 'react';
import { connect } from 'react-redux';
// import { inc, dec, rnd } from '../actions';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';

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

const mapStateToProps = (state) => {
    return {
        counter: state
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         inc: () => dispatch(inc()),
//         dec: () => dispatch(dec()),
//         rnd: () => {
//             const value = Math.ceil(Math.random() * 10);
//             dispatch(rnd(value));
//         }
//     }
// };

// рефакторинг с bindActionCreators
const mapDispatchToProps = (dispatch) => {
    // const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

    // return {
    //     inc,
    //     dec,
    //     rnd
    // }

    // рефакторинг actionCreator rnd - больше не чистая
    return bindActionCreators(actions, dispatch);
}
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// вторым агрументом передаем объект вместо фции mapDispatchToProps и connect автоматом делает bindActionCreators(actions, dispatch);
export default connect(mapStateToProps, actions)(Counter);