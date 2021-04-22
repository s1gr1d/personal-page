import React from "react";
import styled from "styled-components";
import { TwelveColumnGrid } from "../components/layout/cssGrid";
import { ArrowButtonLink } from "../components/arrowButtonLink";
import { Variant } from "../components/buttons/animatedArrowSVG";

/// #########
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

const Header = () => {
  return (
    <StyledGrid>
      <Title>{"every coder has their journey."}</Title>
      <Subtitle>{"This is mine."}</Subtitle>
      <BackButton variant={Variant.RIGHT} href="/">
        {"Back"}
      </BackButton>
    </StyledGrid>
  );
};
/// #########

import Image from "next/image";
import { ArrowLinkDown } from "../components/arrowLinkDown";
import { KnowledgeTabs } from "../components/about/knowledgeTabs";
import { scrollToRef } from "../lib/scrollTo";
import { about } from "../content/text";

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

const AboutMe = () => {
  return (
    <StyledGrid>
      <ImageWrapper>
        <Image
          src="/images/sigrid_portrait.jpg"
          alt="Picture of Sigrid"
          width={500}
          height={500}
        />
      </ImageWrapper>
      <TextWrapper>
        <p>{about.P1}</p>
        <br />
        <p>{about.P2}</p>
        <br />
        <p>{about.P3}</p>
      </TextWrapper>
      <LeadingDownArrow href="#knowledge" onClick={scrollToRef("#knowledge")} />
    </StyledGrid>
  );
};

/// #########

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
