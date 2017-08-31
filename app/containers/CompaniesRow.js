import PropTypes from 'prop-types';
import React from 'react';
import { removeCompany, updatePrice } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
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

class CompaniesRow extends React.Component {
  render() {
    const companies = this.props.companiesBySymbol;
    const symbol = this.props.companySymbol;

    const company = companies[symbol];

    return (
      <tr>
        <td> {company.symbol} </td>
        <td> {company.name} </td>
        <td>
          {
            company.isFetching ?
              <i className="fa fa-spinner fa-spin fa-lg" aria-hidden="true"></i>
            :
              company.price
          }
        </td>
        <td>
          <a className="mr-3 float-right" href="javascript: void(0);" onClick={ () => this.props.onRemoveCompany(company) }>
            <i className="fa fa-trash-o fa-lg" aria-hidden="true"></i>
          </a>
          <a className="mr-3 float-right" href="javascript: void(0);" onClick={ () => this.props.onUpdatePrice(company) }>
            <i className="fa fa-refresh fa-lg" aria-hidden="true"></i>
          </a>
        </td>
      </tr>
    )
  }
}

CompaniesRow.propTypes = {
  company: PropTypes.object,
  companiesBySymbol: PropTypes.object,
  companySymbol: PropTypes.string,
  onRemoveCompany: PropTypes.func,
  onUpdatePrice: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompaniesRow);
