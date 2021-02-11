import styled from 'styled-components';
import {
  BigTitle,
  H4,
  Body
} from '../../../theme/typography'

export const Section = styled.section`
  padding: 6rem 0;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    padding: 7.2rem 0;
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    padding: 8.4rem 0;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    padding: 0 4rem;
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    margin: 0 auto;
    max-width: 111rem;
    padding: 2.4rem 0 0;
  }
`

export const Headline = styled.div`
  margin-bottom: 1.2rem;
  position: relative;

  &::after {
    background: linear-gradient(180deg, rgba(254, 252, 247, 0.0001) 0%, #FEFCF7 100%);
    content: '';
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;

    @media ${({ theme }) => theme.mediaQueries.tablet} {
      height: 11.8rem;
      left: unset;
      top: unset;
    }

    @media ${({ theme }) => theme.mediaQueries.desktop} {
      bottom: -4rem;
      height: 19.6rem;
    }
  }

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-bottom: -2rem;
    z-index: -1;
  }
`

export const Title = styled(BigTitle)`
  color: ${({ theme }) => theme.colours.grey};
  text-align: center;
`

export const Collection = styled.div`
  display: grid;
  gap: 4.8rem;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    gap: 3.2rem 1rem;
    grid-template-columns: repeat(12, 1fr);
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    gap: 0 3rem;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
  }
`

export const Column = styled.div`
  display: grid;
  justify-items: center;
  gap: 2.4rem;
  grid-template-columns: 1fr;
  padding: 0 4.8rem;
  text-align: center;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    align-content: center;
    grid-column: 2 / 12;
    gap: 2.4rem 1.6rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    padding: 0;
    text-align: left;
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    gap: 7.2rem;
    grid-column: span 1;
    grid-template-columns: 1fr;
  }
`

export const CoffeeImage = styled.img`
  height: auto;
  width: 20rem;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    grid-row: span 1;
    padding-right: 1.6rem;
    width: 25.5rem;
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    padding-right: 0;
  }
`

export const CoffeeDetails = styled.div`
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    margin-top: 2.4rem;
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    margin-top: 0;
    text-align: center;
  }
`

export const CoffeeName = styled(H4)`
  color: ${({ theme }) => theme.colours.darkGreyBlue};
  width: 100%;

  @media ${({ theme }) => theme.mediaQueries.tablet}{
    margin-bottom: 2.4rem;
  }
`

export const CoffeeDescription = styled(Body)`
  color: ${({ theme }) => theme.colours.darkGreyBlue};
`