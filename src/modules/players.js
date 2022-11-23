import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from './createRequestSaga';
import * as playersAPI from '../lib/APIs/players';

const [
    PLAYERS_INFO, 
    PLAYERS_INFO_SUCCESS, 
    PLAYERS_INFO_FAILURE
] = createRequestActionTypes('players/PLAYERS_INFO');

export const getPlayersList = createAction(
    PLAYERS_INFO,
    (value, criteria) => ({ value, criteria })
)

const playersListSaga = createRequestSaga(PLAYERS_INFO, playersAPI.getPlayersList);

export function* playersSaga() {
    yield takeLatest(PLAYERS_INFO, playersListSaga);
}


const initialState = {
    player: null, //검색 결과 중 특정 선수 한 명 정보.
    players: [],  //검색 결과 playerlist
    error: null,
}


const players = handleActions(
    {
        [PLAYERS_INFO_SUCCESS]: (state, action) => ({
            ...state,
            players: [...action.payload.data.response],
            error: action.payload.data.errors.search
        }),
        [PLAYERS_INFO_FAILURE]: (state, action) => ({
            ...state,
            error: action.payload,
        }),
    },
    initialState
)

export default players;