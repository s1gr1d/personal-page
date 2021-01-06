import styled from "styled-components";
import { Tab, TabList, Tabs } from "react-tabs";

export const StyledTab = styled(Tab)`
  display: inline-block;
  bottom: -1px;
  position: relative;
  padding: 6px 12px;
  cursor: pointer;
  font-size: 50px;
  font-family: ${({ theme }) => theme.typography.primaryFont};
  &.react-tabs__tab--selected {
    background: none;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const StyledTabs = styled(Tabs)`
  grid-column: col 2 / col -1;
  margin-top: 4rem;
`;

export const StyledTabList = styled(TabList)`
  display: flex;
  justify-content: space-between;
`;
