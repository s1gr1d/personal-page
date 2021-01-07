import React from "react";
import styled from "styled-components";
import { DelayLink } from "./delayLink";
import { ComponentUtilProps } from "../lib/types";
import { AnimatedArrowSVG, Variant } from "./buttons/animatedArrowSVG";

const LinkText = styled.div`
  /* TODO : link font */
  color: ${({ theme }) => theme.colors.text};
  margin-right: 1rem;
`;

const StyledDelayLink = styled(DelayLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

type ArrowButtonLinkProps = ComponentUtilProps & {
  variant: Variant;
  href: string;
  children?: string;
};

export const ArrowButtonLink = ({
  variant,
  href,
  children,
  className,
}: ArrowButtonLinkProps) => {
  return (
    <StyledDelayLink href={href} delay={300} className={className}>
      <LinkText>{children}</LinkText>
      <AnimatedArrowSVG variant={variant} />
    </StyledDelayLink>
  );
};
