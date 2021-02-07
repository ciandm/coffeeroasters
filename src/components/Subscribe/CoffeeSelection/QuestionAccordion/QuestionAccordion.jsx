import React, { useState, useEffect, useRef } from 'react'
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
  const [disabled, setDisabled] = useState(false);
  const isMounted = useRef(false);

  useEffect(() => {
    // if the user selects capsules, we need to disable the option to select
    // a grind preference. Also close to accordion if it is open.
    if (selection.preference === 'Capsule' && id === 'grind') {
      setDisabled(true);
      setOpen(false);
    } else {
      setDisabled(false);
    }
  }, [selection.preference, id])

  useEffect(() => {
    isMounted.current = true;
  }, [])

  // if the component is mounted, check if it has been disabled and if so, close the accordion
  useEffect(() => {
    if (isMounted.current) {
      if (disabled) {
        setOpen(false)
      } else {
        setOpen(true)
      }
    }
  }, [disabled, isMounted])

  // open accordions if the current step is greater or equal to the iteration of the question
  useEffect(() => {
    if (iteration <= currentStep) {
      setOpen(true)
    } else {
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
