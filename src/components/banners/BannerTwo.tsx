import styled from "styled-components";
import {
  imageSpeakerZX7,
  imageSpeakerZX7Table,
  imageSpeakerZX7Desktop,
} from "../../assets";
import Button from "../sharerd/buttons";
import { Link } from "react-router-dom";

const BannerTwo = () => {
  return (
    <Wrapper>
      <Title>ZX7 SPEAKER</Title>
      <ButtonContainer>
        <Link to="product/details/5">
          <Button title="See Product" type="button" name="two" />
        </Link>
      </ButtonContainer>
    </Wrapper>
  );
};

export default BannerTwo;

const Wrapper = styled.div`
  margin-top: 20px;
  width: 327px;
  height: 327px;
  border-radius: 8px;
  background-image: url(${imageSpeakerZX7});
  background-size: cover;
  background-position: center;

  @media (min-width: 770px) {
    margin-top: 30px;
    padding-left: 40px;
    width: 689px;
    height: 320px;
    background-image: url(${imageSpeakerZX7Table});
  }

  @media (min-width: 1280px) {
    width: 1120px;
    height: 320px;
    background-image: url(${imageSpeakerZX7Desktop});
  }
`;

const Title = styled.h2`
  margin-top: 100px;
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
