import { call, put, putResolve } from 'redux-saga/effects';
import { isLoadingStart, isLoadingEnd } from './loading';

export const createRequestActionTypes = (type) => {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    return [type, SUCCESS, FAILURE];
}

function createRequestSaga(type, request) {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    return function* (action) {
        yield put(isLoadingStart(type));
        try {
            const response = yield call(request, action.payload);
            yield put({
                type: SUCCESS,
                payload: response,
            });
        } catch (e) {
            yield put({
                type: FAILURE,
                payload: e
            })
        }
        yield putResolve(isLoadingEnd(type));
    }
}

export default createRequestSaga;