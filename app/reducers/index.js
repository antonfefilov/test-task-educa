import { combineReducers } from 'redux';
import * as types from '../actions/types';

const companies = (state = [], action) => {
  switch (action.type) {
    case types.ADD_COMPANY:
      return [ ...state, action.company ];
    case types.REMOVE_COMPANY:
      return state.filter((el) => (el !== action.company));
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  companies
});

export default rootReducer;
