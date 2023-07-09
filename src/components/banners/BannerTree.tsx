import styled from "styled-components";
import {
  imageEarphoneYX1,
  imageEarphoneYX1Tablet,
  imageEarphoneYX1Desktop,
} from "../../assets";
import Button from "../sharerd/buttons";
import { Link } from "@tanstack/router";

const BannerTree = () => {
  return (
    <Wrapper>
      <PartOne />

      <PartTwo>
        <Title>YX1 EARPHONES</Title>
        <ButtonContainer>
          <Link to="product/details/1">
            <Button title="See Product" type="button" name="two" />
          </Link>
        </ButtonContainer>
      </PartTwo>
    </Wrapper>
  );
};

export default BannerTree;

const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  @media (min-width: 770px) {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
  }
`;

const PartOne = styled.div`
  width: 327px;
  height: 200px;
  border-radius: 8px;
  background-image: url(${imageEarphoneYX1});
  background-size: cover;
  background-position: center;

  @media (min-width: 770px) {
    width: 338px;
    height: 320px;
    background-image: url(${imageEarphoneYX1Tablet});
  }

  @media (min-width: 1280px) {
    width: 550px;
    background-image: url(${imageEarphoneYX1Desktop});
  }
`;
const PartTwo = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 327px;
  height: 200px;
  border-radius: 8px;
  background-color: #f1f1f1;

  @media (min-width: 770px) {
    margin-left: 20px;
    width: 338px;
    height: 320px;

    padding-top: 50px;
    padding-left: 20px;
  }

  @media (min-width: 1280px) {
    width: 550px;

    padding-left: 60px;
  }
`;

const Title = styled.h2`
  margin-top: 41px;
  margin-left: 25px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--black);
`;

const ButtonContainer = styled.div`
  margin-top: 35px;
  margin-left: 25px;
`;
