import styled from 'styled-components';
import { H2, H3, Body } from '../../../theme/typography';
import { Summary as S } from '../CoffeeSelection/OrderSummary/styled';

export const Overlay = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, .5);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  padding: 3.6rem 2.4rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 54rem;
  z-index: 1;
`

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colours.darkGreyBlue};
  border-radius: 8px 8px 0 0;
  padding: 2.8rem 2.4rem;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    padding: 4.8rem 5.6rem;
  }
`

export const Title = styled(H2)`
  color: #FFF;
`

export const Content = styled.div`
  background-color: ${({ theme }) => theme.colours.lightCream};
  border-radius: 0 0 8px 8px;
  display: flex;
  flex-direction: column;
  padding: 4rem 2.4rem 2.4rem;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    padding: 5.6rem;
  }
`

export const Summary = styled(S)`
  color: ${({ theme }) => theme.colours.grey};
`

export const Paragraph = styled(Body)`
  color: ${({ theme }) => theme.colours.darkGreyBlue};
  opacity: 0.8;
  margin-bottom: 2.4rem;
`

export const ButtonContainer = styled.div`
  align-items: center;
  display: flex;
  margin-top: 2.4rem;
  width: 100%;

  & button {
    flex: 1;
  }
`

export const Price = styled(H3)`
  color: ${({ theme }) => theme.colours.darkGreyBlue};
  margin-right: 1.2rem;
`