import styled, { css } from 'styled-components';
import {
  H4,
  Body
} from '../../../../theme/typography'

const backgroundCyan = css`
  background-color: ${({ theme }) => theme.colours.darkCyan};
`

const colorWhite = css`
  color: #FFF;
`

export const Card = styled.div`
  ${({ selected, theme }) => (selected ? backgroundCyan : `background-color: ${theme.colours.darkCream}`)};
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 2.4rem;

  &:hover {
    background-color: ${({ theme, selected }) => selected ? '' : theme.colours.paleOrange};
  }
`

export const Title = styled(H4)`
  ${({ selected, theme }) => (selected ? colorWhite : `color: ${theme.colours.darkGreyBlue}`)};
  margin-bottom: 8px;
`

export const Description = styled(Body)`
  ${({ selected, theme }) => (selected ? colorWhite : `color: ${theme.colours.darkGreyBlue}`)};
`