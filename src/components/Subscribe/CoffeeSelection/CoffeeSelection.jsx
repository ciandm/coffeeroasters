import React from 'react'
import * as S from './styled';
// COMPONENTS
import QuestionAccordion from './QuestionAccordion';
import OrderSummary from './OrderSummary'
import Button from '../../shared/Button';

function CoffeeSelection({
  selectionOptions
}) {
  return (
    <S.PlanWrapper>
      <S.PlanSelection>
        <S.QuestionGrid>
          {
            selectionOptions.map((s, index) => (
              <QuestionAccordion
                key={s.id}
                iteration={index + 1}
                {...s}
              />
            ))
          }
        </S.QuestionGrid>
        <OrderSummary />
        <Button />
      </S.PlanSelection>
    </S.PlanWrapper>
  )
}

export default CoffeeSelection
