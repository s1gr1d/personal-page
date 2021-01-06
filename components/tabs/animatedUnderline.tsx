import styled from "styled-components";
import React from "react";

type AnimatedUnderlineProps = {
  marginLeft: string;
  width: string;
};

export const StyledUnderline = styled.hr<AnimatedUnderlineProps>`
  height: 0.5rem;
  width: ${({ width }) => width};
  margin-left: ${({ marginLeft }) => marginLeft};
  background: ${({ theme }) => theme.colors.accent};
  border: none;
  transition: 300ms ease-in-out;
`;

export const AnimatedUnderline = ({
  marginLeft,
  width,
}: AnimatedUnderlineProps) => {
  return <StyledUnderline marginLeft={marginLeft} width={width} />;
};
