import styled from "styled-components";

type Props = {
  quantity: number;
  setQuantity: (value: number) => void;
};

const NumberInput = ({ quantity, setQuantity }: Props) => {
  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleChange = (e: { target: { value: string } }) => {
    const value = parseInt(e.target.value);
    if (value > 0 && value < 101) {
      setQuantity(value);
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
  width: 120px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-around;
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

  &&:hover {
    color: var(--orange);
  }
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

  &&:hover {
    color: var(--orange);
  }
`;
