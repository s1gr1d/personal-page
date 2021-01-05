import styled from "styled-components";
import { WithChildren } from "../../lib/types";



export enum MaxMainWidth {
  XS = "450px",
  M = "900px",
  L = "1180px",
  XL = "1420px",
}

export enum MinSideMargin {
  M = "40px",
}

export enum Spacing {
  NONE = "0px",
  XS = "20px",
  S = "50px",
  M = "80px",
  L = "100px",
}

type GridSectionContainerProps = WithChildren<{
  overflowHidden?: boolean;
  maxMainWidth?: MaxMainWidth;
  minSideMargin?: MinSideMargin;
  spacingTop?: Spacing;
  spacingBottom?: Spacing;
}>;

const GridContainer = styled.section<GridSectionContainerProps>`
  display: grid;
  grid-template-columns: ${({ minSideMargin, maxMainWidth }) =>
    `[full-start] minmax(${minSideMargin}, 1fr)
    [main-start] minmax(min-content, ${maxMainWidth})
    [main-end] minmax(${minSideMargin}, 1fr)
    [full-end];`};
  padding: ${({ spacingTop, spacingBottom }) =>
    `${spacingTop ? spacingTop : 0} ${0} ${spacingBottom ? spacingBottom : 0}`};
  overflow: ${({ overflowHidden }) => (overflowHidden ? "hidden" : "visible")};
`;

export const GridSectionContainer = ({
  children,
  maxMainWidth = MaxMainWidth.M,
  minSideMargin = MinSideMargin.M,
  spacingTop = Spacing.NONE,
  spacingBottom = Spacing.NONE,
  overflowHidden = true,
}: GridSectionContainerProps) => (
  <GridContainer
    overflowHidden={overflowHidden}
    maxMainWidth={maxMainWidth}
    minSideMargin={minSideMargin}
    spacingTop={spacingTop}
    spacingBottom={spacingBottom}
  >
    {children}
  </GridContainer>
);
