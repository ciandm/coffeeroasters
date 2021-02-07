import styled from 'styled-components';

const BigTitle = styled.h1`
  font-family: Fraunces;
  font-style: normal;
  font-weight: 900;
  font-size: 150px;
  line-height: 72px;
  text-transform: lowercase;
`

const H1 = styled.h1`
  font-family: Fraunces;
  font-style: normal;
  font-weight: 900;
  font-size: 72px;
  line-height: 72px;
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
  font-size: 32px;
  line-height: 36px;
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