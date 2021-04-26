import styled from 'styled-components';
import { ArrowButtonLink } from '../arrowButtonLink';
import { TwelveColumnGrid } from '../layout/cssGrid';
import { Variant } from '../buttons/animatedArrowSVG';
import React from 'react';

const Title = styled.h1`
  font-family: ${({ theme }) => theme.typography.primaryFont};
  font-size: 85px;
  line-height: 1;
  grid-column: col 1 / col 8;
  color: white;
`;

const Subtitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.primaryFont};
  font-size: 50px;
  line-height: 1;
  grid-column: col 1 / col 8;
  color: ${({ theme }) => theme.colors.textDark};
`;

const BackButton = styled(ArrowButtonLink)`
  padding-top: 15px;
  grid-column: col -1;
  grid-row: -1;
`;

const StyledGrid = styled(TwelveColumnGrid)`
  padding-top: 100px;
  align-items: start;
`;

export const Header = (props: any) => {
  return (
    <StyledGrid {...props}>
      <Title>{'every coder has their journey.'}</Title>
      <Subtitle>{'This is mine.'}</Subtitle>
      <BackButton variant={Variant.RIGHT} href="/">
        {'Back'}
      </BackButton>
    </StyledGrid>
  );
};
