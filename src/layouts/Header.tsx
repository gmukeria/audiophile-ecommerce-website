import { Burger, Logo, Cart, Close } from "../assets/svg";
import { CartContent } from "../components/modals";
import React, { useContext, useRef, useState } from "react";
import Modal from "../components/modals/Modal";
import { Categories } from "../components";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navigation from "./Navigation";
import CartContext from "../contexts/CartContext";

const Header = () => {
  const [isCartOpen, setCartIsOpen] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const backDrop = useRef<HTMLDivElement | null>(null);
  const backDropHandler: React.MouseEventHandler<HTMLDivElement> = (event) => {
    if (event.target === backDrop.current) {
      setShowMenu(false);
    }
  };

  const { cartData } = useContext(CartContext);

  return (
    <Wraper>
      {showMenu ? (
        <Close onClick={() => setShowMenu(false)} />
      ) : (
        <BurgerContainer>
          <Burger onClick={() => setShowMenu(true)} />
        </BurgerContainer>
      )}
      {showMenu ? (
        <Backdrop ref={backDrop} onClick={backDropHandler}>
          <Menu>
            <Categories onClosed={() => setShowMenu(false)} />
          </Menu>
        </Backdrop>
      ) : null}
      <Link to="/" onClick={() => setShowMenu(false)}>
        <LogoContainer>
          <Logo />
        </LogoContainer>
      </Link>

      <DesktopMenu>
        <Navigation />
      </DesktopMenu>

      {isCartOpen ? (
        <CartButton onClick={() => setCartIsOpen(false)}>
          <Cart />
          {cartData.length > 0 && <CartCount>{cartData.length}</CartCount>}
        </CartButton>
      ) : (
        <CartButton onClick={() => setCartIsOpen(true)}>
          <Cart />
          {cartData.length > 0 && <CartCount>{cartData.length}</CartCount>}
        </CartButton>
      )}

      <Modal open={isCartOpen} onClose={() => setCartIsOpen(false)}>
        <CartContent onClose={() => setCartIsOpen(false)} />
      </Modal>
    </Wraper>
  );
};

export default Header;

const Wraper = styled.div`
  width: 100%;
  height: 90px;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background-color: var(--light-black);
  color: var(--white);
  z-index: 999;
  position: sticky;
  top: 0;

  @media (min-width: 770px) {
    justify-content: normal;
  }

  @media (min-width: 1280px) {
    height: 85px;
    padding-left: 120px;
    padding-right: 120px;
  }
`;

const CartCount = styled.span`
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background-color: #d87d4a;
  font-size: 10px;
  font-family: "Manrope";
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 25px;
  right: 17px;

  @media (min-width: 770px) {
    right: 42px;
  }

  @media (min-width: 1280px) {
    right: 138px;
  }
`;

const DesktopMenu = styled.div`
  display: none;
  @media (min-width: 1280px) {
    display: flex;
    margin-left: 170px;
  }
`;

const BurgerContainer = styled.div`
  @media (min-width: 770px) {
    margin-left: 25px;
  }

  @media (min-width: 1280px) {
    display: none;
  }
`;

const LogoContainer = styled.div`
  @media (min-width: 770px) {
    margin-left: 50px;
  }

  @media (min-width: 1280px) {
    margin-left: 25px;
  }
`;

const Backdrop = styled.div`
  width: 100vw;
  height: calc(100vh - 96px);
  position: fixed;
  z-index: 5;
  left: 0;
  top: 90px;
  background-color: var(--white);
`;

const Menu = styled.div`
  width: 100%;
  background-color: var(--dark);
  @media (min-width: 770px) {
    padding: 48px 24px;
  }
`;

const CartButton = styled.div`
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media (min-width: 770px) {
    margin-right: 25px;
    margin-left: auto;
  }

  @media (min-width: 1280px) {
    /* margin-right: 25px;
    margin-left: auto; */
  }
`;
