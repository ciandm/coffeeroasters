import React from 'react'
import PropTypes from 'prop-types';
import { useSubscription } from '../../SubscriptionProvider/SubscriptionProvider'
import * as S from './styled';

const AnswerCard = ({
  answer,
  description,
  selectionId
}) => {

  const {
    subscription,
    selectOption
  } = useSubscription();


  return (
    <S.Card
      selected={subscription[selectionId] === answer}
      onClick={() => selectOption({ id: selectionId, name: answer })}/*  */
    >
      <S.Title
        selected={subscription[selectionId] === answer}
      >{answer}</S.Title>
      <S.Description
        selected={subscription[selectionId] === answer}
      >
        {selectionId === 'delivery' ? description[subscription.weight] : description}</S.Description>
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
