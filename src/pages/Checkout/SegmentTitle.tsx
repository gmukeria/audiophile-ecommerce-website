import styled from "styled-components";

interface SegmentTitleProps {
  title: string;
}

const SegmentTitle = ({ title }: SegmentTitleProps): JSX.Element => {
  return <Title>{title}</Title>;
};

export default SegmentTitle;

const Title = styled.h3`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 25px;
  /* identical to box height, or 192% */

  letter-spacing: 0.928571px;
  text-transform: uppercase;
  color: var(--orange);
`;
