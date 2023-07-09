import styled from "styled-components";

type Props = {
  productId: number;
  quantity: number;
  quantityHandler: (value: number, quantity: number) => void;
};

const NumberInput = ({ productId, quantity, quantityHandler }: Props) => {
  const handleDecrease = () => {
    if (quantity > 0) {
      quantityHandler(productId, quantity - 1);
    }
  };

  const handleIncrease = () => {
    quantityHandler(productId, quantity + 1);
  };

  const handleChange = (e: { target: { value: string } }) => {
    const value = parseInt(e.target.value);
    if (value > 0 && value < 101) {
      quantityHandler(productId, value);
    }
  };

  return (
    <Wrapper>
      <Button onClick={handleDecrease}>-</Button>
      <Input
        id="number-input"
        type="number"
        min="0"
        max="100"
        value={quantity}
        onChange={handleChange}
      />
      <Button onClick={handleIncrease}>+</Button>
    </Wrapper>
  );
};

export default NumberInput;

const Wrapper = styled.div`
  width: 90px;
  height: 32px;
  display: flex;
  align-items: center;
  background-color: #f1f1f1;
`;

const Button = styled.button`
  width: 23px;
  height: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  font-size: 18px;
  color: var(--black);
  cursor: pointer;
`;

const Input = styled.input`
  width: 50px;
  height: 24px;
  padding: 0 8px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  text-align: center;
  background-color: #f1f1f1;

  &:focus {
    border: none;
  }
`;
