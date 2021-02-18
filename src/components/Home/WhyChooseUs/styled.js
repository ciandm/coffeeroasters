import styled from 'styled-components';
import {
  H2,
  H4,
  Body
} from '../../../theme/typography';

export const Section = styled.section`
  padding: 6rem 2.4rem;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    padding: 8.4rem 0;
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    flex-direction: row;
    padding: 8.4rem 0 10rem;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    margin: 0 auto;
    max-width: 128rem;
  }
`

export const ContentIntro = styled.div`
  background-color: ${({ theme }) => theme.colours.darkGreyBlue};
  border-radius: 1rem 1rem 0 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 6.4rem 2.4rem 2.8rem;
  text-align: center;
  z-index: 1;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    padding: 5.6rem 7.4rem 7rem;
    position: relative;

    &::before,
    &::after {
      content: '';
      display: block;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: -1;
    }

    &::before {
      background-color: hsl(216, 17%, 21%);
      border-radius: 0 0 1rem 1rem;
    }

    &::after {
      background-image: url(${require('../../../assets/plan/desktop/bg-steps.png').default};);
      background-size: cover;
      background-repeat: no-repeat;
    }
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    padding: 10rem 0 8.6rem;
  }
`

export const Title = styled(H2)`
  color: ${({ theme }) => theme.colours.lightCream};
  padding-bottom: 2.4rem;

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    max-width: 54rem;
    margin: 0 auto;
  }
`

export const Intro = styled(Body)`
  color: ${({ theme }) => theme.colours.lightCream};
  opacity: .8;

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    max-width: 54rem;
    margin: 0 auto;
  }
`

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  grid-template-rows: repeat(3, 1fr);
  padding: 3.6rem 2.4rem 0;
  position: relative;

  &::before,
  &::after {
    content: '';
    display: block;
    height: 50%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  &::before {
    background-color: hsl(216, 17%, 21%);
    border-radius: 0 0 1rem 1rem;
  }

  &::after {
    background-image: url(${require('../../../assets/plan/desktop/bg-steps.png').default};);
    background-size: cover;
    background-repeat: no-repeat;
  }

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    padding-top: 0;
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    flex-direction: row;
    padding: 0 8.6rem;
  }
`

export const Card = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colours.darkCyan};
  border-radius: 8px;
  color: #FFF;
  display: flex;
  flex-direction: column;
  padding: 7.2rem 2.4rem 4.8rem;
  text-align: center;
  z-index: 1;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    display: grid;
    gap: 1.6rem 5.6rem;
    grid-template-columns: 5.6rem 1fr;
    grid-template-rows: min-content min-content;
    padding: 4rem 4.8rem 4rem 7rem;
    text-align: left;
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    gap: 2.4rem;
    grid-template-columns: 1fr;
    grid-template-rows: 7.2rem min-content min-content;
    justify-items: center;
    padding: 7.2rem 4.8rem 4.8rem;
    text-align: center;
  }
`

export const Icon = styled.img`
  flex-shrink: 0;
  height: 7.2rem;
  object-fit: contain;
  width: 7.2rem;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    height: 5.6rem;
    grid-column: 1 / 2;
    grid-row: span 2;
    width: 5.6rem;
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    height: 7.2rem;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    width: 7.2rem;
  }
`

export const Headline = styled(H4)`
  padding-bottom: 2.4rem;
  padding-top: 5.6rem;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    padding: 0;
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    padding-top: 3.2rem;
  }
`

export const Description = styled(Body)`
  @media ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: 2 / 3;
    grid-row: unset;
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: 1 / 2;
    grid-row: unset;
  }
`