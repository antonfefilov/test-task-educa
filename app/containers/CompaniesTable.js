import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import CompaniesRow from './CompaniesRow'

const mapStateToProps = (state) => {
  return {
    companies: state.companies,
  };
};

class CompaniesTable extends React.Component {
  render() {
    return (
      this.props.companies.length > 0 &&

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
            this.props.companies.map( (companySymbol, index) =>
              <CompaniesRow key={index} companySymbol={companySymbol} />
            )
          }
        </tbody>
      </table>
    )
  }
}

CompaniesTable.propTypes = {
  companies: PropTypes.array,
};

export default connect(
  mapStateToProps
)(CompaniesTable);
