import styled from 'styled-components';
import {
  H1,
  Body
} from '../../../theme/typography';

export const Outer = styled.section`
  padding: .8rem 0 6rem;
  max-width: 128rem;
  margin: 0 auto;

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    padding: 0 0 8.4rem;
  }
`

export const Container = styled.div`
  height: ${({ containerHeight }) => `${containerHeight}rem`};
  padding: 0 2.4rem 0;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    padding: 0 4rem;
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    /* 50 is the taller container */
    height: ${({ containerHeight }) => containerHeight === 50 ? '60rem' : '45rem'};
    padding: 0;
  }
`

export const Wrapper = styled.div`
  align-items: center;
  background-image: ${({ images }) => `url(${images.mobile})`};
  background-size: cover;
  background-position: center;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 0 2.4rem;
  position: relative;
  text-align: center;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    background-image: ${({ images }) => `url(${images.tablet})`};
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(12, 1fr);
    padding: 0;
    text-align: left;
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    background-image: ${({ images }) => `url(${images.desktop})`};
    padding: 0 8.6rem;
  }
`

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    align-items: flex-start;
    grid-column: 2 / 9;
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: 1 / 7;
  }
`

export const Title = styled(H1)`
  color: ${({ theme }) => theme.colours.lightCream};
  margin-bottom: 2.4rem;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    padding-right: 7rem;
  }

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    padding-right: 5rem;
  }
`

export const Intro = styled(Body)`
  color: ${({ theme }) => theme.colours.lightCream};
  font-size: 1.5rem;
  line-height: 2.5rem;
  opacity: .8;

  & + a {
    margin-top: 4rem;
  }

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    padding-right: 10rem;
    font-size: 1.6rem;
    line-height: 2.6rem;
  }
`