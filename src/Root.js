import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Discover from "./Discover";
import Routing from "./Routing";
import Map from "./Map";
import Bicing from "./Bici";
import Metro from "./Metro";

const Root = () => (
  <Switch>
    <Redirect exact from="/" to="/map" />
    <Route path="/discover" component={Discover} />
    <Route path="/map" component={Map} />
    <Route path="/routes" component={Routing} />
    <Route path="/bicing" component={Bicing} />
    <Route path="/metro" component={Metro} />
  </Switch>
);
export default Root;
