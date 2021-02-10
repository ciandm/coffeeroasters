import styled from 'styled-components';

const BigTitle = styled.h1`
  font-family: Fraunces;
  font-style: normal;
  font-weight: 900;
  font-size: 4rem;
  line-height: 7.2rem;
  text-transform: lowercase;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    font-size: 9.6rem;
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    font-size: 15rem;
  }
`

const H1 = styled.h1`
  font-family: Fraunces;
  font-style: normal;
  font-size: ${({ muted }) => muted ? '2.8rem' : '4rem'};
  line-height: ${({ muted }) => muted ? '2.8rem' : '4rem'};

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    font-size: ${({ muted }) => muted ? '3.2rem' : '4.8rem'};
    line-height: ${({ muted }) => muted ? '4rem' : '4.8rem'};
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    font-weight: 900;
    font-size: ${({ muted }) => muted ? '4rem' : '7.2rem'};
    line-height: ${({ muted }) => muted ? '4.8rem' : '7.2rem'};
  }
`

const H2 = styled.h2`
  font-family: Fraunces;
  font-style: normal;
  font-weight: 900;
  font-size: 2.4rem;
  line-height: 2.8rem;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    font-size: 3.2rem;
    line-height: 4.8rem;
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    font-size: 4rem;
  }
`

const H3 = styled.h3`
  font-family: Fraunces;
  font-style: normal;
  font-weight: 900;
  font-size: 2.8rem;
  line-height: 3.2rem;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    font-size: 3.2rem;
    line-height: 3.6rem;
  }
  
`

const H4 = styled.h4`
  font-family: Fraunces;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 32px;
`

const Body = styled.p`
  font-family: Barlow;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
`

const SmallCaps = styled.p`
  font-family: Barlow;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 1px;
`

export {
  BigTitle,
  H1,
  H2,
  H3,
  H4,
  Body,
  SmallCaps
}