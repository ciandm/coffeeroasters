import React from 'react'
import * as S from './styled';
import PropTypes from 'prop-types';
import ResponsiveImage from '../../shared/ResponsiveImage';

function UncompromisingQuality({
  images,
  title,
  text
}) {
  return (
    <S.Section>
      <S.Wrapper>
        <S.ImageContainer>
          <ResponsiveImage
            images={images}
            alt="A lovely cup of coffee made fresh"
          />
        </S.ImageContainer>
        <S.Content>
          <S.Title>{title}</S.Title>
          <S.Text>{text}</S.Text>
        </S.Content>
      </S.Wrapper>
    </S.Section>
  )
}

export default UncompromisingQuality
