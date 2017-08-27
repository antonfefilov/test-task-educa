import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import DevTools from '../utils/DevTools';
import thunk from 'redux-thunk';
import { loadState } from './localStorage';

const persistedState = loadState();

export function configureStore() {
  return createStore(
    rootReducer,
    persistedState,
    compose(
      applyMiddleware(thunk),
      DevTools.instrument()
    )
  );
}
