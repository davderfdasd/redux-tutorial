import { combineReducers } from "redux";
import counter, { counterSaga } from "./counter";
import sample, { sampleSaga } from "./sample";
import loading from "./loading";
import todos from "./todos";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({
    counter,
    todos,
    sample,
    loading,
});

export function* rootSaga() {
    yield all([counterSaga(), sampleSaga()]);
}

export default rootReducer;
