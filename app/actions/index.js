import * as types from './types';

export function addCompany(company) {
  return (dispatch) => {
    dispatch({
      type: types.ADD_COMPANY,
      company
    });

    dispatch(updatePrice(company))
  }
}

export function removeCompany(company) {
  return {
    type: types.REMOVE_COMPANY,
    company
  };
}

export function updatePrice(company) {
  let fetchUrl = `https://query.yahooapis.com/v1/public/yql?q=env "store://datatables.org/alltableswithkeys"; select * from yahoo.finance.quotes where symbol in ("${company.symbol}")&format=json`;

  return (dispatch) => {
    return fetch(fetchUrl)
      .then(
        response => response.json(),
        /* eslint-disable no-console */
        error => console.log('An error occured.', error)
        /* eslint-enable no-console */
      )
      .then(json => {
        let newPrice = json.query.results.quote.LastTradePriceOnly

        dispatch({
          type: types.UPDATE_PRICE,
          company,
          newPrice
        });
      })
  }
}

export function openModal() {
  return {
    type: types.OPEN_MODAL
  };
}

export function closeModal() {
  return {
    type: types.CLOSE_MODAL
  };
}
