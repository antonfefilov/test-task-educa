import React from 'react';
import { footer } from '../styles/footer.scss';

const companies = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: '$159.07' },
  { symbol: 'GOOG', name: 'Alphabet Inc.', price: '$921.93' },
  { symbol: 'MSFT', name: 'Microsoft Corporation', price: '$72.96' }
];

const App = () =>
  <div>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Companies list</h1>

          <table className="table">
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Company name</th>
                <th>Price</th>
                <th />
              </tr>
            </thead>

            <tbody>
              {
                companies.map((company, index) =>
                  <tr key={index}>
                    <td> {company.symbol} </td>
                    <td> {company.name} </td>
                    <td> {company.price} </td>
                    <td> <a href="#">Remove</a> </td>
                  </tr>
                )
              }
            </tbody>
          </table>

          <button className="btn btn-primary btn-lg">Add company</button>
        </div>
      </div>

      <footer className={footer}>
      </footer>
    </div>
  </div>;

export default App;
