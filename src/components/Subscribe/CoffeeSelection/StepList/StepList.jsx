import React from 'react'
import PropTypes from 'prop-types';
import * as S from './styled';
// HOOKS
import { useSubscription } from '../../SubscriptionProvider'

const StepList = ({
  listItems
}) => {

  const { subscription } = useSubscription()
  const { currentStep } = subscription;

  return (
    <S.List>
      {
        listItems.map((item, index) => (
          <S.Item
            key={index}
            activeStep={currentStep === index + 1}
          >
            {item}
          </S.Item>
        ))
      }
    </S.List>
  )
}

export default StepList

StepList.propTypes = {
  listItems: PropTypes.array.isRequired,
}