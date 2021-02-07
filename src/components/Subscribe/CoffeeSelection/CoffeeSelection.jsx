import React from 'react'
import * as S from './styled';
// COMPONENTS
import QuestionAccordion from './QuestionAccordion';
import OrderSummary from './OrderSummary'
import Button from '../../shared/Button';
import { useSubscription } from '../SubscriptionProvider/SubscriptionProvider';

function CoffeeSelection({
  selectionOptions
}) {

  const { subscription } = useSubscription();
  const { selection, stepsCompleted } = subscription;
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
        <Button disabled={selection.preference === 'Capsule' ? stepsCompleted < selectionOptions.length - 1 : stepsCompleted < selectionOptions.length} />
      </S.PlanSelection>
    </S.PlanWrapper>
  )
}

export default CoffeeSelection
