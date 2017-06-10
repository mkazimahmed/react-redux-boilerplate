import React from "react";
import { Route, IndexRoute } from "react-router";

import MainContainer from './components/layout/main-container';
import Home from "./components/home/home";

export default (
  <div>
    <Route path="/" component={MainContainer}>
      <Route path="/home" component={Home} />
      <IndexRoute component={Home} />
    </Route>
  </div>
);
