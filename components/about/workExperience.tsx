import {  workExperience } from '../../content/text';
import React from 'react';
import styled from 'styled-components';
import { InformationParagraph } from '../content/informationParagraph';
import { secondaryFont } from '../../styles/utils/typography';
import { gold } from '../../styles/utils';
import { FiCheckCircle } from 'react-icons/fi';

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

const Checkpoints = ({ children, className }: { children: string[]; className?: string }) => (
  <>
    {children.map((child, idx) => (
      <StyledListItem className={className} key={`checkpoint-${idx}`}>
        <FiCheckCircle />
        <p>{child}</p>
      </StyledListItem>
    ))}
  </>
);

export const WorkExperience = () => (
  <StyledGridContainer>
    <StyledGoldenText>Work Experience</StyledGoldenText>
    {workExperience.map((item, idx) => (
      <StyledParagraph key={`work--${idx}`} title={`${item.position} \nat ${item.company}`} subtitle={item.time}>
        <Checkpoints>{item.checkpoints}</Checkpoints>
      </StyledParagraph>
    ))}
  </StyledGridContainer>
);
