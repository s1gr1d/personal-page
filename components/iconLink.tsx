import React from "react";
import styled, { css } from "styled-components";
import { ComponentUtilProps } from "../lib/types";
import { IconType } from "react-icons";

const showLinkText = css`
  visibility: visible;
  clip-path: inset(0);
`;

const hideLinkText = css`
  visibility: hidden;
  clip-path: inset(0 0 0 100%);
`;
const Link = styled.a`
  display: flex;
  align-items: center;
  position: relative;

  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};

  @media (pointer: coarse) {
    & > p {
      ${showLinkText};
    }
  }

  &:hover {
    & > p {
      ${showLinkText};
    }
  }
`;

const Text = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  /* font-size: L;*/
  font-weight: 400;
  text-transform: lowercase;
  text-decoration: none;
  letter-spacing: 1.5px;

  ${hideLinkText};
  transition: clip-path 275ms ease;

  padding-right: 0.5em;
`;

const IconWrapper = styled.div`
  & svg {
    height: 100%;
    width: 100%;
  }

  height: 2em;
`;

type IconLinkProps = ComponentUtilProps & {
  children: string;
  icon: IconType;
  url: string;
};

export const IconLink = ({
  children,
  icon: Icon,
  url,
  className,
}: IconLinkProps) => {
  return (
    <Link href={url} target="_blank" className={className}>
      <Text>{children}</Text>
      <IconWrapper>
        <Icon />
      </IconWrapper>
    </Link>
  );
};
