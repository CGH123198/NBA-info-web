import { combineReducers } from "redux";
import players, { playersSaga } from './players';
import loading from './loading';
import { all } from "redux-saga/effects";
import auth, { authSaga } from "./auth";
import user, { userSaga } from "./user";

const rootReducer = combineReducers({
    players: players,
    loading: loading,
    auth: auth,
    user: user,
});

export function* rootSaga() {
    yield all([playersSaga(), authSaga(), userSaga()]);
}

export default rootReducer;