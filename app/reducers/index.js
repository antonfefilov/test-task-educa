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

const companiesList = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: '', isFetching: false },
  { symbol: 'GOOG', name: 'Alphabet Inc.', price: '', isFetching: false },
  { symbol: 'MSFT', name: 'Microsoft Corporation', price: '', isFetching: false }
];

const companiesToAdd = (state = companiesList, action) => {
  switch (action.type) {
    case types.ADD_COMPANY:
      return state.filter((el) => (el !== action.company));
    case types.REMOVE_COMPANY:
      return [ ...state, action.company ];
    default:
      return state;
  }
};

const toggleModal = (state = false, action) => {
  switch (action.type) {
    case types.OPEN_MODAL:
      return true;
    case types.CLOSE_MODAL:
      return false;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  companies,
  companiesBySymbol,
  addCompany: combineReducers({
    companies: companiesToAdd,
    showModal: toggleModal
  })
});

export default rootReducer;
