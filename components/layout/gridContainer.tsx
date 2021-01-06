import styled from "styled-components";
import { WithChildren } from "../../lib/types";

export enum MaxMainWidth {
  M = "900px",
}

export enum MinSideMargin {
  M = "40px",
}

type GridContainerProps = WithChildren<{
  overflowHidden?: boolean;
  maxMainWidth?: MaxMainWidth;
  minSideMargin?: MinSideMargin;
}>;

const StyledGridContainer = styled.section<GridContainerProps>`
  display: grid;
  column-gap: 20px;
  grid-template-columns: ${({ minSideMargin }) =>
    `[full-start] minmax(${minSideMargin}, 1fr)
    [main-start] repeat(12, [col] 80px [col-end])
    [main-end] minmax(${minSideMargin}, 1fr)
    [full-end];`};
`;

export const GridContainer = ({
  children,
  maxMainWidth = MaxMainWidth.M,
  minSideMargin = MinSideMargin.M,

  overflowHidden = true,
}: GridContainerProps) => (
  <StyledGridContainer
    overflowHidden={overflowHidden}
    maxMainWidth={maxMainWidth}
    minSideMargin={minSideMargin}
  >
    {children}
  </StyledGridContainer>
);
