import React from "react";
import { ComponentUtilProps, WithChildren } from "../../lib/types";
import styled from "styled-components";

const StyledCard = styled.div`
  grid-area: card;
  display: grid;
  grid-template-columns: minmax(min-content, 2fr) minmax(min-content, 1fr);
  grid-template-rows: min-content min-content;
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

const StyledContent = styled.div`
  grid-column: 1 / -1;
`;

type CardProps = ComponentUtilProps &
  WithChildren<{
    title: string;
    titleRight?: string;
  }>;

export const Card = ({
  title,
  titleRight = "",
  children,
  className,
}: CardProps) => {
  return (
    <StyledCard className={className}>
      <StyledTitle>{title}</StyledTitle>
      <StyledDate>{titleRight}</StyledDate>
      <StyledContent>{children}</StyledContent>
    </StyledCard>
  );
};
