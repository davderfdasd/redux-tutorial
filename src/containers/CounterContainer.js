import React from "react";
import { connect } from "react-redux";
import Counter from "../components/Counter";
import { increaseAsync, decreaseAsync } from "../modules/counter"; //가져왔엉

const CounterContaainer = ({ number, increaseAsync, decreaseAsync }) => {
    return (
        <Counter
            number={number}
            onIncrease={increaseAsync}
            onDecrease={decreaseAsync}
        ></Counter>
    );
};

// const mapStateToProps = (state) => ({
//     number: state.counter.number,
// });

// const mapDispatchToProps = (dispatch) => ({
//     increase: () => {
//         dispatch(increase());
//     },
//     decrease: () => {
//         dispatch(decrease());
//     },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContaainer);

export default connect(
    //넘버는 가져온 것의 number
    (state) => ({
        number: state.counter.number,
    }),
    {
        increaseAsync,
        decreaseAsync,
    }
)(CounterContaainer);
