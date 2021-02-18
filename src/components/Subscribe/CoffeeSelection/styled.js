import styled from 'styled-components';

export const PlanWrapper = styled.main`
  display: flex;
  flex-direction: column;
  padding: 6rem 2.4rem;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    padding: 7.2rem 4rem;
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    display: grid;
    gap: 3rem;
    grid-template-columns: repeat(12, 1fr);
    margin: 0 auto;
    max-width: 111rem;
    padding: 8.4rem 0;
  }
`

export const PlanSelection = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    grid-column: 5 / -1;

    & button {
      align-self: flex-end;
    }
  }
`

export const QuestionGrid = styled.div`
  display: grid;
  gap: 9.6rem;
  grid-template-rows: repeat(5, min-content);
  width: 100%;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    gap: 10rem;
  }
`