import * as React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

import Home from "./Home";
import Discover from "./Discover";
import Map from "./Map";

const Root = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/discover" component={Discover} />
    <Route path="/map" component={Map} />
  </Switch>
);
export default Root;
