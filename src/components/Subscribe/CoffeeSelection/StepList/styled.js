import styled from 'styled-components';

export const List = styled.ol`
  counter-reset: increment-step;
  display: flex;
  flex-direction: column;
  grid-column: 1 / 4;
`

export const Item = styled.li`
  align-items: center;
  color: ${({ theme }) => theme.colours.darkGreyBlue};
  display: flex;
  font-size: 2.4rem;
  font-family: 'Fraunces', serif;
  font-weight: 900;
  line-height: 3.2rem;
  list-style: none;
  opacity: ${({ activeStep }) => activeStep ? 1 : 0.4};
  padding: 2.4rem 0;

  &::before {
    counter-increment: increment-step;
    content: counter(increment-step, decimal-leading-zero);
    color: ${({ theme }) => theme.colours.grey};
    margin-right: 2.8rem;
  }

  &:first-of-type::before {
    color: ${({ theme }) => theme.colours.darkCyan};
  }

  & + & {
    border-top: 1px solid ${({ theme }) => theme.colours.grey};
  }
`