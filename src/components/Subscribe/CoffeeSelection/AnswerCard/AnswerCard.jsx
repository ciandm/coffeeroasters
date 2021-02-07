import React from 'react'
import PropTypes from 'prop-types';
import { useSubscription } from '../../SubscriptionProvider/SubscriptionProvider'
import * as S from './styled';

const AnswerCard = ({
  answer,
  description,
  selectionId,
  questionNumber
}) => {

  const {
    subscription,
    selectOption
  } = useSubscription();

  const { selection } = subscription;

  return (
    <S.Card
      selected={selection[selectionId] === answer}
      onClick={() => selectOption({ id: selectionId, name: answer, questionNumber })}
    >
      <S.Title
        selected={selection[selectionId] === answer}
      >{answer}</S.Title>
      <S.Description
        selected={selection[selectionId] === answer}
      >
        {
          /* Access prices based on weight if the selection is about delivery 
            Show correct prices if user has selected a weight, otherwise default prices to 250g*/
        }
        {selectionId === 'delivery' ? description[selection.weight] ?? description['250g'] : description}
      </S.Description>
    </S.Card>
  )
}

export default AnswerCard

AnswerCard.propTypes = {
  answer: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  selectionId: PropTypes.string.isRequired,
}
