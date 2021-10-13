import React from 'react';
import styled from 'styled-components';
import { KnowledgeTabs } from '../components/about/knowledgeTabs';
import { Header } from '../components/about/header';
import { AboutMe } from '../components/about/aboutMe';
import { Skills } from '../components/about/skills';
import { WorkExperience } from '../components/about/workExperience';
import { useRouter } from 'next/router';
import { NavLinks } from '../components/navLinks';

const PageStyle = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;
const About = () => {
  const router = useRouter();

  const currPath = router.asPath;

  console.log('rou', currPath);
  return (
    <>
      <PageStyle />
      <NavLinks currPath={currPath} />
      <AboutMe />
      <Skills />
      <WorkExperience />
    </>
  );
};

export default About;
