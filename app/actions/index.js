import * as types from './types';

export function addCompany(company) {
  let newPrice = 100;

  return (dispatch) => {
    dispatch({
      type: types.ADD_COMPANY,
      company
    });

    setTimeout(() => {
      dispatch({
        type: types.UPDATE_PRICE,
        company,
        newPrice
      })
    }, 1000)
  }
}

export function removeCompany(company) {
  return {
    type: types.REMOVE_COMPANY,
    company
  };
}

export function updatePrice(company, newPrice) {
  return {
    type: types.UPDATE_PRICE,
    company,
    newPrice
  };
}

// {
//   companies: ["APLE", "GOOG", "MSFT"],
//   companiesBySymbol: {
//     "APLE": { symbol: "APLE", name: "Apple", price: "123" },
//     "GOOG": { symbol: "GOOG", name: "Google", price: "123" },
//     "MSFT": { symbol: "MSFT", name: "Microsoft", price: "123" },
//   }
// }
