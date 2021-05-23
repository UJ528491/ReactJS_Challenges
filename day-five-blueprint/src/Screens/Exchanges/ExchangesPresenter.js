import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";

const Container = styled.div`
  padding: 0px 10px;
  display: flex;
  flex-direction: column;
`;
const Span = styled.span`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
const Title = styled.h5`
  font-weight: 600;
  margin-bottom: 10px;
`;
const Link = styled.a`
  text-decoration: underline;
  margin-top: 10px;
`;
const ExchangesPresenter = ({ exchanges, loading }) =>
  loading ? (
    <Loader></Loader>
  ) : (
    <Container>
      {exchanges &&
        exchanges.length > 0 &&
        exchanges.map(
          (exchange, index) =>
            index < 100 && (
              <Span key={exchange.id}>
                <Title>{exchange.name} </Title>
                <p>
                  {exchange.description &&
                    exchange.description.length > 10 &&
                    exchange.description.slice(0, 80)}
                  ...
                </p>
                <Link
                  href={exchange.links !== null ? exchange.links.website : ""}
                >
                  {exchange.links !== null
                    ? exchange.links.website
                    : "empty link"}
                </Link>
              </Span>
            )
        )}
    </Container>
  );

ExchangesPresenter.propTypes = {
  exchanges: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default ExchangesPresenter;
