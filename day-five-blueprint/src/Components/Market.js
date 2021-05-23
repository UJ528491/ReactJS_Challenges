import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-decoration: underline;
  margin-bottom: 0.5rem;
`;

function Market({ url, name }) {
  return (
    <Container>
      <a href={url}>{name}</a>
    </Container>
  );
}

export default Market;
