import { Link } from "@tanstack/router";
import styled from "styled-components";

const Navigation = () => {
  return (
    <List>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          width: "fit-content",
        }}
      >
        <NavItem>HOME</NavItem>
      </Link>
      <Link
        to="/products/headphones"
        style={{
          textDecoration: "none",
          width: "fit-content",
        }}
      >
        <NavItem>HEADPHONES</NavItem>
      </Link>
      <Link
        to="/products/speakers"
        style={{
          textDecoration: "none",
          width: "fit-content",
        }}
      >
        <NavItem>SPEAKERS</NavItem>
      </Link>

      <Link
        to="/products/earphones"
        style={{
          textDecoration: "none",
          width: "fit-content",
        }}
      >
        <NavItem>EARPHONES</NavItem>
      </Link>
    </List>
  );
};

export default Navigation;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  row-gap: 32px;

  @media (min-width: 770px) {
    flex-direction: row;
  }
`;

const NavItem = styled.h3`
  font-weight: 700;
  font-size: 13px;
  line-height: 25px;
  letter-spacing: 2px;
  color: white;
  text-transform: uppercase;
  width: fit-content;
  font-family: "Manrope";
  &&:hover {
    color: var(--orange);
  }

  @media (min-width: 770px) {
    margin-right: 30px;
  }
`;
