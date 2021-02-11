import styled from 'styled-components'
import HAMBURGER from '../../../assets/shared/mobile/icon-hamburger.svg';
import CLOSE from '../../../assets/shared/mobile/icon-close.svg';
import { NavLink } from 'react-router-dom'

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  padding: 3.2rem 2.4rem;
  position: relative;
  z-index: 100;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    padding: 4rem;
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    padding: 5rem 0;
  }
`

export const NavWrapper = styled.div`
  align-items: center;
  display: flex;
  max-width: 128rem;
  width: 100%;
`

export const Logo = styled.img`
  height: 1.8rem;
  margin-right: auto;
`

export const Hamburger = styled.button`
  background: none;
  border: none;
  background-image: ${({ open }) => open ? `url(${CLOSE})` : `url(${HAMBURGER})`};
  background-repeat: no-repeat;
  background-position: center;
  height: 2.4rem;
  outline: none;
  width: 2.4rem;
`

export const NavItems = styled.ul`
  align-items: center;
  display: ${({ open }) => open ? 'flex' : 'none'};
  flex-direction: column;
  left: 0;
  padding: 2.4rem 0;
  position: absolute;
  top: 100%;
  width: 100%;

  &::before {
    background: linear-gradient(0deg, rgba(254, 252, 247, 0.504981) 0%, #FEFCF7 55.94%);
    bottom: 0;
    content: '';
    display: block;
    height: 100vh;
    position: fixed;
    top: 0;
    width: 100vw;
    z-indeX: -1;
  }

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    display: flex;
    flex-direction: row;
    padding: 0;
    position: initial;
    width: auto;

    &::before {
      display: none;
    }
  }
`

export const NavItem = styled(NavLink)`
  color: ${({ theme }) => theme.colours.darkGreyBlue};
  font-size: 2.4rem;
  font-family: "Fraunces", sans-serif;
  font-weight: 900;
  line-height: 3.2rem;
  padding: 1.6rem 0;
  text-decoration: none;

  &.active {
    color: ${({ theme }) => theme.colours.darkCyan};
  }

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    font-family: "Barlow";
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 1px;
    padding: 0;
    text-transform: uppercase;

    & + & {
      margin-left: 3.2rem;
    }
  }

  @media ${({ theme }) => theme.mediaQueries.desktop}{
    &:hover {
      color: ${({ theme }) => theme.colours.darkCyan};  
    }
  }
`