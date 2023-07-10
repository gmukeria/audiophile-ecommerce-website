import { IconOrderConfirmation } from "../../assets/svg";
import { Link } from "react-router-dom";
import styled from "styled-components";

type ModalProps = {
  onClose: () => void;
};
const OrderDone: React.FC<ModalProps> = ({ onClose }): JSX.Element => {
  return (
    <Wrapper>
      <IconOrderConfirmation />
      <Title>THANK YOU FOR YOUR ORDER</Title>
      <Desc>You will receive an email confirmation shortly.</Desc>
      <Link to="/" onClick={onClose}>
        <Button>BACK TO HOME</Button>
      </Link>
    </Wrapper>
  );
};

export default OrderDone;

const Wrapper = styled.div`
  padding: 32px;
  width: 327px;
  height: 370px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  background-color: var(--white);
`;

const Title = styled.div`
  margin-top: 25px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.857143px;
  text-transform: uppercase;
  color: var(--black);
`;

const Desc = styled.div`
  margin-top: 16px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  color: var(--black);
  opacity: 0.5;
`;

const Button = styled.button`
  margin-top: 23px;
  width: 263px;
  height: 48px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  background-color: var(--orange);
  color: var(--white);
  border: none;
  cursor: pointer;
`;
