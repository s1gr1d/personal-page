import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { ArrowLinkDown } from '../arrowLinkDown';
import { scrollToRef } from '../../lib/scrollTo';
import { about } from '../../content/text';
import { TwelveColumnGrid } from '../layout/cssGrid';

const StyledGrid = styled(TwelveColumnGrid)`
  padding-top: 100px;
  align-items: start;
`;

const TextWrapper = styled.div`
  grid-column: col 6 / col 10;
  color: white;
`;

const ImageWrapper = styled.div`
  grid-column: col 3 / col 6;
`;

const LeadingDownArrow = styled(ArrowLinkDown)`
  grid-column: col 1 / col -1;
  justify-self: center;

  margin: 40px 0;
`;

export const AboutMe = () => {
  return (
    <StyledGrid>
      <ImageWrapper>
        <Image src="/images/sigrid_portrait.jpg" alt="Picture of Sigrid" width={500} height={500} />
      </ImageWrapper>
      <TextWrapper>
        <p>{about.P1}</p>
        <br />
        <p>{about.P2}</p>
        <br />
        <p>{about.P3}</p>
      </TextWrapper>
      <LeadingDownArrow href="#knowledge" onClick={scrollToRef('#knowledge')} />
    </StyledGrid>
  );
};
