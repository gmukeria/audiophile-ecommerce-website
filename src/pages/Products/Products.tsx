import styled from "styled-components";
import Header from "./Header";
import Item from "./Item";
import { Categories, ProductDesc } from "../../components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { productData } from "../../data/products";
import { productType } from "../../types/productType";

const Products = () => {
  const [data, setData] = useState<productType[]>([]);
  const { category } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const filteredProducts = category
          ? productData.filter((product) => product.category === category)
          : [];

        setData(filteredProducts as productType[]);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [category]);

  return (
    <Wrapper>
      {data.length > 0 && (
        <>
          <Header title={data[0].category} />
          <ItemsContainer>
            {data.map((productData) => (
              <Item key={productData.id} productData={productData} />
            ))}
          </ItemsContainer>
          <Categories />
          <ProductDesc />
        </>
      )}
    </Wrapper>
  );
};

export default Products;

const Wrapper = styled.div`
  padding-bottom: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1280px) {
    padding-left: 140px;
    & > :nth-child(even) {
      flex-direction: row-reverse;
    }
  }
`;
