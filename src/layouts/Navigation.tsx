import { NavLink as BaseNavLink } from "react-router-dom";
import styled from "styled-components";

const Navigation = () => {
  return (
    <List>
      <NavLink
        to="/"
        style={{
          textDecoration: "none",
          width: "fit-content",
        }}
      >
        HOME
      </NavLink>
      <NavLink
        to="/products/headphones"
        style={{
          textDecoration: "none",
          width: "fit-content",
        }}
      >
        HEADPHONES
      </NavLink>
      <NavLink
        to="/products/speakers"
        style={{
          textDecoration: "none",
          width: "fit-content",
        }}
      >
        SPEAKERS
      </NavLink>

      <NavLink
        to="/products/earphones"
        style={{
          textDecoration: "none",
          width: "fit-content",
        }}
      >
        EARPHONES
      </NavLink>
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

const NavLink = styled(BaseNavLink)`
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

  &.active {
    color: var(--orange);
  }

  @media (min-width: 770px) {
    margin-right: 30px;
  }
`;
