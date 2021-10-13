import styled from 'styled-components';
import { ArrowLinkDown } from '../components/arrowLinkDown';
import React from 'react';
import { scrollToRef } from '../lib/scrollTo';
import { AboutMe } from '../components/about/aboutMe';
import { Header } from '../components/about/header';
import { VerticalNav } from '../components/verticalNav';
import { Skills } from '../components/about/skills';
import { WorkExperience } from '../components/about/workExperience';
import { NavLinks } from '../components/navLinks';

const Background = styled.div`
  height: 100vh;
  width: 100%;

  display: grid;
  grid-template-rows: 1fr 5fr 1fr;
  grid-template-columns: 1fr 5fr 1fr;
  grid-template-areas:
    '. . socialLinks'
    '. welomingMsg .'
    'leftArrow . rightArrow';
`;

const WelcomingText = styled.p`
  font-size: 10vh;
  font-family: ${({ theme }) => theme.typography.secondaryFont};
  text-transform: uppercase;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  white-space: pre-line;
  text-align: left;
`;

const CenteredWelcoming = styled.div`
  grid-area: welomingMsg;
  place-self: center;
  text-align: center;
`;

const LeadingDownArrow = styled(ArrowLinkDown)`
  grid-column: col 1 / col -1;
  justify-self: center;

  & svg {
    width: 180%;
  }

  margin: 40px 0;
`;

const Index = () => {
  return (
    <>
      <Background>
        <CenteredWelcoming>
          <WelcomingText>{'hello, \n i am sigrid'}</WelcomingText>
          <LeadingDownArrow href="#aboutme" onClick={scrollToRef('#aboutme')} />
        </CenteredWelcoming>

        <NavLinks currPath={''} />
      </Background>
      <Header id={'aboutme'} />
      <AboutMe />
    </>
  );
};

export default Index;
