import styled, { css } from 'styled-components';
import {
  H3,
  H4,
  Body
} from '../../../theme/typography'

export const List = styled.ul`
  color: #FFF;
  display: grid;
  grid-template-columns: 1fr;
  list-style: none;
  gap: 5.6rem;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    position: relative;
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    gap: 9.6rem;
    padding-right: 6.5rem;
  }
`

export const Column = styled.li`
  justify-items: center;
  display: grid;
  gap: 2.4rem;
  position: relative;
  text-align: center;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    justify-items: start;
    padding-top: 6.2rem;
    text-align: left;

    &:first-child::after {
      left: 1.5rem;
    }

    &:last-child::after {
      left: 0;
      width: 1.5rem; 
    }

    &::before,
    &::after {
      content: '';
      display: block;
      position: absolute;
    }

    &::before {
      border: 2px solid ${({ theme }) => theme.colours.darkCyan};
      border-radius: 50px;
      height: 3.2rem;
      width: 3.2rem;
      top: -1.5rem;
      z-index: 2;
    }

    &::after {
      background-color: ${({ theme }) => theme.colours.paleOrange};
      height: 2px;
      width: calc(100% + 1rem);
    }
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    &::after {
      width: calc(100% + 9.5rem);
    }
  }
`

export const Step = styled.div`
  color: ${({ theme }) => theme.colours.paleOrange};
  font-size: 7.2rem;
  line-height: 7.2rem;
`

export const Title = styled(H3)`

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    padding-right: 3rem;
  }
`

export const Description = styled(Body)``

export const Container = styled.div`
  background-color: ${({ variation, theme }) => variation === 'dark' ? theme.colours.darkGreyBlue : 'transparent'};
  border-radius: 1rem;
  margin: 6rem 0;
  padding: 8rem 2.4rem;

  & ${Title} {
    color: ${({ variation, theme }) => variation === 'dark' ? '#FFF' : theme.colours.darkGreyBlue};
  }

  & ${Description} {
    color: ${({ variation, theme }) => variation === 'dark' ? '#FFF' : theme.colours.darkGreyBlue};
  }

  & ${Column} {
    &::before {
      background-color: ${({ variation, theme }) => variation === 'dark' ? 'transparent' : theme.colours.lightCream};
    }
  }

  & a {
    margin-top: 4.8rem;
  }

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    padding: 11.2rem 4rem;
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    margin: 8.4rem auto;
    max-width: 128rem;
    padding: 11.6rem 8.4rem 10rem;
  }
`

export const Tagline = styled(H4)`
  color: ${({ theme }) => theme.colours.grey};
  margin-bottom: 5.6rem;
`