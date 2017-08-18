import React from 'react';
import { footer } from '../styles/footer.scss';

const App = () =>
    <div>
        <h1>Filter table</h1>
        { Routes }
        <footer className={footer}>
            <Link to="/">Filterable Table</Link>
            <Link to="/about">About</Link>
        </footer>
    </div>;

export default App;
