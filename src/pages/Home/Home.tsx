import styled from "styled-components";

import {
  Slider,
  Categories,
  BannerOne,
  BannerTwo,
  BannerTree,
  ProductDesc,
} from "../../components";

const Home = () => {
  return (
    <Wrapper>
      <Slider />
      <Categories />
      <BannerOne />
      <BannerTwo />
      <BannerTree />
      <ProductDesc />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 90px;
`;
