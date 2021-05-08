import styled from 'styled-components';
import { secondaryFont } from './../../styles/utils/typography';
import { gold } from '../../styles/utils';
import { skills } from '../../content/text';
import React from 'react';
import { InformationParagraph } from '../content/informationParagraph';

const StyledGridContainer = styled.section`
  display: grid;
  grid-template-columns:
    [full-start] minmax(9vw, 1fr)
    [title-col] 25vw
    [main-start] minmax(min-content, 100%)
    [main-end] minmax(20px, 1fr)
    [full-end];
`;

const StyledGoldenText = styled.h2`
  text-align: right;
  grid-column: title-col;
  justify-self: end;
  margin-right: 1em;
  font: normal normal bold 2.2em/1 ${secondaryFont};
  text-transform: uppercase;
  color: ${gold[200]};
`;

const StyledParagraph = styled(InformationParagraph)`
  grid-column: main-start;
`;

export const Skills = () => (
  <StyledGridContainer>
    <StyledGoldenText>Skills</StyledGoldenText>
    <StyledParagraph title={'Frontend Software Engineering'} bodyText={skills.frontendEngineering.text} />
    <StyledParagraph title={'User Experience (UX) Design'} bodyText={skills.uxDesign.text} />
  </StyledGridContainer>
);
