import styled, { css } from 'styled-components'
import {
  H2
} from '../../../../theme/typography'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const QuestionWrapper = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3.2rem;
  width: 100%;

  ${({ disabled }) => disabled && css`
  cursor: not-allowed;
  opacity: .5;
  `}

  & svg {
    ${({ isOpen }) => isOpen ? 'transform: rotate(180deg)' : ''};
    transition: transform 0.4s ease-in-out;
  }
`

export const Question = styled(H2)`
  color: ${({ theme }) => theme.colours.grey};
  flex: 1;
  padding-right: 9rem;
`

export const QuestionList = styled.div`
  display: grid;
  gap: 1.6rem;
  grid-template-rows: repeat(3, 1fr);
  max-height: ${({ isOpen }) => isOpen ? '1000px' : '0'};
  opacity: ${({ isOpen }) => isOpen ? '1' : '0'};
  overflow: ${({ isOpen }) => isOpen ? 'none' : 'hidden'};
  transition: max-height 0.5s ease-in-out, opacity 0.4s ease-in-out;
`