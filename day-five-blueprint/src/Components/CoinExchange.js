import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 0.5rem;
`;

function CoinExchanges({ name, fiats }) {
  return (
    <Container>
      <h2>{name}</h2>
      <span>
        Pay On{" "}
        {fiats.filter(item => item.symbol).map(item => `${item.symbol} `)}
      </span>
    </Container>
  );
}

export default CoinExchanges;
