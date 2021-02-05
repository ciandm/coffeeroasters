import React from 'react'
import * as S from './styled';
import QuestionAccordion from './QuestionAccordion';
import Button from '../../shared/Button';

function CoffeeSelection() {
  return (
    <S.PlanWrapper>
      <S.PlanSelection>
        <S.QuestionGrid>
          <QuestionAccordion />
          <QuestionAccordion />
          <QuestionAccordion />
          <QuestionAccordion />
          <QuestionAccordion />
        </S.QuestionGrid>
        <Button />
      </S.PlanSelection>
    </S.PlanWrapper>
  )
}

export default CoffeeSelection
