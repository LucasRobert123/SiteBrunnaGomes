import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import { LandingPage } from "./pages/LandingPage";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={LandingPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
