import styled from "styled-components";
import { FiCheckCircle } from "react-icons/fi";
import React from "react";

const StyledListItem = styled.li`
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

export const Checkpoint = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  return (
    <StyledListItem className={className}>
      <FiCheckCircle />
      <p>{children}</p>
    </StyledListItem>
  );
};

export const Checkpoints = ({
  children,
  className,
}: {
  children: string[];
  className?: string;
}) => {
  return (
    <ul>
      {children.map((child, idx) => (
        <StyledListItem className={className} key={`checkpoint-${idx}`}>
          <FiCheckCircle />
          <p>{child}</p>
        </StyledListItem>
      ))}
    </ul>
  );
};
