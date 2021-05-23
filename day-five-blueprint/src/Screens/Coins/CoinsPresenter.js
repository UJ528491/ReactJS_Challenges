import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Coin from "../../Components/Coin";

const Container = styled.div`
  padding: 0px 10px;
  display: flex;
  flex-direction: column;
`;

const CoinsPresenter = ({ coins, error, loading }) =>
  loading ? (
    <Loader></Loader>
  ) : (
    <Container>
      {coins &&
        coins.length > 0 &&
        coins.map(
          (coin, index) => index < 100 && <Coin key={coin.id} {...coin}></Coin>
        )}
    </Container>
  );

CoinsPresenter.propTypes = {
  coins: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default CoinsPresenter;
