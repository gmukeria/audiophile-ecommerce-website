import styled from "styled-components";

const Burger: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <Svg onClick={onClick}>
      <path
        d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z"
        fill="#FFF"
        fillRule="evenodd"
      />
    </Svg>
  );
};

export default Burger;

const attrs = styled.svg.attrs({
  xmlns: "http://www.w3.org/2000/svg",
})``;

const Svg = styled(attrs)`
  width: 20px;
  height: 20px;
`;
