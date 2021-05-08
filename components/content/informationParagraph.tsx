import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { TextArrType } from '../../lib/types';
import { BodyText } from './bodyText';
import { secondaryFont } from '../../styles/utils/typography';

type InformationParagraphProps = {
  title: string;
  children?: ReactElement;
  subtitle?: string;
  bodyText?: TextArrType[];
  className?: string;
};

const StyledTitle = styled.h3<{ hasSubtitle: boolean }>`
  font: normal normal bold 2.2rem / 1 ${secondaryFont};
  white-space: pre;
  margin-bottom: ${({ hasSubtitle }) => (hasSubtitle ? '0' : '0.5em')};
`;

const StyledSubtitle = styled.p`
  font: normal normal bold 1.5rem/2em ${secondaryFont};
  margin-bottom: 0.5em;
  color: grey;
`;

const StyledWrapper = styled.div`
  max-width: 60ch; /* more than that would be hard to read */
  margin-bottom: 3em;
`;

export const InformationParagraph = ({ title, subtitle, bodyText, className, children }: InformationParagraphProps) => (
  <StyledWrapper className={className}>
    <StyledTitle hasSubtitle={!!subtitle}>{title}</StyledTitle>
    {subtitle && <StyledSubtitle>{subtitle}</StyledSubtitle>}
    {bodyText && <BodyText text={bodyText} />}
    {children && children}
  </StyledWrapper>
);
