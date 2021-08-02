import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Portfolio from "./Website/Portfolio/Portfolio";

export const routes = [
  {
    site: "portfolio",
    siteName: "Portfolio",
    path: `/`,
    nested: false,
    component: Portfolio,
    exact: true,
  },
  {
    site: "portfolio",
    siteName: "Portfolio",
    path: `/portfolio`,
    nested: false,
    component: Portfolio,
    exact: false,
  },
  {
    site: "notfound",
    siteName: "Not Found",
    path: "*",
    nested: false,
    component: Portfolio,
    exact: false,
  },
];

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Portfolio} />;
    </Switch>
  </BrowserRouter>
);

export default Routes;
