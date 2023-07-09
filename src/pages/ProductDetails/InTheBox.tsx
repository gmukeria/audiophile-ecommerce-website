import styled from "styled-components";

type Props = {
  data: {
    quantity: number;
    item: string;
  }[];
};

const InTheBox: React.FC<Props> = ({ data }) => {
  return (
    <Wrapper>
      <Title>in the box</Title>
      <Container>
        {data.map((item) => (
          <Item key={item.item}>
            <Count>{item.quantity}x</Count>
            <Name>{item.item}</Name>
          </Item>
        ))}
      </Container>
    </Wrapper>
  );
};

export default InTheBox;

const Wrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 770px) {
    margin-top: 0px;
    flex-direction: row;
  }

  @media (min-width: 1280px) {
    flex-direction: column;
  }
`;

const Title = styled.h2`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.857143px;
  text-transform: uppercase;
  color: var(--black);
`;

const Container = styled.div`
  margin-top: 30px;

  @media (min-width: 770px) {
    margin-top: 0px;
    display: flex;
    flex-direction: column;
    margin-left: 200px;
  }

  @media (min-width: 1280px) {
    margin-top: 20px;
    margin-left: 0px;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
`;

const Count = styled.div`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  color: var(--orange);
`;

const Name = styled.div`
  margin-left: 24px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  opacity: 0.5;
  color: var(--black);
`;
