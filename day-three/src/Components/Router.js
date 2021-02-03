import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Coins from "Screens/Coins";
import Exchanges from "Screens/Exchanges";
import Prices from "Screens/Prices";
import Header from "./Header";
export default () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/prices" component={Prices} />
        <Route exact path="/exchanges" component={Exchanges} />
        <Route exact path="/coins" component={Coins} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};
