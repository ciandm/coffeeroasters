import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom'

export const Button = styled(Link)`
  background-color: ${({ theme }) => theme.colours.darkCyan};
  border-radius: 6px;
  border: none;
  color: ${({ theme }) => theme.colours.lightCream};
  cursor: pointer;
  display: inline-block;
  font-size: 1.8rem;
  font-family: 'Fraunces', sans-serif;
  line-height: 2.5rem;
  outline: none;
  padding: 1.6rem 8rem;
  text-align: center;
  text-decoration: none;

  &:hover,
  &:focus {
    background-color: ${({ disabled }) => disabled ? '' : 'hsl(179,55%,61%)'};
  }

  ${({ disabled }) => disabled && css`
    cursor: not-allowed;
    background-color: hsl(25,11%,87%);
  `}
`