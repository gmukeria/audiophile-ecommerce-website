import { Link } from "@tanstack/router";
import styled from "styled-components";
import { CartContext } from "../../App";
import { useContext } from "react";
import NumberInput from "./NumberInput";

type ModalProps = {
  onClose: () => void;
};

const Cart: React.FC<ModalProps> = ({ onClose }) => {
  const { cartData, removeAll, quantityHandler } = useContext(CartContext);

  let total = 0;

  cartData.forEach((item: any) => {
    total += item.quantity * item.price;
  });

  return (
    <Wrapper>
      <HeadLien>
        <Title>Cart ({cartData.length})</Title>
        <Remove onClick={removeAll}>Remove All</Remove>
      </HeadLien>

      {cartData.map((item: any) => (
        <Item key={item.name}>
          <Image imageUrl={item.image} />
          <MidleSegment>
            <Name>{item.name}</Name>
            <Price>{item.price}</Price>
          </MidleSegment>
          <NumberInput
            productId={item.productId}
            quantity={item.quantity}
            quantityHandler={quantityHandler}
          />
        </Item>
      ))}

      <HeadLien>
        <Total>Total</Total>
        <TotalPrice>$ {total}</TotalPrice>
      </HeadLien>
      <Link to="/checkout" onClick={onClose}>
        <Button>checkout</Button>
      </Link>
    </Wrapper>
  );
};

export default Cart;

const Wrapper = styled.div`
  margin-top: 20px;
  width: 327px;
  height: 488px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  border-color: #000000;
  background-color: var(--white);
`;

const HeadLien = styled.div`
  margin-top: 32px;
  width: 271px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.h3`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 1.28571px;
  text-transform: uppercase;
  color: var(--black);
`;

const Remove = styled.h3`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  text-decoration-line: underline;
  opacity: 0.5;
  color: var(--black);
  cursor: pointer;
`;

const Item = styled.div`
  margin-top: 24px;
  width: 271px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Image = styled.div<{ imageUrl: string }>`
  width: 80px;
  height: 60px;
  border-radius: 8px;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
`;

const MidleSegment = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Name = styled.h3`
  font-weight: 700;
  font-size: 14px;
`;

const Price = styled.h4`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 25px;
  opacity: 0.5;
  color: var(--black);
`;

const Total = styled.h4`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  text-transform: uppercase;
  opacity: 0.5;
  color: var(--black);
`;

const TotalPrice = styled.h3``;

const Button = styled.button`
  margin-top: 30px;
  width: 271px;
  height: 48px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: none;

  background-color: var(--orange);
  color: var(--white);

  cursor: pointer;
`;
