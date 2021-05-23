import React from "react";
import Loader from "../../Components/Loader";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Route, Link, withRouter } from "react-router-dom";
import Markets from "../CoinMarkets";
import CoinExchanges from "../CoinExchanges";

const Container = styled.div``;
const DetailContainer = styled.div`
  text-transform: capitalize;
  margin: 2rem 0;
`;
const LinkContainer = styled.div`
  margin-bottom: 2rem;
  text-transform: uppercase;
`;
const LinkButton = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
  margin-right: 1rem;
  padding: 4px;
  border: 2px solid #1abc9c;
  border-radius: 2px;
  background-color: ${props => (props.active ? "#1abc9c" : "white")};
  color: ${props => (props.active ? "white" : "black")};
`;
const CoinPresenter = withRouter(
  ({ location: { pathname }, loading, coin }) => {
    if (!loading) {
      const {
        id,
        name,
        symbol,
        rank,
        description,
        open_source,
        proof_type,
        org_structure,
      } = coin;
      return (
        <Container>
          <h1>
            {name} / {symbol}
          </h1>
          <p>{description}</p>
          <DetailContainer>
            <h2>rank : {rank}</h2>
            <h2>open source : {open_source ? "yes" : "no"}</h2>
            <h2>proof type : {proof_type}</h2>
            <h2>structure : {org_structure}</h2>
          </DetailContainer>
          <LinkContainer>
            <LinkButton active={pathname === `/coins/${id}/markets`}>
              <Link to={`/coins/${id}/markets`}>markets</Link>
            </LinkButton>
            <LinkButton active={pathname === `/coins/${id}/exchanges`}>
              <Link to={`/coins/${id}/exchanges`}>exchanges</Link>
            </LinkButton>
          </LinkContainer>
          <Route path="/coins/:id/markets" component={Markets} />
          <Route path="/coins/:id/exchanges" component={CoinExchanges} />
        </Container>
      );
    }
    return <Loader />;
  }
);

CoinPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  coin: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired,
    open_source: PropTypes.bool.isRequired,
    proof_type: PropTypes.string.isRequired,
    org_structure: PropTypes.string.isRequired,
  }),
};

export default CoinPresenter;
