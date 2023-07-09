import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <Title>HEADPHONES</Title>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 100%;
  height: 102px;
  background-color: var(--black);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--light-black);

  @media (min-width: 770px) {
    padding-top: 40px;
    height: 200px;
  }
`;

const Title = styled.div`
  margin-top: 32px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--white);

  @media (min-width: 770px) {
    font-size: 40px;
  }
`;
