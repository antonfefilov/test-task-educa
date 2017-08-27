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

// export function changePrice(company, price) {
//   return {
//     type: types.FETCH_PRICE_REQUEST,
//     company
//   };
// }

// {
//   companies: ["APLE", "GOOG", "MSFT"],
//   companiesBySymbol: {
//     "APLE": { symbol: "APLE", name: "Apple", price: "123" },
//     "GOOG": { symbol: "GOOG", name: "Google", price: "123" },
//     "MSFT": { symbol: "MSFT", name: "Microsoft", price: "123" },
//   }
// }
