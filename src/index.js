import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import {createStore,applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
import task from './reducers/index'
import { save, load } from "redux-localstorage-simple"
import {rootReducer} from "./reducers/rootreducers"

const middleware = [logger ,save()]

const store=createStore(rootReducer,load(),composeWithDevTools(applyMiddleware(...middleware )) );
console.log(store)

ReactDOM.render(
<Provider store={store}>
<App/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
