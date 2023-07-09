import React, { ComponentProps } from "react";
import styled from "styled-components";

type Props = ComponentProps<"input"> & {
  width?: string;
  error?: any;
  label: string;
};

const StringInput = (
  { width, error, label, ...otherProps }: Props,
  ref: any
) => {
  return (
    <Wrapper>
      <TopSegment>
        <Label error={error}>{label}</Label>
        {/* {error && <Error>{error.message}</Error>} */}
      </TopSegment>
      <StyledInput ref={ref} {...otherProps} width={width} error={error} />
    </Wrapper>
  );
};

export default React.forwardRef(StringInput);

const Wrapper = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const TopSegment = styled.div`
  display: flex;
  flex-direction: row;
  align-content: space-between;
`;

// const Error = styled.label`
//   margin-right: 1px;
//   font-family: "Manrope";
//   font-style: normal;
//   font-weight: 500;
//   font-size: 12px;
//   line-height: 16px;
//   text-align: right;
//   letter-spacing: -0.214286px;

//   color: #cd2c2c;
// `;

const Label = styled.label<{ error?: any }>`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.214286px;
  color: ${(props) => (props.error ? "#CD2C2C" : "var(--black)")};
`;

const StyledInput = styled.input<{ error?: any; width?: string }>`
  margin-top: 5px;
  width: 280px;
  height: 56px;

  border: solid ${(props) => (props.error ? "2px #CD2C2C" : "1px #cfcfcf")};
  border-radius: 8px;
  padding-left: 24px;
  transition: border-color 0.3s ease-in-out;
  ::placeholder {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: -0.25px;
    color: #000000;
    opacity: 0.4;
  }

  &:focus {
    outline: none !important;
    border: solid ${(props) => (props.error ? "2px #CD2C2C" : "1px #cfcfcf")};
    caret-color: var(--orange);
  }

  @media (min-width: 770px) {
    width: ${(props) => (props.width ? props.width : "309px")};
    margin-right: 20px;
  }
`;
