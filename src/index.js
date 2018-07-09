import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import ToDo from "./ToDo/containers/ToDo";

import { Provider } from "react-redux";
import {createStore} from 'redux'
import rootReducer from './reducers/index'

import "./index.css";

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <ToDo />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
