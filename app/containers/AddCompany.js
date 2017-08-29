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
        <div className="text-center my-5">
          <Button bsStyle="primary" bsSize="large" onClick={ () => this.props.onOpenModal() } disabled={ this.props.companiesList.length == 0 ? true : false }>
            Add company
          </Button>
        </div>

        <Modal bsClass="show modal" show={this.props.showModal} onHide={ () => this.props.onCloseModal() }>
          <Modal.Header>
            <Modal.Title componentClass="h5">Choose company</Modal.Title>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={ () => this.props.onCloseModal() }>
              <span aria-hidden="true">&times;</span>
            </button>
          </Modal.Header>
          <Modal.Body>
            {
              this.props.companiesList.length == 0 ?
                <div className="text-center">
                  <span>No companies to add</span>
                </div>
              :
                <ListGroup>
                  {
                    this.props.companiesList.map( (company, index) =>
                      <ListGroupItem key={index} onClick={ () => this.props.onAddCompany(company) }> {company.name} </ListGroupItem>
                    )
                  }
                </ListGroup>
            }
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="secondary" onClick={ () => this.props.onCloseModal() }>Close</Button>
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
