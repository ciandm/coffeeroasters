import styled from 'styled-components';
import { H4, H3, Body} from '../../../theme/typography';

export const Section = styled.section`
  display: flex;
  justify-content: center;
  padding: 6rem 1.6rem;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    padding: 7.2rem 4rem;
  }
`

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 111rem;
  width: 100%;

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    padding-right: 6.5rem;
  }
`

export const Title = styled(H4)`
  color: ${({ theme }) => theme.colours.grey};
  margin-bottom: 7.2rem;
`

export const Container = styled.div`
  display: grid;
  gap: 8rem;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  width: 100%;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
  }
`

export const Column = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    align-items: flex-start;
  }
`

export const Icon = styled.img`
  height: 5rem;
  margin-bottom: 4.8rem;
`

export const Country = styled(H3)`
  color: ${({theme }) => theme.colours.darkGreyBlue};
  margin-bottom: 2.2rem;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    font-size: 2.4rem;
    line-height: 3.6rem;
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    font-size: 3.2rem;
  }
`

export const Address = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  text-align: center;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    text-align: left;
  }
`

export const AddressLine = styled(Body)`
  color: ${({ theme }) => theme.colours.darkGreyBlue};
`