import styled from 'styled-components';
import { IconLink } from '../components/iconLink';
import { ArrowLink, Variant } from '../components/arrowLink';
import { ArrowLinkDown } from '../components/arrowLinkDown';
import { AiFillMediumCircle, AiFillGithub } from 'react-icons/ai';
import React from 'react';
import { scrollToRef } from '../lib/scrollTo';
import { KnowledgeTabs } from '../components/about/knowledgeTabs';
import { AboutMe } from '../components/about/aboutMe';
import { Header } from '../components/about/header';

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
  font-size: 70px;
  font-family: ${({ theme }) => theme.typography.primaryFont};
  color: ${({ theme }) => theme.colors.text};
`;

const CenteredWelcoming = styled.div`
  grid-area: welomingMsg;
  place-self: center;
  text-align: center;
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
  grid-area: rightArrow;
  position: absolute;
  bottom: 0;
  right: 0;

  margin-right: 2em;
  margin-bottom: 3em;
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
      <Background>
        <CenteredWelcoming>
          <WelcomingText>{'hello, i am sigrid'}</WelcomingText>
          <LeadingDownArrow href="#aboutme" onClick={scrollToRef('#aboutme')} />
        </CenteredWelcoming>
        <AboutMeLink href="/about" variant={Variant.LEFT}>
          {'me and my journey'}
        </AboutMeLink>
        <MyWorkLink href="/work" variant={Variant.RIGHT}>
          {'my work'}
        </MyWorkLink>
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
      <KnowledgeTabs />
    </>
  );
};

export default Index;
