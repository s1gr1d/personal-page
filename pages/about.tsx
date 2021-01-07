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
        <p>
          {
            'Hi, I’m Sigrid and welcome to my online portfolio! Let’s get straight to it. I laugh unmistakably loud. But I love to laugh and consider myself as a person with a lot of positive energy. Rumor has it that I’m a "greenie", but the truth is that I’m just trying to live more mindfully. Always on the mission to reduce my plastic waste you can find me in the nearest thrift store or buying biodegradable toothbrushes.'
          }
        </p>
        <br />
        <p>
          {
            "I love getting to know new places to such an extent that I could work as a train operator, considering all the hours I spent in there the last few years. Driven by curiosity I always use this time to learn something new by reading books and listening to my favourite podcasts."
          }
        </p>
        <br />
        <p>{"But all this is just a part of who I am."}</p>
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
