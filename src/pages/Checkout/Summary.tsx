import styled from "styled-components";
import { CartContext } from "../../App";
import { useContext } from "react";

const Summary: React.FC = (): JSX.Element => {
  const { cartData } = useContext(CartContext);

  let total = 0;

  cartData.forEach((item: any) => {
    total += item.quantity * item.price;
  });

  return (
    <Wrapper>
      {cartData.map((item: any) => (
        <Item key={item.name}>
          <SegmentOne>
            <Image imageUrl={item.image} />
            <MidleSegment>
              <Name>{item.name}</Name>
              <Price>{item.price}</Price>
            </MidleSegment>
          </SegmentOne>
          {item.quantity}x
        </Item>
      ))}

      <HeadLien>
        <Total>Total</Total>
        <TotalPrice>$ {total}</TotalPrice>
      </HeadLien>

      <HeadLien>
        <Total>SHIPPING</Total>
        <TotalPrice>$ 50</TotalPrice>
      </HeadLien>

      <HeadLien>
        <Total>VAT (INCLUDED)</Total>
        <TotalPrice>$ 1079</TotalPrice>
      </HeadLien>

      <Button type="submit">checkout</Button>
    </Wrapper>
  );
};

export default Summary;

const Wrapper = styled.div`
  @media (min-width: 770px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const HeadLien = styled.div`
  margin-top: 15px;
  width: 271px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (min-width: 770px) {
    width: 623px;
  }

  @media (min-width: 1280px) {
    width: 284px;
  }
`;

const Item = styled.div`
  margin-top: 24px;
  width: 271px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 770px) {
    width: 623px;
  }

  @media (min-width: 1280px) {
    width: 284px;
  }
`;

const SegmentOne = styled.div`
  display: flex;
  flex-direction: row;
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

const Name = styled.h3``;

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
  margin-bottom: 30px;
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

  @media (min-width: 770px) {
    width: 623px;
  }

  @media (min-width: 1280px) {
    width: 284px;
  }
`;
