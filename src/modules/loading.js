import { createAction, handleActions } from 'redux-actions';

const IS_LOADING_START = "loading/IS_LOADING_START";
const IS_LOADING_END = "loading/IS_LOADING_END";

export const isLoadingStart = createAction(
    IS_LOADING_START,
    ActionType => ActionType
);
export const isLoadingEnd = createAction(
    IS_LOADING_END, 
    ActionType => ActionType
);


const initialState = {}

const loading = handleActions(
    {
        [IS_LOADING_START]: (state, action) => ({
            ...state,
            [action.payload]: true
        }),
        [IS_LOADING_END]: (state, action) => ({
            ...state,
            [action.payload]: false
        })
    },
    initialState
)

export default loading;