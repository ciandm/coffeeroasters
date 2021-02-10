import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

function OurCollection({
  title,
  collection
}) {
  return (
    <S.Section>
      <S.Wrapper>
        <S.Headline>
          <S.Title>{title}</S.Title>
        </S.Headline>
        <S.Collection>
          {
            collection.map(c => (
              <S.Column
                key={c.id}
              >
                <S.CoffeeImage
                  src={c.image}
                />
                <S.CoffeeDetails>
                  <S.CoffeeName>{c.name}</S.CoffeeName>
                  <S.CoffeeDescription>{c.description}</S.CoffeeDescription>
                </S.CoffeeDetails>
              </S.Column>
            ))
          }
        </S.Collection>
      </S.Wrapper>
    </S.Section>
  )
}

export default OurCollection

OurCollection.propTypes = {
  title: PropTypes.string.isRequired,
  collection: PropTypes.array.isRequired,
}