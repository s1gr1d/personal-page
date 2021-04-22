import React, { useState } from 'react';
import { TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styled from 'styled-components';
import { TwelveColumnGrid } from '../layout/cssGrid';
import { FiCheckCircle } from 'react-icons/fi';
import { StyledTab, StyledTabs, StyledTabList, AnimatedUnderline } from '../tabs';
import { switchCase } from '../../lib/fp';
import { Card } from './card';
import { Carousel } from '../carousel';
import { skills, workExperience } from '../../content/text';
import { BodyText } from '../content/bodyText';

const decideWidth = switchCase({
  [0]: '12.5%',
  [1]: '34.5%',
  [2]: '20.6%',
})('15%');

const decideMargin = switchCase({
  [0]: '1.2%',
  [1]: '28.5%',
  [2]: '77.8%',
})('15%');

const StyledListItem = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  column-gap: 1rem;
  margin-right: 1.5rem;
  margin-bottom: 1rem;

  & svg {
    margin-top: 5px;
    color: ${({ theme }) => theme.colors.accent};
  }
`;
const Checkpoints = ({ children, className }: { children: string[]; className?: string }) => {
  return (
    <>
      {children.map((child, idx) => (
        <StyledListItem className={className} key={`checkpoint-${idx}`}>
          <FiCheckCircle />
          <p>{child}</p>
        </StyledListItem>
      ))}
    </>
  );
};

const StyledGrid = styled.div`
  display: grid;
  column-gap: 20px;
  grid-template-columns: 1fr 10fr 1fr;
  grid-template-areas: '. card .';

  height: 100%;
  align-content: center;

  padding: 50px 0;
  align-items: start;
`;

const WorkExperience = () => (
  <Carousel isIntrinsicHeight infinite>
    {workExperience.map((item, idx) => (
      <StyledGrid key={`work-${idx}`}>
        <Card title={`${item.position} \nat ${item.company}`} titleRight={item.time}>
          <Checkpoints>{item.checkpoints}</Checkpoints>
        </Card>
      </StyledGrid>
    ))}
  </Carousel>
);

const Skills = () => (
  <Carousel isIntrinsicHeight infinite>
    {[
      <StyledGrid key={'skill-carousel-1'}>
        <Card title={skills.frontendEngineering.title}>
          <BodyText text={skills.frontendEngineering.text} />
        </Card>
      </StyledGrid>,
      <StyledGrid key={'skill-carousel-2'}>
        <Card title={skills.uxDesign.title}>
          <BodyText text={skills.uxDesign.text} />
        </Card>
      </StyledGrid>,
    ]}
  </Carousel>
);

export const KnowledgeTabs = () => {
  const [currSelected, setCurrSelected] = useState(0);
  return (
    <TwelveColumnGrid id={'knowledge'}>
      <StyledTabs selectedIndex={currSelected} onSelect={(selectedIndex) => setCurrSelected(selectedIndex)}>
        <StyledTabList>
          <StyledTab>{'Skills'}</StyledTab>
          <StyledTab>{'Work Experience'}</StyledTab>
          <StyledTab>{'Education'}</StyledTab>
        </StyledTabList>
        <AnimatedUnderline width={decideWidth(currSelected)} marginLeft={decideMargin(currSelected)} />
        <TabPanel>
          <Skills />
        </TabPanel>
        <TabPanel>
          <WorkExperience />
        </TabPanel>
        <TabPanel>
          <h2>TODO</h2>
        </TabPanel>
      </StyledTabs>
    </TwelveColumnGrid>
  );
};
