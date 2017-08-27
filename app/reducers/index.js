import { combineReducers } from 'redux';
import * as types from '../actions/types';

const companies = (state = [], action) => {
  switch (action.type) {
    case types.ADD_COMPANY:
      return [ ...state, action.company.symbol ];
    case types.REMOVE_COMPANY:
      return state.filter((el) => (el !== action.company.symbol));
    default:
      return state;
  }
};

const companiesBySymbol = (state = {}, action) => {
  switch (action.type) {
    case types.ADD_COMPANY:
      return {
        ...state,
        [action.company.symbol]: action.company
      };
    case types.REMOVE_COMPANY: {
      let newState = Object.assign({}, state)
      delete newState[action.company.symbol]
      return newState
    }
    case types.UPDATE_PRICE:
      return {
        ...state,
        [action.company.symbol]: updatePrice(state[action.company.symbol], action.newPrice)
      };
    default:
      return state;
  }
};

const updatePrice = (state, newPrice) => {
  return {
      ...state, "price": newPrice
  };
};

const rootReducer = combineReducers({
  companies,
  companiesBySymbol
});

export default rootReducer;
