import React from 'react'
import PropTypes from 'prop-types';
import * as S from './styled';
// COMPONENTS
import Button from '../Button';

function HeroImage({
  containerHeight,
  backgroundImages,
  title,
  intro,
  button
}) {

  const { text, muted } = title;

  return (
    <S.Outer>
      <S.Container
        containerHeight={containerHeight}
      >
        <S.Wrapper
          images={backgroundImages}
        >
          <S.Content>
            <S.Title
              muted={muted}>
              {text}
            </S.Title>
            <S.Intro>{intro}</S.Intro>
            {
              button &&
              <Button
                label={button.label}
                link={button.link}
              />
            }
          </S.Content>
        </S.Wrapper>
      </S.Container>
    </S.Outer>
  )
}

export default HeroImage

HeroImage.propTypes = {
  containerHeight: PropTypes.oneOf([50, 40]).isRequired,
  backgroundImages: PropTypes.shape({
    mobile: PropTypes.string,
    tablet: PropTypes.string,
    desktop: PropTypes.string,
  }).isRequired,
  title: PropTypes.shape({
    text: PropTypes.string.isRequired,
    muted: PropTypes.bool.isRequired,
  }).isRequired,
  intro: PropTypes.string.isRequired,
  button: PropTypes.shape({
    label: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  })
}
