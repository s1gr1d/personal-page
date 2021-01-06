import styled from "styled-components";
import { IconLink } from "../components/iconLink";
import { ArrowLink, Variant } from "../components/arrowLink";
import { AiFillMediumCircle, AiFillGithub } from "react-icons/ai";
import React from "react";

const Background = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.colors.background};
`;

const WelcomingText = styled.p`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 80vh;
  font-size: 40px;
  font-family: ${({ theme }) => theme.typography.primaryFont};
  color: ${({ theme }) => theme.colors.text};
`;
const AboutMeLink = styled(ArrowLink)`
  position: absolute;
  bottom: 0;
  left: 0;

  margin-left: 2em;
  margin-bottom: 3em;

  @media (max-width: 650px) {
    margin-bottom: 8em;
  }
`;

const MyWorkLink = styled(ArrowLink)`
  position: absolute;
  bottom: 0;
  right: 0;

  margin-right: 2em;
  margin-bottom: 3em;
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;

  position: absolute;
  top: 0;
  right: 0;
  margin: 2em;
  height: 5.5em;
`;

const Home = () => {
  return (
    <>
      <Background />
      <WelcomingText>{"hello, i am sigrid"}</WelcomingText>
      <AboutMeLink href="/about" variant={Variant.LEFT}>
        {"me and my journey"}
      </AboutMeLink>
      <MyWorkLink href="/work" variant={Variant.RIGHT}>
        {"my work"}
      </MyWorkLink>
      <LinkWrapper>
        <IconLink url={"https://github.com/s1gr1d"} icon={AiFillGithub}>
          {"GitHub"}
        </IconLink>
        <IconLink url={"https://medium.com/@s1gr1d"} icon={AiFillMediumCircle}>
          {"Blog"}
        </IconLink>
      </LinkWrapper>
    </>
  );
};

export default Home;
