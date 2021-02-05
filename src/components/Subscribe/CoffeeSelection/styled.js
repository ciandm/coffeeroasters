import styled from 'styled-components';

export const PlanWrapper = styled.main`
  display: flex;
  flex-direction: column;
  padding: 12rem 2.4rem;
`

export const PlanSelection = styled.div`
  display: flex;
  flex-direction: column;
`

export const QuestionGrid = styled.div`
  display: grid;
  gap: 9.6rem;
  grid-template-rows: repeat(5, min-content);
`