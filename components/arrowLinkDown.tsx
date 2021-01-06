import styled from "styled-components";
import { DelayLink } from "./delayLink";
import { ComponentUtilProps } from "../lib/types";
import React from "react";

const StyledDelayLink = styled(DelayLink)`
  &:hover {
    transform: translateY(0.5em);
  }

  transform: rotate(90deg);
  &:hover {
    transform: translateY(0.5em) rotate(90deg);
  }

  position: relative;
  display: inline-block;
  width: 10em;
  height: 4em;
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
  & svg g line,
  svg g polyline,
  svg g circle {
    fill: none;
    stroke-width: 2;
    stroke: ${({ theme }) => theme.colors.text};
  }
  & svg g line,
  svg g polyline {
    stroke-miterlimit: 10;
  }
  & svg g circle {
    display: block;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 200;
    stroke-dashoffset: 0;
    transition: stroke-dashoffset ease-out 0.5s;
  }
  &:hover svg g circle {
    stroke-dashoffset: 200;
  }
`;

type ArrowLinkProps = ComponentUtilProps & {
  onClick?: () => void;
  href: string;
  children?: string;
};

export const ArrowLinkDown = ({
  onClick,
  href,

  children,
  className,
}: ArrowLinkProps) => {
  return (
    <StyledDelayLink
      href={href}
      delay={0}
      onDelayStart={onClick}
      className={className}
    >
      <div>
        <svg viewBox="0 0 262 62">
          <g>
            <line y1="30.33" y2="30.33" x1="110" x2="227.62" />
            <polyline points="217 18 228.12 30.34 217 42" />
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
