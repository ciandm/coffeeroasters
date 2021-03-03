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
    subscription
  } = useSubscription();

  const { selection, currentStep } = subscription;

  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    // if the user selects capsules, we need to disable the option to select
    // a grind preference. Also close to accordion if it is open.
    if (selection.preference === 'Capsule' && id === 'grind') {
      setDisabled(true);
      setOpen(false);
    }
  }, [selection.preference, id])

  // when the iteration or currentStep changes, check to enable the accordion and open it
  // for selection. 
  useEffect(() => {
    if(iteration === currentStep) {
      setDisabled(false);
      setOpen(true)
    }

    // if the iteration is greater, i.e. the user has deselected a previous option, then close those after it.
    if(iteration > currentStep) {
      setDisabled(true);
      setOpen(false);
    }
  }, [iteration, currentStep])

  return (
    <S.Container>
      <S.QuestionWrapper
        disabled={disabled}
        onClick={!disabled ? () => setOpen(prevOpen => !prevOpen) : null}>
        <S.Question>{question}</S.Question>
        <S.DropdownButton>
          <Icon />
        </S.DropdownButton>
      </S.QuestionWrapper>
      <S.QuestionList isOpen={open && !disabled}>
        {
          options.map(o => (
            <AnswerCard
              key={o.id}
              selectionId={id}
              questionNumber={iteration}
              {...o}
            />
          ))
        }
      </S.QuestionList>
    </S.Container >
  )
}

export default QuestionAccordion
