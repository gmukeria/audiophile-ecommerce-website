import styled from "styled-components";
import {
  imageSpeakerZX9,
  imageSpeakerZX9Table,
  imageSpeakerZX9Desktop,
} from "../../assets";
import Button from "../sharerd/buttons";
import { Link } from "react-router-dom";

const BannerOne = () => {
  return (
    <Wraper>
      <Image />
      <SegmentTwo>
        <Title>ZX9 SPEAKER</Title>
        <Desc>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </Desc>

        <ButtonContainer>
          <Link to="product/details/6">
            <Button title="See Product" type="button" name="three" />
          </Link>
        </ButtonContainer>
      </SegmentTwo>
    </Wraper>
  );
};

export default BannerOne;

const Wraper = styled.div`
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 600px;
  width: 327px;
  border-radius: 8px;
  background-color: var(--orange);

  @media (min-width: 770px) {
    width: 689px;
    height: 720px;
  }

  @media (min-width: 1280px) {
    width: 1120px;
    height: 560px;
    flex-direction: row;
    justify-content: space-around;
  }
`;

const Image = styled.div`
  margin-top: 55px;
  width: 172.25px;
  height: 207px;

  background-image: url(${imageSpeakerZX9});
  background-size: cover;
  background-position: center;

  @media (min-width: 770px) {
    margin-top: 70px;

    width: 197.21px;
    height: 237px;
    background-image: url(${imageSpeakerZX9Table});
  }

  @media (min-width: 1280px) {
    width: 390px;
    height: 485px;
    background-image: url(${imageSpeakerZX9Desktop});
    margin-bottom: 0;
    margin-top: auto;
  }
`;

const SegmentTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 770px) {
    margin-top: 30px;
  }

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;

const Title = styled.h2`
  margin-top: 30px;
  width: 200px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 40px;
  text-align: center;
  letter-spacing: 1.28571px;
  text-transform: uppercase;
  color: var(--white);

  @media (min-width: 770px) {
    font-size: 40px;
  }

  @media (min-width: 1280px) {
    text-align: left;
  }
`;

const Desc = styled.h5`
  margin-top: 25px;
  width: 260px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 25px;
  text-align: center;
  color: var(--white);
  mix-blend-mode: normal;
  opacity: 0.75;

  @media (min-width: 770px) {
    width: 280px;
  }

  @media (min-width: 1280px) {
    text-align: left;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 25px;

  @media (min-width: 770px) {
    margin-top: 35px;
  }
`;
