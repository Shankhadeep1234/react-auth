import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import App from "./components/App";
import Welcome from "./components/Welcome";
import SignUp from "./components/auth/SignUp";

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Route path="/" exact component={Welcome} />
      <Route path="/signup" component={SignUp} />
    </App>
  </BrowserRouter>,
  document.getElementById("root")
);
