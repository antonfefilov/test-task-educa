import PropTypes from 'prop-types';
import React from 'react';
import { addCompany, openModal, closeModal } from '../actions';
import { connect } from 'react-redux';
import { Modal, Button, ListGroup, ListGroupItem } from 'react-bootstrap';


const mapStateToProps = (state) => {
  return {
    companiesList: state.addCompany.companies,
    showModal: state.addCompany.showModal
  };
};

const mapDispatchToProps = (dispatch) => ({
  onAddCompany(company) {
    dispatch(addCompany(company));
  },

  onOpenModal() {
    dispatch(openModal());
  },

  onCloseModal() {
    dispatch(closeModal());
  }
});

class AddCompany extends React.Component {
  render() {
    return (
      <div>
        <Button bsStyle="primary" bsSize="large" onClick={ () => this.props.onOpenModal() }>
          Add company
        </Button>

        <Modal show={this.props.showModal} onHide={ () => this.props.onCloseModal() }>
          <Modal.Header closeButton>
            <Modal.Title>Choose company</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ListGroup>
              {
                this.props.companiesList.map( (company, index) =>
                  <ListGroupItem key={index} onClick={ () => this.props.onAddCompany(company) }> {company.name} </ListGroupItem>
                )
              }
            </ListGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={ () => this.props.onCloseModal() }>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

AddCompany.propTypes = {
  showModal: PropTypes.boolean,
  companiesList: PropTypes.array,
  onAddCompany: PropTypes.func,
  onOpenModal: PropTypes.func,
  onCloseModal: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCompany);
