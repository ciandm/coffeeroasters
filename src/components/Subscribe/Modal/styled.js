import styled from 'styled-components';
import { H2 } from '../../../theme/typography';
import { Summary as S, SummaryHighlighted as SH } from '../CoffeeSelection/OrderSummary/styled';

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, .5);
  bottom: 0;
  left: 0;
  padding: 3.6rem 2.4rem;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1000;
`

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
`

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colours.darkGreyBlue};
  border-radius: 8px 8px 0 0;
  padding: 2.8rem 2.4rem;
`

export const Title = styled(H2)`
  color: #FFF;
`

export const Content = styled.div`
  background-color: ${({ theme }) => theme.colours.lightCream};
  display: flex;
  flex-direction: column;
  padding: 4rem 2.4rem 2.4rem;
`

export const Summary = styled(S)`
  color: ${({ theme }) => theme.colours.grey};
`

export const SummaryHighlighted = styled(SH)``