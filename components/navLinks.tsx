import { IconLink } from './iconLink';
import Link from 'next/link';
import { AiFillGithub, AiFillMediumCircle } from 'react-icons/ai';
import styled from 'styled-components';

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;

  position: fixed;
  top: 0;
  right: 0;
  margin: 2em;
  height: 5.5em;
`;

const StyledRelativeLi = styled.li`
  position: relative;
  list-style: none;
  cursor: pointer;
`;

const StyledLink = styled.a<{ isActive: boolean }>`
  font-family: ${({ theme }) => theme.typography.secondaryFont};
  font-size: ${({ theme }) => theme.typography.fontSize3};
  color: ${({ theme, isActive }) => (isActive ? theme.colors.accent : theme.colors.text)};
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 0.7px;

  &::after {
    border-radius: 50%;
    content: '';
    height: 12px;
    width: 12px;
    display: block;
    position: absolute;
    right: -20px;
    top: 50%;
    background: ${({ theme, isActive }) => (isActive ? theme.colors.accent : 'none')};
    transform: translateY(-50%) translateZ(0);
    transition: box-shadow 600ms cubic-bezier(0.86, 0, 0.07, 1), box-shadow 600ms cubic-bezier(0.86, 0, 0.07, 1);
  }

  &:hover {
    color: ${({ theme }) => theme.colors.accent};

    &::after {
      box-shadow: inset 0 0 0 1.5px ${({ theme }) => theme.colors.accent};
      border: solid 1px ${({ theme }) => theme.colors.accent};
    }
  }
`;

const StyledIconLink = styled(IconLink)`
  margin-top: 0.5em;
`;

type NavLinksProps = { currPath?: string };

export const NavLinks = ({ currPath }: NavLinksProps) => {
  return (
    <LinkWrapper>
      <Link href={'about'} passHref>
        <StyledRelativeLi>
          <StyledLink isActive={currPath === '/about'}>{'About me'}</StyledLink>
        </StyledRelativeLi>
      </Link>
      {/*
      <Link href={'showcase'} passHref>
        <StyledRelativeLi>
          <StyledLink isActive={currPath === '/showcase'}> {'Showcase'}</StyledLink>
        </StyledRelativeLi>
      </Link>
      <Link href={'writing'} passHref>
        <StyledRelativeLi>
          <StyledLink isActive={currPath === '/writing'}> {'Writing'}</StyledLink>
        </StyledRelativeLi>
      </Link>
      <Link href={'lists'} passHref>
        <StyledRelativeLi>
          <StyledLink isActive={currPath === '/lists'}> {'Lists'}</StyledLink>
        </StyledRelativeLi>
      </Link>
      */}

      <StyledIconLink url={'https://github.com/s1gr1d'} icon={AiFillGithub}>
        {'GitHub'}
      </StyledIconLink>
      <StyledIconLink url={'https://medium.com/@s1gr1d'} icon={AiFillMediumCircle}>
        {'Medium'}
      </StyledIconLink>
    </LinkWrapper>
  );
};
