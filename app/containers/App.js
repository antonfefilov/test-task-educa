import PropTypes from 'prop-types';
import React from 'react';
import { addCompany, removeCompany } from '../actions';
import { connect } from 'react-redux';
import { Modal, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { footer } from '../styles/footer.scss';

const mapStateToProps = (state) => {
  return {
    companies: state.companies,
    companiesBySymbol: state.companiesBySymbol
  };
};

const mapDispatchToProps = (dispatch) => ({
  onAddCompany(company) {
    dispatch(addCompany(company));
  },

  onRemoveCompany(company) {
    dispatch(removeCompany(company));
  },
});

const companiesList = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: '', isFetching: false },
  { symbol: 'GOOG', name: 'Alphabet Inc.', price: '', isFetching: false },
  { symbol: 'MSFT', name: 'Microsoft Corporation', price: '', isFetching: false }
];

class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = { showModal: false };
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    return (
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
                    this.props.companies.map((companySymbol, index) =>
                      <tr key={index}>
                        <td> {this.props.companiesBySymbol[companySymbol].symbol} </td>
                        <td> {this.props.companiesBySymbol[companySymbol].name} </td>
                        <td> {this.props.companiesBySymbol[companySymbol].price} </td>
                        <td> <a onClick={ () => this.props.onRemoveCompany(this.props.companiesBySymbol[companySymbol]) }>Remove</a> </td>
                      </tr>
                    )
                  }
                </tbody>
              </table>

              <Button bsStyle="primary" bsSize="large" onClick={ () => this.open() }>
                Add company
              </Button>

              <Modal show={this.state.showModal} onHide={ () => this.close() }>
                <Modal.Header closeButton>
                  <Modal.Title>Choose company</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ListGroup>
                    {
                      companiesList.map( (company, index) =>
                        <ListGroupItem key={index} onClick={ () => this.props.onAddCompany(company) }> {company.name} </ListGroupItem>
                      )
                    }
                  </ListGroup>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={ () => this.close() }>Close</Button>
                </Modal.Footer>
              </Modal>
              </div>
            </div>

          <footer className={footer}>
          </footer>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  companies: PropTypes.array,
  companiesBySymbol: PropTypes.object,
  onAddCompany: PropTypes.func,
  onRemoveCompany: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
