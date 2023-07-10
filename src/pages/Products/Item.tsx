import styled from "styled-components";
import Button from "../../components/sharerd/buttons/Button";
import { productType } from "../../types/productType";
import { Link } from "react-router-dom";

interface ItemProps {
  productData: productType;
}

const Item: React.FC<ItemProps> = ({ productData }) => {
  return (
    <Wrapper>
      <SectionOne>
        <Image imageUrl={productData.categoryImage} />
      </SectionOne>

      <SectionTwo>
        <Title>{productData.name}</Title>
        <Desc>{productData.description}</Desc>
        <Link to={`/product/details/${productData.id.toString()}`}>
          <Button title="See Product" type="button" name="one" />
        </Link>
      </SectionTwo>
    </Wrapper>
  );
};

export default Item;

const Wrapper = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1280px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Image = styled.div<{ imageUrl: any }>`
  width: 327px;
  height: 352px;
  border-radius: 8px;
  background-image: url(${(props) => props.imageUrl.mobile});
  background-size: cover;
  background-position: center;

  @media (min-width: 770px) {
    width: 690px;
    background-image: url(${(props) => props.imageUrl.tablet});
  }

  @media (min-width: 1280px) {
    width: 540px;
    height: 560px;
    background-image: url(${(props) => props.imageUrl.desktop});
  }
`;

const SectionTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1280px) {
    width: 540px;
    align-items: flex-start;
  }
`;

const SectionOne = styled.div`
  @media (min-width: 1280px) {
    margin-right: 120px;
  }
`;

const Title = styled.h2`
  margin-top: 32px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--light-black);

  @media (min-width: 770px) {
    width: 300px;
    font-size: 40px;
  }

  @media (min-width: 1280px) {
    text-align: left;
  }
`;

const Desc = styled.h2`
  width: 327px;
  height: 125px;
  margin-top: 24px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  opacity: 50%;
  text-align: center;
  color: var(--light-black);
  margin-bottom: 25px;

  @media (min-width: 770px) {
    width: 530px;
    margin-bottom: 0px;
  }

  @media (min-width: 1280px) {
    text-align: left;
    width: 400px;
    font-size: 17px;
    margin-bottom: 40px;
  }
`;
