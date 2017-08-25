import * as types from './types';

export function addCompany(company) {
  return {
    type: types.ADD_COMPANY,
    company
  };
}

export function removeCompany(company) {
  return {
    type: types.REMOVE_COMPANY,
    company
  };
}
