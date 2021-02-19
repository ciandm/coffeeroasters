import styled from 'styled-components';
import {
  H2,
  Body
} from '../../../theme/typography';

export const Section = styled.section`
  padding: 6rem 2.4rem;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    padding: 7.2rem 4rem;
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    padding: 8.4rem 0;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    margin: 0 auto;
    max-width: 111rem;
  }
`

export const ImageContainer = styled.div`
  border-radius: 12px;
  height: 40rem;
  overflow: hidden;
  position: relative;
  width: 100%;

  & img {
    height: 100%;
    left: 0;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
  }

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    flex-basis: 41.66667%;
    height: 47rem;
    width: 41.66667%;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    justify-content: center;
    flex-shrink: 0;
    flex-basis: 50%;
    text-align: left;
    width: 50%;
  }
`

export const Title = styled(H2)`
  color: ${({ theme }) => theme.colours.darkGreyBlue};
  padding: 4.8rem 0 3rem;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    padding: 0 0 3rem 0;
  }
`

export const Text = styled(Body)`
  color: ${({ theme }) => theme.colours.darkGreyBlue};
  opacity: .8;
`