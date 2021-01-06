import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";
import { TwelveColumnGrid } from "../layout/cssGrid";
import { FiCheckCircle } from "react-icons/fi";

const StyledCard = styled.div`
  grid-column: col 3 / col 11;
  display: grid;
  grid-template-columns: minmax(min-content, 2fr) minmax(min-content, 1fr);
  grid-template-rows: 1fr 1fr;
  gap: 0.5em;
  
  padding: 2em 3.5em;
  border-radius: 3px;
  border: 2px solid  ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  );
`;

const StyledDate = styled.p`
  text-align: right;
  font-weight: bold;
  font-size: 25px;
`;

const StyledTitle = styled.p`
  font-size: 25px;
  white-space: pre;
  font-weight: bold;
  margin-bottom: 1em;
`;

const StyledListItem = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  gap: 1rem;
  margin-right: 1.5rem;

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

const StyledCheckpoints = styled(Checkpoints)`
  grid-column: 1 / -1;
`;
const WorkCard = () => {
  return (
    <StyledCard>
      <StyledTitle>{"Frontend Software Engineer \nat myClubs"}</StyledTitle>
      <StyledDate>{"03.2019 - now"}</StyledDate>
      <StyledCheckpoints>
        {[
          "Improved the UX (user experience) of the internal sports course calendar through a redesign, driven by conducting user research and user testing.",
          "Designed and implemented a data insights dashboard to display client ratings with React and Redux.",
          "Initiated a project for developing a Design System",
        ]}
      </StyledCheckpoints>
    </StyledCard>
  );
};

const StyledGrid = styled(TwelveColumnGrid)`
  padding-top: 100px;
  align-items: start;
`;

export const KnowledgeTabs = () => {
  return (
    <section style={{ height: "1000px" }} id={"knowledge"}>
      <Tabs>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
          <Tab>Title 2</Tab>
        </TabList>

        <TabPanel>
          <StyledGrid>
            <WorkCard />
          </StyledGrid>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </section>
  );
};
