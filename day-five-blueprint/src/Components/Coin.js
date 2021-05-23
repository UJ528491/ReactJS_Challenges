import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CoinItem = styled.div`
  font-size: 1.1rem;
  text-decoration: underline;
  margin-bottom: 1rem;
`;
const Coin = ({ id, name, symbol, rank }) => (
  <CoinItem>
    <Link to={`coins/${id}`}>
      <span>
        #{rank} {name}/{symbol} ➡
      </span>
    </Link>
  </CoinItem>
);

export default Coin;
