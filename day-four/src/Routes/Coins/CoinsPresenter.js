import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";

const Container = styled.div`
  padding: 0px 10px;
  display: flex;
  flex-direction: column;
`;

const Item = styled.span`
  line-height: 1.3;
`;

const CoinsPresenter = ({ coins, error, loading }) =>
  loading ? (
    <Loader></Loader>
  ) : (
    <Container>
      {coins &&
        coins.length > 0 &&
        coins.map(
          (coin, index) =>
            index < 100 && (
              <Item key={coin.id}>
                #{coin.rank} {coin.name}/{coin.symbol}
              </Item>
            )
        )}
    </Container>
  );

CoinsPresenter.propTypes = {
  coins: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default CoinsPresenter;
