import { createAction, handleActions } from "redux-actions";
import { connect } from "react-redux";
import { delay, put, takeEvery, takeLatest } from "redux-saga/effects";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

const INCREASE_ASYNC = "counter/INCREASE_ASYNK";
const DECREASE_ASYNC = "counter/DECREASE_ASYNK";
//액션타입 만들고

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined);
export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);

function* increaseSage() {
    console.log("adsafsdafdsa");
    yield delay(1000);
    yield put(increase());
}

function* decreaseSage() {
    yield delay(1000);
    yield put(decrease());
}

export function* counterSaga() {
    yield takeEvery(INCREASE_ASYNC, increaseSage);
    yield takeLatest(DECREASE_ASYNC, decreaseSage);
}

//액션 만들고

const initialState = {
    number: 0,
};

const counter = handleActions(
    {
        [INCREASE]: (state, action) => ({ number: state.number + 1 }),
        [DECREASE]: (state, action) => ({ number: state.number - 1 }),
    }, //액션 정의
    initialState
);

export default counter;
