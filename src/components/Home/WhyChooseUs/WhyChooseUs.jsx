import React from 'react'
import * as S from './styled'

function WhyChooseUs({
  title,
  intro,
  cards
}) {
  return (
    <S.Section>
      <S.Wrapper>
        <S.ContentIntro>
          <S.Title>{title}</S.Title>
          <S.Intro>{intro}</S.Intro>
        </S.ContentIntro>
        <S.Cards>
          {
            cards.map(c => (
              <S.Card
                key={c.id}
              >
                <S.Icon
                  src={c.icon}
                />
                <S.Headline>{c.title}</S.Headline>
                <S.Description>{c.text}</S.Description>
              </S.Card>
            ))
          }
        </S.Cards>
      </S.Wrapper>
    </S.Section>
  )
}

export default WhyChooseUs
