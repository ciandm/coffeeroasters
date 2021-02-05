import React from 'react'
import * as S from './styled';

const AnswerCard = ({
  title,
  description,
  selected
}) => {
  return (
    <S.Card>
      <S.Title>Lorem ipsum dolor</S.Title>
      <S.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae felis sed lacus hendrerit sagittis.</S.Description>
    </S.Card>
  )
}

export default AnswerCard
