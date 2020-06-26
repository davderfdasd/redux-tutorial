import { createAction, handleActions } from "redux-actions";
import { call, put, takeLatest } from "redux-saga/effects";
import * as api from "../lib/api";
import { startLoading, finishLoading } from "./loading";

const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";
const GET_POST_FAILURE = "sample/GET_POST_FAILURE";

const GET_USER = "sample/GET_USER";
const GET_USER_SUCCESS = "sample/GET_USER_SUCCESS";
const GET_USER_FAILURE = "sample/GET_USER_FAILURE";

export const getPost = createAction(GET_POST, (id) => id);
export const getUsers = createAction(GET_USER);

function* getPostSaga(action) {
    yield put(startLoading(GET_POST));

    try {
        const post = yield call(api.getPost, action.payload);
        console.log(post.data);
        yield put({
            type: GET_POST_SUCCESS,
            payload: post.data,
        });
    } catch (e) {
        yield put({
            type: GET_POST_FAILURE,
            payload: e,
            error: true,
        });
    }
    yield put(finishLoading(GET_POST));
}

function* getUserSage(action) {
    yield put(startLoading(GET_USER));

    try {
        const users = yield call(api.getUser);
        console.log(users.data);
        yield put({
            type: GET_USER_SUCCESS,
            payload: users.data,
        });
    } catch (e) {
        yield put({
            type: GET_USER_FAILURE,
            payload: e,
            error: true,
        });
    }
    yield put(finishLoading(GET_USER));
}

export function* sampleSaga() {
    yield takeLatest(GET_POST, getPostSaga);
    yield takeLatest(GET_USER, getUserSage);
}

const initialState = {
    post: null,
    user: null,
};

const sample = handleActions(
    {
        [GET_POST_SUCCESS]: (state, action) => ({
            ...state,
            post: action.payload,
        }),
        [GET_USER_SUCCESS]: (state, action) => ({
            ...state,
            user: action.payload,
        }),
    },
    initialState
);

export default sample;
