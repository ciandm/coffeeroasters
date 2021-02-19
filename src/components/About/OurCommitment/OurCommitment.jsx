import React from 'react'
import PropTypes from 'prop-types';
import * as S from './styled';
import ResponsiveImage from '../../shared/ResponsiveImage';

function OurCommitment({
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
            alt="Barista making a coffee"
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

export default OurCommitment

OurCommitment.propTypes = {
  images: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}