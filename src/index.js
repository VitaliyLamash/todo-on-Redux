import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import MainPage from "./MainPage/containers/MainPage";
import ToDo from "./ToDo/containers/ToDo";
import Weather from "./Weather/containers/Weather";

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/index";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

import createHistory from "history/createBrowserHistory";
import { Router, Route, Link } from "react-router-dom";

import "./index.css";
const history = createHistory();
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div className="menu">
        <ul>
          <li>
            <Link to="/">MainPage</Link>
          </li>
          <li>
            <Link to="/ToDo">ToDo</Link>
          </li>
          <li>
            <Link to="/Weather">Weather</Link>
          </li>
        </ul>
        <hr /> <br /> <br />
        <Route exact path="/" component={MainPage} />
        <Route path="/Todo" component={ToDo} />
        <Route path="/Weather" component={Weather} />
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
