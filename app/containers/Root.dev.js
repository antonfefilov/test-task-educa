import PropTypes from 'prop-types';
import React from 'react';
import {Provider} from 'react-redux';

// import App from '../components/App';
import DevTools from './DevTools';

export default function Root({store}) {
    return (
        <Provider store={store}>
            <div>
                <DevTools />
            </div>
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired
};
