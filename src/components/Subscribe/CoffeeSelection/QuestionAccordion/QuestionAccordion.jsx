import React, { useState, useEffect } from 'react'
import * as S from './styled';
import { ReactComponent as Icon } from '../../../../assets/plan/desktop/icon-arrow.svg';
import AnswerCard from '../AnswerCard';
import { useSubscription } from '../../SubscriptionProvider/SubscriptionProvider'

function QuestionAccordion({
  id,
  question,
  iteration,
  options
}) {
  const {
    subscription,
    nextStep
  } = useSubscription();

  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    // if the user selects capsules, we need to disable the option to select
    // a grind preference. Also close to accordion if it is open.
    if (subscription.preference === 'Capsule' && id === 'grind') {
      setDisabled(true);
      setOpen(false);
    } else {
      setDisabled(false);
    }
  }, [subscription, id])

  useEffect(() => {
    console.log('hello');
    if (nextStep === iteration) {
      setOpen(true);
    }
  }, [nextStep, iteration])

  return (
    <S.Container>
      <S.QuestionWrapper
        disabled={disabled}
        onClick={!disabled ? () => setOpen(prevOpen => !prevOpen) : null}>
        <S.Question>{question}</S.Question>
        <Icon />
      </S.QuestionWrapper>
      <S.QuestionList isOpen={open || nextStep === iteration}>
        {
          options.map(o => (
            <AnswerCard
              key={o.id}
              selectionId={id}
              {...o}
            />
          ))
        }
      </S.QuestionList>
    </S.Container >
  )
}

export default QuestionAccordion
