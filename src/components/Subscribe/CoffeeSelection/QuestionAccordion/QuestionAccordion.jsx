import React, { useState } from 'react'
import * as S from './styled';
import { ReactComponent as Icon } from '../../../../assets/plan/desktop/icon-arrow.svg';
import AnswerCard from '../AnswerCard';

function QuestionAccordion() {

  const [open, setOpen] = useState(false);

  return (
    <S.Container>
      <S.QuestionWrapper
        isOpen={open}
        onClick={() => setOpen(prevOpen => !prevOpen)}>
        <S.Question>How do you drink your coffee?</S.Question>
        <Icon />
      </S.QuestionWrapper>
      <S.QuestionList isOpen={open}>
        <AnswerCard />
        <AnswerCard />
        <AnswerCard />
      </S.QuestionList>
    </S.Container >
  )
}

export default QuestionAccordion
