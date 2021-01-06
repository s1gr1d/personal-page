import styled from "styled-components";

export const TwelveColumnGrid = styled.section`
  display: grid;
  column-gap: 20px;
  grid-template-columns:
    [full-start] 1fr
    [main-start] repeat(12, [col] minmax(min-content,80px) [col-end])
    [main-end] 1fr
    [full-end];
`;
