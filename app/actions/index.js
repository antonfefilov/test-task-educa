import * as types from './types';

export function addCompany(company) {
  let fetchUrl = `https://query.yahooapis.com/v1/public/yql?q=env "store://datatables.org/alltableswithkeys"; select * from yahoo.finance.quotes where symbol in ("${company.symbol}")&format=json`;

  return (dispatch) => {
    dispatch({
      type: types.ADD_COMPANY,
      company
    });

    return fetch(fetchUrl)
      .then(
        response => response.json(),
        /* eslint-disable no-console */
        error => console.log('An error occured.', error)
        /* eslint-enable no-console */
      )
      .then(json => {
        /* eslint-disable no-console */
        console.log(json)
        /* eslint-enable no-console */
        dispatch(updatePrice(company, json.query.results.quote.LastTradePriceOnly))
      }
      )
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
