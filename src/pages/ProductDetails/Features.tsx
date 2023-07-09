import styled from "styled-components";

type Props = {
  data: { text: string }[];
};

const Features: React.FC<Props> = ({ data }) => {
  return (
    <Wrapper>
      <Title>features</Title>
      <Desc>
        {data.map((feature, index) => (
          <DescSection key={index}>{feature.text}</DescSection>
        ))}
      </Desc>
    </Wrapper>
  );
};

export default Features;

const Wrapper = styled.div`
  margin-top: 50px;
  width: 327px;
  height: 475px;

  @media (min-width: 770px) {
    margin-top: 80px;
    width: 690px;
  }

  @media (min-width: 1280px) {
    margin-top: 0px;
    width: 635px;
  }
`;

const Title = styled.h2`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.857143px;
  text-transform: uppercase;
  color: var(--black);
`;

const Desc = styled.div`
  @media (min-width: 770px) {
    width: 690px;
  }

  @media (min-width: 1280px) {
    width: 630px;
  }
`;

const DescSection = styled.h3`
  margin-top: 20px;

  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  opacity: 0.5;
  color: var(--black);
`;
