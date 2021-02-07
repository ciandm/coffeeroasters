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

export const Card = styled.button`
  ${({ selected, theme }) => (selected ? backgroundCyan : `background-color: ${theme.colours.darkCream}`)};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  outline: none;
  padding: 2.4rem;
  text-align: left;

  &:hover,
  &:focus {
    background-color: ${({ theme, selected }) => selected ? theme.colours.darkerCyan : theme.colours.paleOrange};
  }

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    padding: 3.2rem 2.4rem;
  }
`

export const Title = styled(H4)`
  ${({ selected, theme }) => (selected ? colorWhite : `color: ${theme.colours.darkGreyBlue}`)};
  margin-bottom: 8px;
`

export const Description = styled(Body)`
  ${({ selected, theme }) => (selected ? colorWhite : `color: ${theme.colours.darkGreyBlue}`)};
`