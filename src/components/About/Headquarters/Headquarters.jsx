import React from 'react'
import * as S from './styled';

function Headquarters({ title, headquarters }) {
  return (
    <S.Section>
      <S.Wrapper>
        <S.Title>{title}</S.Title>
        <S.Container>
          {
            headquarters.map(hq => (
              <S.Column key={hq.country}>
                <S.Icon src={hq.icon} alt={`${hq.country} illustration`}/>
                <S.Country>{hq.country}</S.Country>
                <S.Address>
                  {
                    hq.address.map(a => (
                      <S.AddressLine as="li">{a}</S.AddressLine>
                    ))
                  }
                </S.Address>
              </S.Column>
            ))
          }
        </S.Container>
      </S.Wrapper>
    </S.Section>
  )
}

export default Headquarters
