import React from "react";
import { ReactComponent as ArrowRight } from "../assets/arrowRight.svg";
import styled, { css } from "styled-components";
import { DelayLink } from "./delayLink";
import { switchCase } from "../lib/fp";
import { ComponentUtilProps } from "../lib/types";

export enum Variant {
  UP = "up",
  RIGHT = "right",
  DOWN = "down",
  LEFT = "left",
}

const switchRotation = switchCase({
  [Variant.UP]: css`
    transform: rotate(-90deg);
  `,
  [Variant.RIGHT]: css`
    transform: rotate(0deg);
  `,
  [Variant.DOWN]: css`
    transform: rotate(90deg);
  `,
  [Variant.LEFT]: css`
    transform: rotate(180deg);
  `,
})(css`
  transform: rotate(0deg);
`);

const Rotate = styled.div<{ variant: Variant }>`
  ${({ variant }) => switchRotation(variant)};
`;

const StyledArrow = styled(ArrowRight)`
  cursor: pointer;
  width: 40px;
  height: 40px;

  transition: transform cubic-bezier(0.65, 0.05, 0.36, 1) 200ms;

  &:hover {
    transform: scale(1.3);
    fill: ${({ theme }) => theme.colors.text};

    g {
      rect {
        stroke: ${({ theme }) => theme.colors.background};
      }
      path {
        stroke: ${({ theme }) => theme.colors.background};
      }
    }
  }
`;

const LinkText = styled.div`
  /* TODO : link font */
  margin-right: 1rem;
`;

const StyledDelayLink = styled(DelayLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

type ArrowButtonLinkProps = ComponentUtilProps & {
  onClick: () => void;
  variant: Variant;
  href: string;
  children: string;
};

export const ArrowButtonLink = ({
  onClick,
  variant,
  href,
  children,
  className,
}: ArrowButtonLinkProps) => {
  return (
    <StyledDelayLink href={href} delay={300} className={className}>
      <LinkText onClick={onClick}>{children}</LinkText>
      <Rotate variant={variant}>
        <StyledArrow onClick={onClick} />
      </Rotate>
    </StyledDelayLink>
  );
};
