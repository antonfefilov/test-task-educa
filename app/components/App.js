import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { footer } from '../styles/footer.scss';

const companies = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: '$159.07' },
  { symbol: 'GOOG', name: 'Alphabet Inc.', price: '$921.93' },
  { symbol: 'MSFT', name: 'Microsoft Corporation', price: '$72.96' }
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

              <Button bsStyle="primary" bsSize="large" onClick={ (e) => this.open(e) }>
                Add company
              </Button>

              <Modal show={this.state.showModal} onHide={ (e) => this.close(e) }>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <h4>Text in a modal</h4>
                  <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

                  <hr />

                  <h4>Overflowing text to show scroll behavior</h4>
                  <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                  <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                  <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                  <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                  <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                  <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={ (e) => this.close(e) }>Close</Button>
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

export default App;
