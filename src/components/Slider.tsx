import styled from "styled-components";
import { imageHeader, imageHeaderDesktop, imageHeaderTablet } from "../assets";

import Button from "./sharerd/buttons";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <Wrapper>
      <Title>NEW PRODUCT</Title>
      <Name>XX99 Mark II Headphones</Name>
      <Desc>
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </Desc>

      <ButtonContainer>
        <Link to="/product/details/4">
          <Button title="See Product" type="button" name="one" />
        </Link>
      </ButtonContainer>
    </Wrapper>
  );
};

export default Slider;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 530px;

  background-image: url(${imageHeader});
  background-position: center bottom;
  background-size: cover;
  margin-bottom: 80px;

  @media (min-width: 770px) {
    height: 720px;
    background-image: url(${imageHeaderTablet});
  }

  @media (min-width: 1280px) {
    padding-left: 120px;
    height: 670px;
    align-items: flex-start;
    background-image: url(${imageHeaderDesktop});
  }
`;

const Title = styled.h3`
  opacity: 40%;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 10px;
  text-transform: uppercase;
  color: var(--white);
`;

const Name = styled.h1`
  margin-top: 16px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 40px;
  text-align: center;
  letter-spacing: 1.28571px;
  text-transform: uppercase;
  color: var(--white);
  text-align: center;

  @media (min-width: 1280px) {
    text-align: left;
    width: 400px;
    font-size: 55px;
    line-height: 55px;
    margin-top: 20px;
  }
`;

const Desc = styled.h4`
  opacity: 60%;
  padding: 5px 15px;
  margin-top: 24px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  color: var(--white);

  @media (min-width: 770px) {
    width: 450px;
  }

  @media (min-width: 1280px) {
    text-align: left;
    width: 400px;
    padding: 0;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 28px;
`;
