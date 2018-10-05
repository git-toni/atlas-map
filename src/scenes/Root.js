import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { HomeScene, DiscoverScene, MapScene } from "./index";

export const Root = () => (
  <Router> 
    <Switch>
      <Route exact path="/" component={HomeScene}></Route>
      <Route path="/discover" component={DiscoverScene}></Route>
      <Route path="/map" component={MapScene}></Route>
    </Switch>
  </Router> 
);
