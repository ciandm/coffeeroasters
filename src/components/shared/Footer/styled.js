import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SmallCaps } from '../../../theme/typography';

export const Footer = styled.footer`
  padding: 6rem 2.4rem 7.2rem;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    padding: 7.2rem 4rem;
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    padding: 8.4rem 0;
  }
`

export const Wrapper = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colours.darkGreyBlue};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 128rem;
  padding: 5.4rem;

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    flex-direction: row;
    max-width: 128rem;
    padding: 4.8rem 8.4rem;
  }
`

// Changing colour of text on logo to white
export const LogoContainer = styled.div`
  & svg path:first-child {
    fill: #FFF;
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    margin-right: 10.2rem;
  }
`

export const FooterNav = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 4.8rem 0;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    flex-direction: row;
    padding: 3.2rem 0 6.4rem;
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    padding: 0;
    margin-right: auto;
  }
`

export const FooterItem = styled.li`
  ${SmallCaps};
  color: ${({ theme }) => theme.colours.grey};

  & + & {
    margin-top: 2.4rem;
  }

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    & + & {
      margin-top: 0;
      margin-left: 3.2rem;
    }
  }
`

export const FooterLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colours.lightCream};
  }
`

export const Social = styled.div`
  display: flex;

  & svg {
    cursor: pointer;
  }

  & svg:hover path {
    fill: ${({ theme }) => theme.colours.paleOrange};
  }

  & svg + svg {
    margin-left: 2.4rem;
  }
`
