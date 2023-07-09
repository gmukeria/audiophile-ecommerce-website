import { useContext, useEffect, useState } from "react";
import { NumberInput } from "../../components/sharerd/inputs";
import { Categories, ProductDesc } from "../../components";
import Button from "../../components/sharerd/buttons";
import { productType } from "../../types/productType";
import { Link, useParams } from "@tanstack/router";
import { productData } from "../../data/products";
import styled from "styled-components";
import Features from "./Features";
import InTheBox from "./InTheBox";
import { CartContext } from "../../App";

const Details = () => {
  const { productId } = useParams();
  const [data, setData] = useState<productType | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    const getData = async () => {
      try {
        const filteredProducts = productId
          ? productData.filter(
              (product) => product.id === parseInt(productId, 10)
            )
          : [];

        setData(filteredProducts[0] as productType);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  const { cartHandler } = useContext(CartContext);

  const AddProductHandler = () => {
    cartHandler({
      productId: data ? data?.id : 1,
      image: data ? data?.image.mobile : "",
      name: data ? data?.name : "",
      quantity: quantity,
      price: data ? data?.price : 0,
    });
  };

  return (
    <Wrapper>
      <Header>
        <Link to={`/products/${data ? data?.category : "/"}`}>
          <SubButton>Go Back</SubButton>
        </Link>
      </Header>
      {data && (
        <>
          <MainContainer>
            <Image imageUrl={data.image} />
            <SegmentTwo>
              <Title>{data.name}</Title>
              <Desc>{data.description}</Desc>
              <Price>$ {data.price}</Price>

              <Inputontainer>
                <NumberInput quantity={quantity} setQuantity={setQuantity} />

                <ButtonContainer>
                  <Button
                    click={AddProductHandler}
                    title="add to cart"
                    type="button"
                    name={"one"}
                  />
                </ButtonContainer>
              </Inputontainer>
            </SegmentTwo>
          </MainContainer>

          <FeatureContainer>
            <Features data={data.features} />
            <InTheBox data={data.includes} />
          </FeatureContainer>
        </>
      )}

      <Categories />
      <ProductDesc />
    </Wrapper>
  );
};

export default Details;

const Wrapper = styled.div`
  /* padding-left: 8%; */
  padding-bottom: 90px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  width: 100%;
  margin-top: 15px;
  margin-bottom: 15px;
  padding-left: 15%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 770px) {
    flex-direction: row;
    justify-content: flex-start;
  }

  @media (min-width: 1280px) {
  }
`;

const SegmentTwo = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 770px) {
    margin-top: 30px;
    margin-left: 60px;
    width: 340px;
  }

  @media (min-width: 1280px) {
  }
`;

const Inputontainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ButtonContainer = styled.div`
  margin-left: 20px;
`;

const FeatureContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1280px) {
    margin-top: 80px;
    flex-direction: row;
    width: 900px;
    justify-content: space-between;
  }
`;

const SubButton = styled.button`
  background-color: transparent;
  border-color: transparent;
  text-decoration: none;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  color: var(--black);
  opacity: 0.5;

  &:hover {
    color: var(--orange);
  }
`;

const Image = styled.div<{ imageUrl: any }>`
  width: 327px;
  height: 327px;
  border-radius: 8px;
  background-image: url(${(props) => props.imageUrl.mobile});
  background-size: cover;
  background-position: center;

  @media (min-width: 770px) {
    width: 281px;
    height: 480px;
    background-image: url(${(props) => props.imageUrl.tablet});
  }

  @media (min-width: 1280px) {
    width: 540px;
    height: 560px;
    background-image: url(${(props) => props.imageUrl.desktop});
  }
`;

const Title = styled.h2`
  margin-top: 32px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--light-black);
  width: 300px;
  text-align: left;
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
  color: var(--light-black);
  text-align: left;

  @media (min-width: 1280px) {
    width: 445px;
  }
`;

const Price = styled.span`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 1.28571px;
  text-transform: uppercase;
  color: var(--black);
  text-align: left;
`;

{
  /* <Title>{data.name}</Title>
<Desc>{data.description}</Desc>
<Price>$ {data.price}</Price>

    <NumberInput quantity={quantity} setQuantity={setQuantity} />

  <Button
    click={AddProductHandler}
    title="add to cart"
    type="button"
    name={"one"}
  />

<Features data={data.features} />
<InTheBox data={data.includes} /> */
}
