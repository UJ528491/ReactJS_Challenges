import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";

const Container = styled.div`
  padding: 0px 10px;
  display: flex;
  flex-direction: column;
`;
const PricesPresenter = ({ prices, error, loading }) =>
  loading ? (
    <Loader></Loader>
  ) : (
    <Container>
      {prices &&
        prices.length > 0 &&
        prices.map(
          (price, index) =>
            index < 100 && (
              <span key={price.id}>
                {price.name} / {price.symbol}: ${price.quotes.USD.price}
              </span>
            )
        )}
    </Container>
  );

PricesPresenter.propTypes = {
  price: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default PricesPresenter;
