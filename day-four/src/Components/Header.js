import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.h1`
  margin-bottom: 2rem;
  font-size: 3rem;
  font-weight: 600;
`;
const List = styled.ul`
  display: flex;
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: 600;
`;
const ListItem = styled.li`
  border-bottom: 5px solid
    ${props => (props.current ? "#f39c12" : "transparent")};
  color: ${props => (props.current ? "red" : "black")};
  transition: border-bottom 0.5s ease-in-out;
`;
const SLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 0.5rem;
  width: 10rem;
`;
const headerJs = withRouter(({ location: { pathname } }) => (
  <header>
    <Header>Coin Explorer</Header>
    <List>
      <ListItem current={pathname === "/"}>
        <SLink to="/">Prices</SLink>
      </ListItem>
      <ListItem current={pathname === "/exchanges"}>
        <SLink to="/exchanges">Exchanges</SLink>
      </ListItem>
      <ListItem current={pathname === "/coins"}>
        <SLink to="/coins">Coins</SLink>
      </ListItem>
    </List>
  </header>
));

export default headerJs;
