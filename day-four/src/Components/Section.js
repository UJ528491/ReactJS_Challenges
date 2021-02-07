import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 15px;
  }
`;

const Rank = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

const Grid = styled.div`
  margin-top: 25px;
`;

const Section = ({ rank, children }) => (
  <Container>
    <Rank>{children}</Rank>
    <Grid></Grid>
  </Container>
);

Section.propTypes = {
  number: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Section;
