import PropTypes from 'prop-types';
import React from 'react';
import { removeCompany, updatePrice } from '../actions';
import { connect } from 'react-redux';
import AddCompany from './AddCompany';

const mapStateToProps = (state) => {
  return {
    companies: state.companies,
    companiesBySymbol: state.companiesBySymbol
  };
};

const mapDispatchToProps = (dispatch) => ({
  onRemoveCompany(company) {
    dispatch(removeCompany(company));
  },

  onUpdatePrice(company) {
    dispatch(updatePrice(company));
  }
});

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <header className="my-5 text-center">
                <h1>Public companies stocks</h1>
              </header>

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
                    this.props.companies.map((companySymbol, index) =>
                      <tr key={index}>
                        <td> {this.props.companiesBySymbol[companySymbol].symbol} </td>
                        <td> {this.props.companiesBySymbol[companySymbol].name} </td>
                        <td>
                           {this.props.companiesBySymbol[companySymbol].price}
                        </td>
                        <td>
                          <a className="mr-3 float-right" href="javascript: void(0);" onClick={ () => this.props.onRemoveCompany(this.props.companiesBySymbol[companySymbol]) }>
                            <i className="fa fa-trash-o fa-lg" aria-hidden="true"></i>
                          </a>
                          <a className="mr-3 float-right" href="javascript: void(0);" onClick={ () => this.props.onUpdatePrice(this.props.companiesBySymbol[companySymbol]) }>
                            <i className="fa fa-refresh fa-lg" aria-hidden="true"></i>
                          </a>
                        </td>
                      </tr>
                    )
                  }
                </tbody>
              </table>

              <AddCompany />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  companies: PropTypes.array,
  companiesBySymbol: PropTypes.object,
  onAddCompany: PropTypes.func,
  onRemoveCompany: PropTypes.func,
  onUpdatePrice: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
