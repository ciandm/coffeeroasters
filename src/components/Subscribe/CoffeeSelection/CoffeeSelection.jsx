import React from 'react'
import PropTypes from 'prop-types';
import * as S from './styled';
// COMPONENTS
import QuestionAccordion from './QuestionAccordion';
import OrderSummary from './OrderSummary'
import Button from '../../shared/Button';
import StepList from './StepList/StepList';
// HOOKS
import { useSubscription } from '../SubscriptionProvider/SubscriptionProvider';
import useWindowSize from '../../../hooks/useWindowSize';

function CoffeeSelection({
  listItems,
  selectionOptions
}) {

  const windowSize = useWindowSize();
  const isDesktop = windowSize > 1032;

  const { subscription } = useSubscription();
  const { selection, stepsCompleted } = subscription;
  return (
    <S.PlanWrapper>
      {
        isDesktop ? (
          <StepList
            listItems={listItems}
          />
        ) : null
      }
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
        <Button
          disabled={selection.preference === 'Capsule' ? stepsCompleted < selectionOptions.length - 1 : stepsCompleted < selectionOptions.length}
          as="button"
        />
      </S.PlanSelection>
    </S.PlanWrapper>
  )
}

export default CoffeeSelection

CoffeeSelection.propTypes = {
  selectionOptions: PropTypes.array.isRequired,
}
