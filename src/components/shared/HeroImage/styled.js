import styled from 'styled-components';
import { Body } from '../../../theme/typography';

export const Outer = styled.div`
  padding: .8rem 0 6rem;
`

export const Container = styled.div`
  height: ${({ containerHeight }) => `${containerHeight}rem`};
  padding: 0 2.4rem 0;
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
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colours.lightCream};
  font-size: ${({ muted }) => muted ? '2.8rem' : '4rem'};
  line-height: ${({ muted }) => muted ? '2.8rem' : '4rem'};
  margin-bottom: 2.4rem;
`

export const Intro = styled(Body)`
  color: ${({ theme }) => theme.colours.lightCream};
  font-size: 1.5rem;
  line-height: 2.5rem;
  opacity: .8;

  & + a {
    margin-top: 4rem;
  }
`