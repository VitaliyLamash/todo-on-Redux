import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import App from './App';

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/index";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

import createHistory from "history/createBrowserHistory";
import { Router } from "react-router-dom";

import "./index.css";
const history = createHistory();
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
