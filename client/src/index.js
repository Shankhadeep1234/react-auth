import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { logger } from "redux-logger";

import App from "./components/App";
import Welcome from "./components/Welcome";
import SignUp from "./components/auth/SignUp";
import reducers from "./reducers";

const store = createStore(reducers, {}, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" component={SignUp} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
