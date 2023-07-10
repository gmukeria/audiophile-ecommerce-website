import styled from "styled-components";

import { Link } from "react-router-dom";

import { IconArroeRight } from "../../assets/svg";
import {
  CategoryHeadphones,
  CategoryEarphones,
  CategorySpeakers,
} from "../../assets/shared";
import Button from "./buttons";

type ModalProps = {
  onClosed?: () => void;
};

const Categories: React.FC<ModalProps> = ({ onClosed = () => {} }) => {
  return (
    <Wraper>
      <Item>
        <Image src={CategoryHeadphones} />
        <Title>headphones </Title>

        <Link to="/products/headphones" onClick={onClosed}>
          <Button type="button" name="four" style={{ opacity: 0.5 }}>
            shop <IconArroeRight />
          </Button>
        </Link>
      </Item>

      <Item>
        <Image src={CategorySpeakers} />
        <Title>speakers</Title>
        <Link to="/products/speakers" onClick={onClosed}>
          <Button type="button" name="four" style={{ opacity: 0.5 }}>
            shop <IconArroeRight />
          </Button>
        </Link>
      </Item>

      <Item>
        <Image src={CategoryEarphones} />
        <Title>earphones</Title>
        <Link to="/products/earphones" onClick={onClosed}>
          <Button type="button" name="four" style={{ opacity: 0.5 }}>
            shop <IconArroeRight />
          </Button>
        </Link>
      </Item>
    </Wraper>
  );
};

export default Categories;

const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (min-width: 770px) {
    flex-direction: row;
    margin-top: 80px;
  }
`;

const Item = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 327px;
  height: 165px;
  margin-top: 70px;
  border-radius: 8px;
  background-color: var(--lemonChiffon);

  @media (min-width: 770px) {
    width: 223px;
    margin-left: 15px;
  }

  @media (min-width: 1280px) {
    width: 349px;
    margin-right: 25px;
    height: 200px;
  }
`;

const Image = styled.img`
  width: 145px;
  height: 130px;

  position: absolute;
  top: -30%;

  @media (min-width: 1280px) {
    width: 190px;
    height: 170px;
  }
`;

const Title = styled.h4`
  margin-top: 29px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 1.07143px;
  text-transform: uppercase;
  color: var(--blak);

  @media (min-width: 1280px) {
    margin-top: 80px;
    font-size: 18px;
  }
`;

// const Label = styled.label`
//   display: flex;
//   flex-direction: row;
//   align-items: center;

//   margin-top: 18px;
//   opacity: 50%;
//   font-family: "Manrope";
//   font-style: normal;
//   font-weight: 700;
//   font-size: 13px;
//   line-height: 18px;

//   letter-spacing: 1px;
//   text-transform: uppercase;
//   color: var(--black);

//   &:hover {
//     color: var(--orange);
//   }
// `;
