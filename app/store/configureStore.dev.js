import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import DevTools from '../utils/DevTools';
import thunk from 'redux-thunk';

export function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      DevTools.instrument()
    )
  );
}
