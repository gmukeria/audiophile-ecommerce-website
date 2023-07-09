import styled from "styled-components";

const IconArrowRight = () => {
  return (
    <Svg>
      <path
        d="M1.322 1l5 5-5 5"
        stroke="#D87D4A"
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
      />
    </Svg>
  );
};

export default IconArrowRight;

const attrs = styled.svg.attrs({
  xmlns: "http://www.w3.org/2000/svg",
})``;

const Svg = styled(attrs)`
  width: 8px;
  height: 12px;
`;
