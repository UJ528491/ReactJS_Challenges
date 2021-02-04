import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Coins from "../Screens/Coins";
import Exchanges from "../Screens/Exchanges";
import Prices from "../Screens/Prices";
import styled from "styled-components";

const Result = styled.div`
  font-size: 2rem;
`;
export default () => {
  return (
    <Router>
      <Header />
      <Result>
        <Route path="/" exact component={Prices} />
        <Route path="/exchanges" component={Exchanges} />
        <Route path="/coins" exact component={Coins} />
      </Result>
    </Router>
  );
};
