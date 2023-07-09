import styled from "styled-components";

type Props = {
  click?: () => void;
  title?: string;
  type: "button" | "submit" | "reset" | undefined;
  name: "one" | "two" | "three" | "four";
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

type SetupData = {
  color: string;
  hoverColor: string;
  borderColor: string;
  bgColor: string;
  hoverBgColor: string;
};

const Button = ({ click, title, type, name, children, style }: Props) => {
  const data = getData(name);
  return (
    <Wrapper onClick={click} type={type} {...data} style={style}>
      {children}
      {title}
    </Wrapper>
  );
};

export default Button;

const Wrapper = styled.button<SetupData>`
  width: 160px;
  height: 48px;
  border: 1px solid ${(props) => props.borderColor};
  background-color: ${(props) => props.bgColor};
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${(props) => props.color};
  cursor: pointer;

  &:hover {
    color: ${(props) => props.hoverColor};
    background-color: ${(props) => props.hoverBgColor};
  }
`;

const getData = (name: "one" | "two" | "three" | "four"): SetupData => {
  let returnData: SetupData = {
    color: "transparent",
    hoverColor: "transparent",
    borderColor: "var(--black)",
    bgColor: "transparent",
    hoverBgColor: "transparent",
  };

  if (name === null) {
    return returnData;
  }

  switch (name) {
    case "one":
      returnData = {
        color: "var(--white)",
        hoverColor: "var(--white)",
        borderColor: "var(--orange)",
        bgColor: "var(--orange)",
        hoverBgColor: "var(--light-orange)",
      };
      break;

    case "two":
      returnData = {
        color: "var(--light-black)",
        hoverColor: "var(--white)",
        borderColor: "var(--light-black)",
        bgColor: "transparent",
        hoverBgColor: "var(--light-black)",
      };
      break;

    case "three":
      returnData = {
        color: "var(--white)",
        hoverColor: "var(--light-black)",
        borderColor: "var(--light-black)",
        bgColor: "var(--light-black)",
        hoverBgColor: "var(--white)",
      };
      break;

    case "four":
      returnData = {
        color: "var(--black)",
        hoverColor: "var(--orange)",
        borderColor: "transparent",
        bgColor: "transparent",
        hoverBgColor: "transparent",
      };
      break;
  }

  return returnData;
};
