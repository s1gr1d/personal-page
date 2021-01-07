import React, { useState } from "react";
import { TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";
import { TwelveColumnGrid } from "../layout/cssGrid";
import { FiCheckCircle } from "react-icons/fi";
import {
  StyledTab,
  StyledTabs,
  StyledTabList,
  AnimatedUnderline,
} from "../tabs";
import { switchCase } from "../../lib/fp";
import { Card } from "./card";
import { Carousel } from "../carousel";

const decideWidth = switchCase({
  [0]: "12.5%",
  [1]: "34.5%",
  [2]: "20.6%",
})("15%");

const decideMargin = switchCase({
  [0]: "1.2%",
  [1]: "28.5%",
  [2]: "77.8%",
})("15%");

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
const Checkpoints = ({
  children,
  className,
}: {
  children: string[];
  className?: string;
}) => {
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
  grid-template-areas: ". card .";

  height: 100%;
  align-content: center;

  padding: 50px 0;
  align-items: start;
`;

const WorkExperience = () => (
  <StyledGrid>
    <Card
      title={"Frontend Software Engineer \nat myClubs"}
      titleRight={"03.2019 - now"}
    >
      <Checkpoints>
        {[
          "Improved the UX (user experience) of the internal sports course calendar through a redesign, driven by conducting user research and user testing.",
          "Designed and implemented a data insights dashboard with React and Redux to display client ratings.",
          "Initiated a project for developing a Design System.",
        ]}
      </Checkpoints>
    </Card>
  </StyledGrid>
);

const Skills = () => (
  <Carousel isIntrinsicHeight infinite>
    {[
      <StyledGrid key={"skill-carousel-1"}>
        <Card title={"Frontend Software Engineering"}>
          <>
            <p>
              {
                "I built my first website with simple HTML over 10 years ago. I was always fascinated by how you can immediately see what you are building."
              }
            </p>
            <br />
            <p>
              {
                "By now, I have over 2 years of professional experience in building "
              }
              <b>{"frontend applications with React and Redux."}</b>
            </p>
            <br />
            <p>
              {"My languages of choice are "}
              <b>{"JavaScript and TypeScript"}</b>
              {
                " (having a type system it is so refreshing) and I love to write (and read)"
              }
              <b>{" clean code"}</b>
              {"and having a"}
              <b>{" maintainable software architecture."}</b>
            </p>
            <br />
            <p>
              {
                "In my free-time I love to experiment with diffent technologies like "
              }
              <b>{"Functional Programming with Elm "}</b>
              {"or building 3D experiences with "}
              <b>{"Three.js"}</b>
              {" (preferably with the react-three-fiber renderer)."}
            </p>
          </>
        </Card>
      </StyledGrid>,
      <StyledGrid key={"skill-carousel-2"}>
        <Card title={"User Experience (UX) Design"}>
          <>
            <p>
              {"In order to create a functional website, "}
              <b>{"users can not be excluded from this process."}</b>
            </p>
            <br />
            <p>
              {"For me, Design means "}
              <b>{"finding the perfect solution to a problem. "}</b>
              {
                "Design provides orientation without having to explain much. It should be fun to use an application. But this fun and beauty of a Design should also be meaningful and "
              }
              <b>{"serve the purpose and not be purely artistic."}</b>
            </p>
            <br />
            <p>
              {
                "Our society is shaped by the way the things that surround us are designed. "
              }
              <b>{"Design transports values and ideas "}</b>
              {
                " and I strongly believe that it can help to contribute to a better society."
              }
            </p>
          </>
        </Card>
      </StyledGrid>,
    ]}
  </Carousel>
);

export const KnowledgeTabs = () => {
  const [currSelected, setCurrSelected] = useState(0);
  return (
    <TwelveColumnGrid id={"knowledge"}>
      <StyledTabs
        selectedIndex={currSelected}
        onSelect={(selectedIndex) => setCurrSelected(selectedIndex)}
      >
        <StyledTabList>
          <StyledTab>{"Skills"}</StyledTab>
          <StyledTab>{"Work Experience"}</StyledTab>
          <StyledTab>{"Education"}</StyledTab>
        </StyledTabList>
        <AnimatedUnderline
          width={decideWidth(currSelected)}
          marginLeft={decideMargin(currSelected)}
        />
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
