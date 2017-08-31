import React from 'react';

import AddCompany from '../containers/AddCompany';
import CompaniesTable from '../containers/CompaniesTable';

const App = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <header className="my-5 text-center">
          <h1>Public companies stocks</h1>
        </header>

        <main>
          <CompaniesTable />
          <AddCompany />
        </main>
      </div>
    </div>
  </div>
)

export default App;
