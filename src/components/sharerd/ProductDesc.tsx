import styled from "styled-components";
import {
  ImageBestGear,
  ImageBestGearDesktop,
  ImageBestGearTablet,
} from "../../assets";

const ProductDesc = () => {
  return (
    <Wrapper>
      <PartOne />
      <PartTwo>
        <Title>
          Bringing you the <Orange>best</Orange> audio gear
        </Title>
        <Description>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </Description>
      </PartTwo>
    </Wrapper>
  );
};

export default ProductDesc;

const Wrapper = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;

  @media (min-width: 770px) {
    width: 689px;
  }

  @media (min-width: 1280px) {
    width: 1120px;
    align-items: center;
    flex-direction: row-reverse;
  }
`;

const PartOne = styled.div`
  width: 327px;
  height: 327px;
  border-radius: 8px;
  background-image: url(${ImageBestGear});
  background-size: cover;
  background-position: center;

  @media (min-width: 770px) {
    width: 689px;
    background-image: url(${ImageBestGearTablet});
  }

  @media (min-width: 1280px) {
    width: 540px;
    height: 588px;

    background-image: url(${ImageBestGearDesktop});
  }
`;

const PartTwo = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 327px;

  @media (min-width: 770px) {
    width: 670px;
  }

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;

const Title = styled.div`
  width: 300px;

  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--black);

  @media (min-width: 770px) {
    width: 570px;
    font-size: 40px;
  }

  @media (min-width: 1280px) {
    text-align: left;
  }
`;

const Orange = styled.span`
  color: var(--orange);
`;

const Description = styled.p`
  margin-top: 45px;
  width: 327px;
  text-align: center;
  opacity: 50%;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  color: var(--black);

  @media (min-width: 770px) {
    width: 570px;
  }

  @media (min-width: 1280px) {
    text-align: left;
  }
`;
