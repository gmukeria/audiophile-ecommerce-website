import styled from "styled-components";
import Button from "./buttons";
import { MarkTwoHeadphones, MarkOneHeadphones } from "../../assets";
type ImageProps = {
  img?: string;
};

const SimilarProducts = () => {
  return (
    <Wrapper>
      <Title>you may also like</Title>

      <Item>
        <Image img={MarkTwoHeadphones} />
        <Name>XX99 MARK I</Name>
        <Button title="See Product" type="button" name={"one"} />
      </Item>

      <Item>
        <Image img={MarkOneHeadphones} />
        <Name>XX99 MARK I</Name>
        <Button title="See Product" type="button" name={"one"} />
      </Item>

      <Item>
        <Image img={MarkTwoHeadphones} />
        <Name>XX99 MARK I</Name>
        <Button title="See Product" type="button" name={"one"} />
      </Item>
    </Wrapper>
  );
};

export default SimilarProducts;

const Item = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.div<ImageProps>`
  width: 327px;
  height: 120px;
  border-radius: 8px;
  background-image: ${(props) => (props.img ? `url(${props.img})` : "none")};
  background-size: cover;
  background-position: center;
`;

const Name = styled.h2`
  margin-top: 32px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  letter-spacing: 1.71429px;
  text-transform: uppercase;
  color: var(--black);

  margin-bottom: 32px;
`;

const Wrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  letter-spacing: 0.857143px;
  text-transform: uppercase;
  color: var(--black);
`;
