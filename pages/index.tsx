import styled from 'styled-components';
import { IconLink } from '../components/iconLink';
import { ArrowLinkDown } from '../components/arrowLinkDown';
import { AiFillMediumCircle, AiFillGithub } from 'react-icons/ai';
import React from 'react';
import { scrollToRef } from '../lib/scrollTo';
import { AboutMe } from '../components/about/aboutMe';
import { Header } from '../components/about/header';
import { VerticalNav } from '../components/verticalNav';
import { Skills } from '../components/about/skills';
import { WorkExperience } from '../components/about/workExperience';

const Background = styled.div`
  height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
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

const LinkWrapper = styled.div`
  grid-area: socialLinks;
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

const Index = () => {
  return (
    <>
      <VerticalNav />
      <Background>
        <CenteredWelcoming>
          <WelcomingText>{'hello, \n i am sigrid'}</WelcomingText>
          <LeadingDownArrow href="#aboutme" onClick={scrollToRef('#aboutme')} />
        </CenteredWelcoming>
        <LinkWrapper>
          <IconLink url={'https://github.com/s1gr1d'} icon={AiFillGithub}>
            {'GitHub'}
          </IconLink>
          <IconLink url={'https://medium.com/@s1gr1d'} icon={AiFillMediumCircle}>
            {'Blog'}
          </IconLink>
        </LinkWrapper>
      </Background>
      <Header id={'aboutme'} />
      <AboutMe />
      <Skills />
      <WorkExperience />
    </>
  );
};

export default Index;
