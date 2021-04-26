import styled, { css } from 'styled-components';
import Link from 'next/link';

const StyledNav = styled.nav`
  position: fixed;
  left: 3vw;
  bottom: 0;
  transform: rotate(-90deg);
  transform-origin: left top 0;
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  width: 90vh;
  color: white;
`;

const StyledLink = styled.a<{ active: boolean }>`
  font-family: ${({ theme }) => theme.typography.secondaryFont};
  display: block;
  position: relative;
  font-size: 1.5rem;
  text-transform: uppercase;
  margin: 0 1em 0 1em;
  color: white;
  font-weight: 400;
  text-decoration: none;

  ${({ active }) =>
    active &&
    css`
      border-bottom: 2px solid ${({ theme }) => theme.colors.accent};
      color: ${({ theme }) => theme.colors.text};
    `}

  
  &::after {
    position: absolute;
    content: "";
    background: ${({ theme }) => theme.colors.accent};
    mix-blend-mode: color-dodge;
    width: calc(100%);
    height: 0;
    bottom: 0;
    left: 0;
    transition: all 300ms ease-in-out;
    
  }
  &:hover::after {
    height: calc(100% + 2px);
`;

export const VerticalNav = () => {
  return (
    <StyledNav>
      <StyledList>
        <li>
          <Link href="/work" passHref>
            <StyledLink>{'Projects'}</StyledLink>
          </Link>
        </li>
        <li>
          <Link href="/about" passHref>
            <StyledLink active>{'About'}</StyledLink>
          </Link>
        </li>
      </StyledList>
    </StyledNav>
  );
};
