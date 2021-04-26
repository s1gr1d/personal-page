import React from 'react';
import styled from 'styled-components';
import { KnowledgeTabs } from '../components/about/knowledgeTabs';
import { Header } from '../components/about/header';
import { AboutMe } from '../components/about/aboutMe';

const PageStyle = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;
const About = () => {
  return (
    <>
      <PageStyle />
      <Header />
      <AboutMe />
      <KnowledgeTabs />
    </>
  );
};

export default About;
