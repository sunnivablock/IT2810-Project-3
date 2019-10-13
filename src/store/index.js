

import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';
import initialState from './initialState';

import { App } from './App'

const middlewares = [thunk];

const store= createStore(rootReducer, initialState, applyMiddleware(...middlewares));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)


