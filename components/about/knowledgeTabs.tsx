import React, { useState } from "react";
import { TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";
import { TwelveColumnGrid } from "../layout/cssGrid";
import {
  StyledTab,
  StyledTabs,
  StyledTabList,
  AnimatedUnderline,
} from "../tabs";
import { switchCase } from "../../lib/fp";
import { Card } from "./card";
import { Carousel } from "../carousel";
import {
  EducationMeta,
  MarkdownData,
  SkillMeta,
  WorkMeta,
} from "../../lib/types/mdContent";
import { Checkpoints } from "../checkpoints";

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

const WorkExperience = ({
  workEntries,
}: {
  workEntries: (WorkMeta & MarkdownData)[];
}) => (
  <Carousel isIntrinsicHeight infinite>
    {[
      <StyledGrid key={"item-1"}>
        <Card
          title={`${workEntries[0].position}\nat ${workEntries[0].company}`}
          titleRight={workEntries[0].timePeriod}
        >
          <Checkpoints>
            {[
              "Improved the UX (user experience) of the internal sports course calendar through a redesign, driven by conducting user research and user testing.",
              "Designed and implemented a data insights dashboard with React and Redux to display client ratings.",
              "Initiated a project for developing a Design System.",
            ]}
          </Checkpoints>
        </Card>
      </StyledGrid>,
      ...workEntries.map((entry, idx) => (
        <StyledGrid key={`${entry.fileName}-${idx}`}>
          <Card
            title={`${entry.position}\nat ${entry.company}`}
            titleRight={entry.timePeriod}
          >
            <div dangerouslySetInnerHTML={{ __html: entry.contentHtml }} />
          </Card>
        </StyledGrid>
      )),
    ]}
  </Carousel>
);

const Skills = ({
  skillEntries,
}: {
  skillEntries: (SkillMeta & MarkdownData)[];
}) => (
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

type KnowledgeTabsProps = {
  workEntries: (WorkMeta & MarkdownData)[];
  skillEntries: (SkillMeta & MarkdownData)[];
  educationEntries: (EducationMeta & MarkdownData)[];
};
export const KnowledgeTabs = ({
  workEntries,
  skillEntries,
  educationEntries,
}: KnowledgeTabsProps) => {
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
          <Skills skillEntries={skillEntries} />
        </TabPanel>
        <TabPanel>
          <WorkExperience workEntries={workEntries} />
        </TabPanel>
        <TabPanel>
          <h2>TODO</h2>
        </TabPanel>
      </StyledTabs>
    </TwelveColumnGrid>
  );
};
