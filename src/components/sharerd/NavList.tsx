import { useRef, useState } from "react";
import { Link } from "@tanstack/router";
import styled from "styled-components";

const NavList = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <Wraper>
      <Link
        to="/"
        onClick={() => setShowMenu(false)}
        style={{
          textDecoration: "none",
          width: "fit-content",
        }}
      >
        <NavItem>HOME</NavItem>
      </Link>
      <Link
        to="/"
        onClick={() => setShowMenu(false)}
        style={{
          textDecoration: "none",
          width: "fit-content",
        }}
      >
        <NavItem>HEADPHONES</NavItem>
      </Link>
      <Link
        to="/"
        onClick={() => setShowMenu(false)}
        style={{
          textDecoration: "none",
          width: "fit-content",
        }}
      >
        <NavItem>SPEAKERS</NavItem>
      </Link>

      <Link
        to="/"
        onClick={() => setShowMenu(false)}
        style={{
          textDecoration: "none",
          width: "fit-content",
        }}
      >
        <NavItem>SPEAKERS</NavItem>
      </Link>
    </Wraper>
  );
};

export default NavList;

const Wraper = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  row-gap: 32px;
`;

const NavItem = styled.h3`
  font-weight: 400;
  font-size: 24px;
  line-height: 25px;
  letter-spacing: 2px;
  color: white;
  text-transform: uppercase;
  width: fit-content;
`;
