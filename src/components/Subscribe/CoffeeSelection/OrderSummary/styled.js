import styled from 'styled-components';
import {
  Body
} from '../../../../theme/typography'

export const OrderSummary = styled.div`
  background-color: ${({ theme }) => theme.colours.darkGreyBlue};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: 12rem 0 5.6rem;
  padding: 2.4rem 3.2rem;
`

export const Title = styled(Body)`
  color: #FFF;
  margin-bottom: .8rem;
  opacity: .5;
  text-transform: uppercase;
`

export const Summary = styled.p`
  color: #FFF;
  font-size: 2.4rem;
  font-family: 'Fraunces', serif;
  font-weight: 900;
  line-height: 4rem;
`

export const SummaryHighlighted = styled.span`
  color: ${({ theme }) => theme.colours.darkCyan};
`