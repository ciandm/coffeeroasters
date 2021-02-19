import styled from 'styled-components';
import {
  H2,
  Body
} from '../../../theme/typography';

export const Section = styled.section`
  padding: 13.8rem 2.4rem 6rem;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    padding: 23.2rem 4rem 7.2rem;
  }

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    padding: 17.2rem 0 8.4rem;
  }
`

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colours.darkGreyBlue};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 0 2.4rem 6rem;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 0 6rem;
  }

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    flex-wrap: nowrap;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 128rem;
    padding: 8.4rem;
  }
`

export const ImageContainer = styled.div`
  border-radius: 1rem;
  height: 15.6rem;
  min-height: 15.6rem;
  margin-top: -7.8rem;
  overflow: hidden;
  position: relative;
  width: 100%;

  & img {
    bottom: 0;
    height: 100%;
    left: 0;
    object-fit: cover;
    position: absolute;
    width: 100%;
  }

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    flex-basis: 83.333333%;
    height: 32rem;
    margin-top: -16rem;
    width: 83.333333%;
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    flex-basis: 41.666667%;
    height: 47.4rem;
    margin-top: -17.2rem;
    order: 1;
    width: 41.666667%;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    flex-basis: 83.333333%;
    padding: 0 1.6rem;
    width: 83.333333%;
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    flex-basis: 50%;
    text-align: left;
    width: 50%;
  }
`

export const Title = styled(H2)`
  color: ${({ theme }) => theme.colours.lightCream};
  padding: 6.4rem 0 2.4rem;

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    padding-top: 0;
  }
`

export const Text = styled(Body)`
  color: ${({ theme }) => theme.colours.lightCream};
  opacity: 0.8;
`