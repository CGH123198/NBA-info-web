import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from './createRequestSaga';
import * as userAPI from '../lib/APIs/user';

const [
    GET_USER_INFO, 
    GET_USER_INFO_SUCCESS, 
    GET_USER_INFO_FAILURE
] = createRequestActionTypes('user/GET_USER_INFO');

export const getUserInfoAction = createAction(
    GET_USER_INFO,
    access_token => access_token
)

const getUserInfoSaga = createRequestSaga(GET_USER_INFO, userAPI.getKakaoUserInfo_SDK);

export function* userSaga () {
    yield takeLatest(GET_USER_INFO,getUserInfoSaga);
}

const initialState = {
    user: null,
    error: null,
}

const user = handleActions({
    [GET_USER_INFO_SUCCESS]: (state, action) => ({
        ...state,
        user: action.payload,
    }),
    [GET_USER_INFO_FAILURE]: (state, action) => ({
        ...state,
        error: action.payload
    })
}, initialState);


export default user;