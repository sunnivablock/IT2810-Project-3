import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import reducer from './reducers/index'
import initialState from './reducers/reducer'
import store from './store/index.js'

/*
const middlewares= [thunk];



 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,
    composeEnhancers(
    applyMiddleware(...middlewares)
    ));
*/

render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
