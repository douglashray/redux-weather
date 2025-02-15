import "bootstrap/dist/css/bootstrap.css";

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore,applyMiddleware } from "redux";
import promise from "redux-promise";
import './index.css';
import App from './App';
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);