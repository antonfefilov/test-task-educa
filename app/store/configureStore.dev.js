import { createStore, compose } from 'redux';
import rootReducer from '../reducers';
import DevTools from '../utils/DevTools';

export function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        compose(
            DevTools.instrument()
        )
    );
}
