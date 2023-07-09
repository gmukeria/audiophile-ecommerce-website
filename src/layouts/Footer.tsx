import styled from "styled-components";
import { Logo, Facebook, Instagram, Twitter } from "../assets/svg";
import Navigation from "./Navigation";

const Footer = () => {
  return (
    <Wraper>
      <TopSegment>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Menu>
          <Navigation />
        </Menu>
      </TopSegment>

      <MidleSegment>
        <DescriptionText>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - were open 7 days a week.
        </DescriptionText>
      </MidleSegment>

      <BottomSegment>
        <CopyText>Copyright 2021. All Rights Reserved</CopyText>

        <Social>
          <SocialItem href="#">
            <Facebook />
          </SocialItem>
          <SocialItem href="#">
            <Twitter />
          </SocialItem>
          <SocialItem href="#">
            <Instagram />
          </SocialItem>
        </Social>
      </BottomSegment>
    </Wraper>
  );
};

export default Footer;

const Wraper = styled.div`
  width: 100%;
  height: 654px;
  bottom: 0;

  background-color: var(--black);

  @media (min-width: 770px) {
    padding-left: 40px;
    height: 450px;
  }

  @media (min-width: 1280px) {
    height: 365px;
  }
`;

const LogoWrapper = styled.div`
  margin-top: 52px;
  cursor: pointer;
`;

const TopSegment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 770px) {
    align-items: flex-start;
  }

  @media (min-width: 1280px) {
    padding-left: 120px;
    flex-direction: row;
  }
`;

const Menu = styled.div`
  color: var(--white);
  margin-top: 50px;

  @media (min-width: 1280px) {
    margin-right: 120px;
    margin-left: auto;
  }
`;

const MidleSegment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
  @media (min-width: 770px) {
    align-items: self-start;
  }

  @media (min-width: 1280px) {
    padding-left: 120px;
  }
`;

const DescriptionText = styled.div`
  opacity: 50%;
  width: 327px;
  height: 150px;
  text-align: center;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;
  color: var(--white);

  @media (min-width: 770px) {
    width: 690px;
    text-align: left;
    font-size: 16px;
  }

  @media (min-width: 1280px) {
    width: 520px;
  }
`;

const BottomSegment = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 770px) {
    flex-direction: row;
    margin-top: 30px;
  }

  @media (min-width: 1280px) {
    margin-top: 20px;
    padding-left: 120px;
    padding-right: 120px;
  }
`;

const CopyText = styled.p`
  opacity: 50%;
  color: var(--white);
`;

const Social = styled.div`
  margin-top: 30px;

  @media (min-width: 770px) {
    margin-top: 0px;
    margin-right: 15px;
    margin-left: auto;
  }
`;

const SocialItem = styled.a`
  margin-right: 25px;
`;
