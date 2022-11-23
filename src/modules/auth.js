import { createAction, handleActions } from 'redux-actions';
import { takeLeading } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from './createRequestSaga';
import * as OAuthAPI from '../lib/APIs/OAuth';


const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes('login/LOGIN');

export const loginAction = createAction(LOGIN, code => code);

const loginActionSaga = createRequestSaga(LOGIN, OAuthAPI.getKakaoLoginToken);

export function* authSaga () {
    yield takeLeading(LOGIN, loginActionSaga);
}

const initialState = {
    auth: null,
    error: null,
    /** 
    auth: {
        access_token: ...,
        expires_in: ...,
        token_type: 'bearer',
        refresh_token: ...,
        refresh_token_expires_in: ...,
        id_token: ....,
        scope: "account_email profile_image openid profile_nickname",
    }
    */ 
}

const auth = handleActions({
    [LOGIN_SUCCESS]: (state, action) => ({
        ...state,
        auth: action.payload.data
    }),
    [LOGIN_FAILURE]: (state, action) => ({
        ...state,
        error: action.payload.data
    }),
},  initialState);

export default auth;