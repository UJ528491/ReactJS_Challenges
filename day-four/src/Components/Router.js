import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Coins from "../Routes/Coins/index";
import Exchanges from "../Routes/Exchanges/index";
import Prices from "../Routes/Prices/index";
import styled from "styled-components";

const Result = styled.div`
  font-size: 2rem;
`;
const routerJs = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Result>
          <Route path="/" exact component={Prices} />
          <Route path="/exchanges" exact component={Exchanges} />
          <Route path="/coins" exact component={Coins} />
        </Result>
      </Switch>
    </Router>
  );
};
export default routerJs;
