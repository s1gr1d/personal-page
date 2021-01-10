import styled, { css } from "styled-components";
import { switchCase } from "../lib/fp";
import { DelayLink } from "./delayLink";
import { ComponentUtilProps } from "../lib/types";
import React from "react";

export enum Variant {
  RIGHT = "right",
  LEFT = "left",
}

const switchRotation = switchCase({
  [Variant.RIGHT]: css`
    text-align: left;

    &:hover {
      transform: translateZ(0) translateX(0.5em);
    }
    & svg {
      transform: rotate(0deg);
    }
  `,
  [Variant.LEFT]: css`
    text-align: right;
    &:hover {
      transform: translateZ(0) translateX(-0.5em);
    }
    & svg {
      transform: rotate(180deg);
    }
  `,
})(css`
  & svg {
    transform: rotate(0deg);
  }
`);

const StyledDelayLink = styled(DelayLink)<{ variant: Variant }>`
  ${({ variant }) => switchRotation(variant)};

  position: relative;
  display: inline-block;
  width: 16.1em;
  height: 3.9em;
  vertical-align: middle;
  text-decoration: none;
  line-height: 3em;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  transition: transform 0.5s;

  & svg {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  g line,
  g polyline {
    fill: none;
    stroke-miterlimit: 10;
  }
  g circle {
    display: block;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 200;
    stroke-dashoffset: 0;
    stroke: ${({ theme }) => theme.colors.text};
    transition: stroke-dashoffset ease-out 0.5s;
  }

  &:hover svg g circle {
    stroke-dashoffset: 200;
  }
`;

type ArrowLinkProps = ComponentUtilProps & {
  onClick?: () => void;
  href: string;
  variant: Variant;
  children?: string;
};

export const ArrowLink = ({
  onClick,
  href,
  variant,
  children,
  className,
}: ArrowLinkProps) => {
  return (
    <StyledDelayLink
      href={href}
      delay={1000}
      variant={variant}
      onDelayStart={onClick}
      className={className}
    >
      <div>
        <svg viewBox="0 0 262 62">
          <g>
            <line y1="30.33" x2="227.62" y2="30.33" />
            <polyline points="222.62 24.84 228.12 30.34 222.62 35.84" />
            <circle
              cx="224.67"
              cy="30.88"
              r="30.5"
              transform="rotate(180 224.67 30.94) scale(1, -1) translate(0, -61)"
            />
          </g>
        </svg>
        <p>{children}</p>
      </div>
    </StyledDelayLink>
  );
};
