import React from 'react'
import PropTypes from 'prop-types';
import * as S from './styled';
// COMPONENTS
import Button from '../Button';
import ROUTES from '../../../pages/routes';

const SimpleSteps = ({
  steps,
  variation,
  tagline,
  button
}) => {
  return (
    <S.Container
      variation={variation}
    >
      {
        tagline &&
        <S.Tagline>How it works</S.Tagline>
      }
      <S.List>
        {
          steps.map(step => (
            <S.Column
              key={step.step}
            >
              <S.Step>{`0${step.step}`}</S.Step>
              <S.Title>{step.title}</S.Title>
              <S.Description>{step.description}</S.Description>
            </S.Column>
          ))
        }
      </S.List>
      {
        button &&
        <Button
          label={button.label}
          link={button.link}
        />
      }
    </S.Container>
  )
}

export default SimpleSteps

SimpleSteps.propTypes = {
  steps: PropTypes.array.isRequired,
  variation: PropTypes.oneOf(['dark', 'light']).isRequired,
  tagline: PropTypes.string,
  button: PropTypes.shape({
    label: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  })
}
