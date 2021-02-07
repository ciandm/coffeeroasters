import React from 'react'
import PropTypes from 'prop-types';
import * as S from './styled';

const SimpleSteps = ({
  steps,
  variation
}) => {
  return (
    <S.Container
      variation={variation}
    >
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
    </S.Container>
  )
}

export default SimpleSteps

SimpleSteps.propTypes = {
  steps: PropTypes.array.isRequired,
  variation: PropTypes.oneOf(['dark', 'light']).isRequired,
}
