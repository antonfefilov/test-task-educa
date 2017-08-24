import { combineReducers } from 'redux';
import * as types from '../actions/types';

const filter = (state = [], action) => {
    switch (action.type) {
        case types.FILTER:
            return action.filter;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    filter
});

export default rootReducer;
