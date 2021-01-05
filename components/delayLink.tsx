import React, { forwardRef, MouseEvent, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { ComponentUtilProps, WithChildren } from "../lib/types";

const ForwardedButton = forwardRef(
  ({ onClick, href, children, className }: any, ref) => {
    return (
      // @ts-ignore
      <a href={href} onClick={onClick} ref={ref} className={className}>
        {children}
      </a>
    );
  }
);

type DelayLinkProps = ComponentUtilProps &
  WithChildren<{
    delay?: number;
    // Called after the link is clicked and before the delay timer starts.
    onDelayStart?: Function;
    // Called after the delay timer ends.
    onDelayEnd?: Function;
    // Replace history or not
    replace?: boolean;
    // Link to go to
    href: string;
  }>;

// Inspired by: https://gist.github.com/KimPaow/e900d5b9ac4aa483421c6d19f76bb296
// Functional link component which delays page navigation
export const DelayLink = ({
  children,
  delay = 0,
  onDelayStart = () => {},
  onDelayEnd = () => {},
  replace = false,
  href,
  className,
  ...rest
}: DelayLinkProps) => {
  let timeout: NodeJS.Timeout | null = null;

  const router = useRouter();

  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [timeout]);

  const handleClick = (e: MouseEvent) => {
    // if trying to navigate to current page stop everything
    if (router.pathname === href) return;

    onDelayStart(e, href);

    if (e.defaultPrevented) {
      return;
    }

    e.preventDefault();

    timeout = setTimeout(() => {
      if (replace) {
        router.replace(href);
      } else {
        router.push(href);
      }
      onDelayEnd(e, href);
    }, delay);
  };

  return (
    <Link {...rest} href={href} passHref>
      <ForwardedButton className={className} onClick={handleClick}>
        {children}
      </ForwardedButton>
    </Link>
  );
};
